import React, { MouseEventHandler } from 'react';
import { ZwiftWorkout, ZwiftInterval } from './types';

interface MyProps {
  workout: ZwiftWorkout
}

const InfoPopup = ({interval}: {
  interval: ZwiftInterval
}) => {
  return (
    interval && <div>{interval.startPower} Watts</div>
  )
}

const Chart = ({ children, height, width }: {
  children: React.ReactNode,
  height: number,
  width: number,
}) => (
  <svg viewBox={`0 0 ${width} ${height}`} style={{width: "100%", height: "100%"}} preserveAspectRatio={"none"}>
    {children}
  </svg>
)

const Bar = ({ fill = '#000', x, y, height, width, onClick }: {
  fill: string,
  x: number,
  y: number,
  height: number,
  width: number,
  onClick: MouseEventHandler,
}) => (
  <rect fill={fill} x={x} y={y} height={height} width={width} rx="3" onClick={onClick}/>
)

const greatestValue = (values: number[]) =>
  values.reduce((acc, cur) => (cur > acc ? cur : acc), -Infinity)

const powerColor = (interval: ZwiftInterval): string => {
  const power = interval.startPower
  if (power < 55)
    return "#32e73c"
  else if (power < 75)
    return "blue"
  else if (power < 90)
    return "#ffda00"
  else if (power < 105)
    return "orange"
  else
    return "red"
}

const BarChart = ({ intervals } : {intervals: (ZwiftInterval)[]}) => {
  const barMargin = 3
  const width = intervals.reduce((agg, i) => agg + i.duration, 0) + intervals.length * (barMargin)
  const height = greatestValue([100].concat(intervals.map(datum => datum.startPower)))

  return (
    <Chart height={height} width={width}>
      {intervals.map((interval, index) => {
        if (interval.startPower === interval.endPower) {
          return BlockInterval(intervals, interval, index, height, barMargin)
        } else {
          return RampInterval(intervals, interval, index, height, barMargin)
        }
      })}
      {/* FTP Line */}
      {/* <line x1={0} y1={height - 100} x2={width} y2={height - 100} stroke={"red"}/> */}
    </Chart>
  )
}

const BlockInterval = (intervals: ZwiftInterval[], interval: ZwiftInterval, index: number, height: number, barMargin: number) => {
  return <Bar
      onClick={() => console.log(interval)}
      key={index}
      fill={powerColor(interval)}
      x={intervals.slice(0, index).reduce((agg, i) => agg + i.duration + barMargin, 0)}
      y={height - interval.startPower}
      width={interval.duration}
      height={interval.startPower}
    /> 
}

const RampInterval = (intervals: ZwiftInterval[], interval: ZwiftInterval, index: number, height: number, barMargin: number) => {
  const x = intervals.slice(0, index).reduce((agg, i) => agg + i.duration + barMargin, 0)
  return <path 
    key={index}
    d={`M${x},${height-interval.startPower} L${x + interval.duration},${height-interval.endPower} L${x + interval.duration},${height} L${x},${height}`}
    fill={"#ddd"}
    onClick={() => {}}
  />
}

const WorkoutChart: React.FC<MyProps> = (props: MyProps) => {
  return (
    <>
      <BarChart intervals={props.workout.intervals} />
    </>
  );
};

export default WorkoutChart;
