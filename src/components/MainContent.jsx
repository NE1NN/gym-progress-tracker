import WorkoutList from "./WorkoutList";
import { useState } from "react";

function MainContent() {

  const [workoutList, setWorkoutList] = useState([]);
  const [workout, setWorkout] = useState([]);

  function handleChange(event) {
    setWorkout(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setWorkoutList(prevWorkoutList => [...prevWorkoutList, workout]);
    console.log(workoutList);
  }

  const workoutItems = workoutList.map(workout => <WorkoutList workout={workout} />);

  return (
    <main className="main-content">
      <h1>Today&apos;s Workout</h1>
      <form>
        <input 
          type="text" 
          id="workout" 
          name="workout" 
          size="100" 
          placeholder="Workout Name"
          onChange={handleChange}
        />
        <datalist id="workouts">
          <option value="Bench Press" />
          <option value="Barbell Squat" />
          <option value="Deadlift" />
        </datalist>
      </form>
      <button id="submit-btn" onClick={handleSubmit}>Submit</button>
      <ul class="workout-list">
        {workoutItems}
      </ul>
    </main>
  )
}

export default MainContent;