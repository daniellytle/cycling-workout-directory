interface ZwiftInterval {
  duration: number // Duration of the interval in seconds
  startPower: number // Starting power (% of FTP)
  endPower: number // Ending power (% of FTP)
}

interface ZwiftWorkout {
  name: string // Name of the workout
  description: string // Description of the workout
  author: string // Author of the workout
  intervals: ZwiftInterval[] // Array of intervals
  tags: string[]
  category: string
  rawXML: string
  duration: number
}

export { type ZwiftWorkout, type ZwiftInterval }
