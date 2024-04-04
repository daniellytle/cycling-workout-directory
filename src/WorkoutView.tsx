import React from 'react';
import { ZwiftWorkout } from './types';
import WorkoutChart from './WorkoutChart';

interface MyProps {
  workout: ZwiftWorkout
}

const WorkoutView: React.FC<MyProps> = (props: MyProps) => {

  const zwoFile = new Blob([props.workout.rawXML], {type: 'text/plain'})

  return (
    <div className='w-full prose max-w-none'>
      <h2 className='mb-4'>{props.workout.name}</h2>
      <div className='mb-4 p-4 w-full border border-color-gray-600 rounded'>
        <WorkoutChart workout={props.workout} />
      </div>
      <div className='mb-4'>{props.workout.description}</div>
      
      <div className="flex justify-end">
        <a download={props.workout.name + ".zwo"} target="_blank" rel="noreferrer" href={URL.createObjectURL(zwoFile)}
          className="no-underline bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          >
          Download .zwo File
        </a>
      </div>
    </div>
  );
};

export default WorkoutView;
