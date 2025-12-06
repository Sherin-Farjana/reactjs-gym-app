import { useState , useEffect} from 'react'
import Hero from './components/Hero'
import Generator from './components/Generator'
import Workout from './components/Workout'
import { generateWorkout } from './utils/functions'
import './index.css'

// Root application component
function App() {
  // Stores generated workout plan
  const [workout, setWorkout] = useState(null)

  // Workout configuration state
  const [poison, setPoison] = useState('individual')
  const [muscles, setMuscles] = useState([])
  const [goal, setGoal] = useState('strength_power')

  // Generates workout based on current selections
  function updateWorkout() {
    if (muscles.length < 1) {
      return
    }

    let newWorkout = generateWorkout({ poison, muscles, goal })
    setWorkout(newWorkout)

    // Scrolls to workout section after generation
    window.location.href = '#workout'
  }

  useEffect(() => {
    if (workout) {
      window.location.href = '#workout'
    }
  }, [workout])


  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-r from-purple-900 via-indigo-900 to-grey to-[#24243e] text-white text-sm sm:text-base'>
      <Hero />

      <Generator
        poison={poison}
        setPoison={setPoison}
        muscles={muscles}
        setMuscles={setMuscles}
        goal={goal}
        setGoal={setGoal}
        updateWorkout={updateWorkout}
      />

      {/* Renders workout section only after generation */}
      {workout && (<Workout workout={workout} />)}
    </main>
  )
}

export default App