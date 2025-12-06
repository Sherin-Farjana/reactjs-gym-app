import React from 'react'
import SectionWrapper from './SectionWrapper'
import ExerciseCard from './ExerciseCard'

// Displays generated workout routine
export default function Workout(props) {
  const { workout } = props

  return (
    <SectionWrapper
      id={'workout'}
      header={"Your Ultimate"}
      title={['Workout', 'Execution', 'Zone']}
    >
      {/* Renders exercise list */}
      <div className='flex flex-col gap-4'>
        {workout.map((exercise, i) => (
          <ExerciseCard key={i} i={i} exercise={exercise} />
        ))}
      </div>
    </SectionWrapper>
  )
}
