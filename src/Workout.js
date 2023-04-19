export const Workout = ({workout, index, replaceWorkout, deleteWorkout, completeWorkout}) => {
  

  return(
    <li key={index}>
      <p>
        {workout.sets}x sets of <strong>{workout.reps}x{workout.exercise}</strong> with {workout.rest} seconds rest
      </p>
      <button onClick={e => replaceWorkout(workout)}>Replace</button>
      {!workout.done &&
        <button onClick={e=>completeWorkout(workout)}>Done</button>}
      {workout.done &&
        <p>✅</p>}
      <button onClick={e =>deleteWorkout(workout)}>Delete</button>
    </li>
  )
}
