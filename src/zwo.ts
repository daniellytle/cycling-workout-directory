import { ZwiftWorkout, ZwiftInterval } from "./types";

function parseZwiftWorkoutString(workoutContent: string): ZwiftWorkout {
  const lines = workoutContent.split('\n').map(line => line.trim());

  let workoutName = '';
  let workoutDescription = '';
  let category: string = '';
  let tags: string[] = [];
  const intervals: (ZwiftInterval)[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.startsWith('<name>')) {
      workoutName = line.substring(6, line.length - 7).trim();
    } else if (line.startsWith('<description>')) {
      workoutDescription = line.substring(13, line.length - 14).trim();
    } else if (line.startsWith('<category>')) {
      category = line.substring(10, line.length - 11).trim();
    } else if (line.startsWith('<workout>')) {
      for (let j = i + 1; j < lines.length; j++) {
        const nextLine = lines[j];
        if (nextLine.startsWith('</workout>')) {
          break;
        } else if (nextLine.startsWith('<SteadyState')) {
          // Extract interval details
          const duration = parseInt(nextLine.match(/Duration="(.*?)"/)![1], 10);
          const power = parseFloat(nextLine.match(/Power="(.*?)"/)![1]) * 100; // Convert to percentage
          intervals.push({ duration, startPower: power, endPower: power });
        } else if (nextLine.startsWith('<FreeRide')) {
          // Extract interval details
          const duration = parseInt(nextLine.match(/Duration="(.*?)"/)![1], 10);
          intervals.push({ duration, startPower: 50, endPower: 50 });
        } else if (nextLine.startsWith('<Warmup')) {
          // Extract interval details
          const duration = parseInt(nextLine.match(/Duration="(.*?)"/)![1], 10);
          const powerLow = parseFloat(nextLine.match(/PowerLow="(.*?)"/)![1]) * 100; // Convert to percentage
          const powerHigh = parseFloat(nextLine.match(/PowerHigh="(.*?)"/)![1]) * 100; // Convert to percentage
          intervals.push({ duration, startPower: powerLow, endPower: powerHigh });
        } else if (nextLine.startsWith('<Cooldown')) {
          // Extract interval details
          const duration = parseInt(nextLine.match(/Duration="(.*?)"/)![1], 10);
          const powerLow = parseFloat(nextLine.match(/PowerLow="(.*?)"/)![1]) * 100; // Convert to percentage
          const powerHigh = parseFloat(nextLine.match(/PowerHigh="(.*?)"/)![1]) * 100; // Convert to percentage
          intervals.push({ duration, startPower: powerLow, endPower: powerHigh });
        } else if (nextLine.startsWith('<IntervalsT')) { // <IntervalsT Repeat="2" OnDuration="30" OffDuration="30" OnPower="0.98" OffPower="0.63"/>
          // Extract interval details
          const count = parseInt(nextLine.match(/Repeat="(.*?)"/)![1], 10);
          const onDuration = parseInt(nextLine.match(/OnDuration="(.*?)"/)![1], 10);
          const offDuration = parseInt(nextLine.match(/OffDuration="(.*?)"/)![1], 10);
          const onPower = parseFloat(nextLine.match(/OnPower="(.*?)"/)![1]) * 100; // Convert to percentage
          const offPower = parseFloat(nextLine.match(/OffPower="(.*?)"/)![1]) * 100; // Convert to percentage
          intervals.push(...[...Array(count)].map((_, i) => 
            [
              {duration: onDuration, startPower: onPower, endPower: onPower}, // On interval
              {duration: offDuration, startPower: offPower, endPower: offPower} // Rest interval
            ]
          ).flat());
        }
      }
    } else if (line.startsWith('<tags>')) {
      for (let j = i + 1; j < lines.length; j++) {
        const nextLine = lines[j];
        if (nextLine.startsWith('</tags>')) {
          break;
        } else if (nextLine.startsWith('<tag')) {
          // Extract tag
          const tag = nextLine.match(/name="(.*?)"/)![1]
          tags.push(tag);
        }
      }
    }
  }

  return { name: workoutName, description: workoutDescription, intervals, tags, category, rawXML: workoutContent };
}

export { parseZwiftWorkoutString };