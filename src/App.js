import { useState } from "react"
import {initialWorkouts, generateWorkout} from "./Workouts.js"
import "./App.css"
import { Workout } from "./Workout.js"

function App() {
  const [workouts, setWorkouts] = useState(initialWorkouts)

  const addNewWorkout = () => {
    const newWorkout = generateWorkout()
    setWorkouts([...workouts, newWorkout])
    console.log("addNewWorkout:", newWorkout)
  }

  const deleteWorkout = (workout) => {
    setWorkouts(workouts.filter(item => item !== workout))
    console.log("deleteWorkout:", workout)
  }

  const completeWorkout = (workout) => {
    setWorkouts(workouts.map(item => item === workout ? {...item, done: true} : {...item}))
    console.log("completeWorkout:", workout)
  }

  const replaceWorkout = (workout) => {
    const newWorkout = generateWorkout()
    setWorkouts(workouts.map(item => item === workout ? {...newWorkout} : {...item}))
    console.log("replacedWorkout: ", workout)
  }
    // Add a checkbox with the label "Show Done Only"
    // to allow the user to toggle between all workouts and only workouts that are done.

  const handleChange = (e) => {
    // workouts.map(item => item.done === true ? {...item} : {})

    console.log(e.target.checked)
  }

  return (
    <div className="App">
      <h1>🏋️‍♀️Workout Generator</h1>
      <button onClick={addNewWorkout}>Add New Workout</button>
      <input type="checkbox" onChange={ e => handleChange(e)}/>
      <label>Show Done Only</label>
      <ul>
        {workouts.map((workout, index) => (
          <Workout
            workout = {workout}
            key = {index}
            replaceWorkout = {replaceWorkout}
            completeWorkout = {completeWorkout}
            deleteWorkout = {deleteWorkout}
          />
        ))}
      </ul>
    </div>
  )
}

export default App
