import React, { useState, Fragment } from 'react';
import { Link, useParams } from "react-router-dom";

import { ZwiftWorkout } from './types';
import { workouts } from './workouts';
import WorkoutChart from './WorkoutChart';
import { Dialog, Transition } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';
import WorkoutView from './WorkoutView';

const WorkoutList: React.FC = () => {
  const { workoutId } = useParams();
  const selectedWorkout = workouts.find((workout) => workout.name.replace(/\s+/g, '-').toLowerCase() === workoutId);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const filteredWorkouts: ZwiftWorkout[] = workouts.filter(workout =>
    workout.name.replace(/\s+/g, '-').toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedTags.length === 0 || selectedTags.filter(x => workout.tags.includes(x)).length) &&
      (selectedCategories.length === 0 || selectedCategories.includes(workout.category))
  );

  const categories: string[] = Array.from(new Set(workouts.map(item => item.category).flat()));
  const tags: string[] = Array.from(new Set(workouts.map(item => item.tags).flat()));

  const navigate = useNavigate();

  const toggleTag = (tag: string) => {
    const updatedTags = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag];
    setSelectedTags(updatedTags);
  };

  const toggleCategory = (category: string) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter(c => c !== category)
      : [...selectedCategories, category];
    setSelectedCategories(updatedCategories);
  };

  return (
    <div className="flex p-4">
      {/* Filter Panel */}
      <div className="w-1/5 fixed">
        <h2 className="text-lg font-semibold mb-2">Filters</h2>
        <input
          type="text"
          placeholder="Search..."
          className="p-2 border border-gray-300 rounded-md mb-4 w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="mb-4">
          <h3 className="text-sm font-semibold mb-1">Category</h3>
          {categories.map(category => (
            <div key={category} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={category}
                checked={selectedCategories.includes(category)}
                onChange={() => toggleCategory(category)}
                className="mr-2"
              />
              <label htmlFor={category}>{category}</label>
            </div>
          ))}
        </div>
        <div className="mb-4">
          <h3 className="text-sm font-semibold mb-1">Tags</h3>
          {tags.map(tag => (
            <div key={tag} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={tag}
                checked={selectedTags.includes(tag)}
                onChange={() => toggleTag(tag)}
                className="mr-2"
              />
              <label htmlFor={tag}>{tag}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="w-3/4 ml-auto">
        <>
      <Transition appear show={selectedWorkout != null} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => navigate('/')}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  {selectedWorkout && <WorkoutView workout={selectedWorkout} />}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Profile</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredWorkouts.map((workout, i) => (
              <tr key={i} className=" hover:bg-gray-100 cursor-pointer" onClick={() => navigate(`/workouts/${workout.name.replace(/\s+/g, '-').toLowerCase()}`)}>
                  <td className="px-6 py-4 whitespace-nowrap max-w-8">
                    <WorkoutChart workout={workout} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{workout.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{workout.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{Math.round(workout.duration)}min</td>
                </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WorkoutList;
