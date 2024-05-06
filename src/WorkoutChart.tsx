import React, { useState, MouseEventHandler, useEffect } from "react"
import { ZwiftWorkout, ZwiftInterval } from "./types"

interface WorkoutChartProps {
  workout: ZwiftWorkout,
}

const Chart = ({
  children,
  height,
  width,
}: {
  children: React.ReactNode
  height: number
  width: number
}) => (
  <svg
    viewBox={`0 0 ${width} ${height}`}
    style={{ width: "100%", height: "100%" }}
    preserveAspectRatio={"none"}
  >
    {children}
  </svg>
)

const greatestValue = (values: number[]) =>
  values.reduce((acc, cur) => (cur > acc ? cur : acc), -Infinity)

const powerColor = (interval: ZwiftInterval): string => {
  const power =
    interval.startPower > interval.endPower
      ? interval.startPower
      : interval.endPower
  if (power < 55) return "#32e73c"
  else if (power < 75) return "#3acc3a"
  else if (power < 90) return "blue"
  else if (power < 105) return "#ffda00"
  else if (power < 120) return "orange"
  else return "red"
}

const BarChart = ({ setActiveInterval, intervals }: { setActiveInterval: (a?: ZwiftInterval) => void, intervals: ZwiftInterval[] }) => {
  const barMargin = 3
  const width =
    intervals.reduce((agg, i) => agg + i.duration, 0) +
    intervals.length * barMargin
  const height = greatestValue(
    [100].concat(intervals.map((datum) => datum.startPower))
  )

  return (
    <Chart height={height} width={width}>
      {intervals.map((interval, index) => {
        if (interval.startPower === interval.endPower) {
          return BlockInterval(setActiveInterval, intervals, interval, index, height, barMargin)
        } else {
          return RampInterval(setActiveInterval, intervals, interval, index, height, barMargin)
        }
      })}
      {/* FTP Line */}
      {/* <line x1={0} y1={height - 100} x2={width} y2={height - 100} stroke={"red"}/> */}
    </Chart>
  )
}

const BlockInterval = (
  setActiveInterval: (a?: ZwiftInterval) => void,
  intervals: ZwiftInterval[],
  interval: ZwiftInterval,
  index: number,
  height: number,
  barMargin: number
) => {
  return (
    <rect
      onMouseEnter={() => setActiveInterval(interval)}
      onMouseLeave={() => setActiveInterval()}
      key={index}
      fill={powerColor(interval)}
      x={intervals
        .slice(0, index)
        .reduce((agg, i) => agg + i.duration + barMargin, 0)}
      y={height - interval.startPower}
      width={interval.duration}
      height={interval.startPower}
    />
  )
}

const RampInterval = (
  setActiveInterval: (a?: ZwiftInterval) => void,
  intervals: ZwiftInterval[],
  interval: ZwiftInterval,
  index: number,
  height: number,
  barMargin: number
) => {
  const x = intervals
    .slice(0, index)
    .reduce((agg, i) => agg + i.duration + barMargin, 0)
  return (
    <path
      onMouseEnter={() => {setActiveInterval(interval)}}
      onMouseLeave={() => setActiveInterval()}
      data-tooltip-target="tooltip-default"
      key={index}
      d={`M${x},${height - interval.startPower} L${x + interval.duration},${height - interval.endPower} L${x + interval.duration},${height} L${x},${height}`}
      fill={powerColor(interval)}
    />
  )
}

function WorkoutChart({workout}: WorkoutChartProps) {

  const [activeInterval, setActiveInterval] = useState<ZwiftInterval>()

  return (
    <>
      <BarChart setActiveInterval={setActiveInterval} intervals={workout.intervals} />
    </>
  )
}

export default WorkoutChart
