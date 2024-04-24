import { readFileSync, readdirSync, writeFileSync } from 'fs'

class Aggregator {

  static aggregate = () => {
    let workoutFiles = []
    const filenames = readdirSync('workouts')
    filenames.forEach((filename) => {
      const fileContent = readFileSync(`workouts/${filename}`, { encoding: 'utf8', flag: 'r' })
      workoutFiles.push(fileContent)
    });
    
    writeFileSync('src/dist/workouts.json', JSON.stringify({data: workoutFiles}), { flag: "w+" })
    console.log(`Wrote out new workouts.json file containing ${filenames.length} workouts`)
  }
}

export default {Aggregator};

Aggregator.aggregate()

