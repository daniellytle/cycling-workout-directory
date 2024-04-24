import { parseZwiftWorkoutString } from "./zwo"
import workoutFile from "./dist/workouts.json"

const validWorkoutStrings = workoutFile.data.filter((workout: string) => {
  try {
    parseZwiftWorkoutString(workout)
    return true
  } catch (error) {
    console.log(`error parsing ${workout}`, error)

  }
  return false
})

const workouts = validWorkoutStrings.map((workout: string) => parseZwiftWorkoutString(workout))

export { workouts }
