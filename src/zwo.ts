import { ZwiftWorkout, ZwiftInterval } from "./types";
import { XMLParser } from "fast-xml-parser";

const getWorkoutDuration = (intervals: ZwiftInterval[]): number =>
  intervals.reduce((agg, interval) => agg += interval.duration, 0) / 60

const getWorkoutFile = (content: any[]) => 
  content.find(item => item.hasOwnProperty('workout_file')).workout_file

const getWorkout = (content: any[]) => 
  content.find(item => item.hasOwnProperty('workout')).workout

const getTagProperty = (propertyName: string, content: any): string =>
  content[':@'][`@_${propertyName}`] || ""

const parsePowerPercentage = (powerString: string): number =>
  parseFloat(powerString) * 100 // convert to percentage

const getTagText = (tagName: string, content: any[]): string =>
  content.find(item => item.hasOwnProperty(tagName))?.[tagName]?.[0]?.['#text'] || ""


const parseBlock = (content: object): ZwiftInterval =>
  ({ 
    duration: parseInt(getTagProperty("Duration", content)),
    startPower: parsePowerPercentage(getTagProperty("PowerLow", content) || getTagProperty("Power", content) || "0.4"),
    endPower: parsePowerPercentage(getTagProperty("PowerHigh", content) || getTagProperty("Power", content) || "0.4")
  })

const parseSteadyState = (content: object): ZwiftInterval =>
  ({
    duration: parseInt(getTagProperty("Duration", content)),
    startPower: parsePowerPercentage(getTagProperty("Power", content)),
    endPower: parsePowerPercentage(getTagProperty("Power", content))
  })

const parseIntervals = (content: object): ZwiftInterval[] => {
  const repeat = parseInt(getTagProperty("Repeat", content))
  const onDuration = parseInt(getTagProperty("OnDuration", content))
  const onPower = parsePowerPercentage(getTagProperty("OnPower", content))
  const offDuration = parseInt(getTagProperty("OffDuration", content))
  const offPower = parsePowerPercentage(getTagProperty("OffPower", content))
  return [...Array(repeat)].map((i) =>
    [
      { duration: onDuration, startPower: onPower, endPower: onPower },
      { duration: offDuration, startPower: offPower, endPower: offPower }
    ]
  ).flat()
}

const getIntervals = (content: any[]): ZwiftInterval[] =>
  content.map((item) => {
    if (item.hasOwnProperty('IntervalsT')) {
      return parseIntervals(item)
    } else {
      return parseBlock(item)
    }
  }).flat()

function parseZwiftWorkoutString(workoutContent: string): ZwiftWorkout {
  const parser = new XMLParser({
    ignoreAttributes : false,
    preserveOrder: true,
  });
  const content = parser.parse(workoutContent)

  let workoutName = '';
  let workoutDescription = '';
  let workoutCategory: string = '';
  let tags: string[] = [];
  let intervals: ZwiftInterval[] = [];

  const workoutFile = getWorkoutFile(content)
  workoutName = getTagText('name', workoutFile)
  workoutDescription = getTagText('description', workoutFile)
  workoutCategory = getTagText('category', workoutFile)
  // tags

  const workout = getWorkout(workoutFile)
  intervals = getIntervals(workout)
  
  const duration = getWorkoutDuration(intervals)

  return { name: workoutName, description: workoutDescription, intervals, tags, category: workoutCategory, rawXML: workoutContent, duration };
}

export { parseZwiftWorkoutString };