import WorkoutList from "./WorkoutList";
import React, { useState } from "react";
import {onSnapshot, addDoc, doc, deleteDoc} from "firebase/firestore";
import { db, workoutCollection } from "../../firebase";


function MainContent() {

  const [workoutList, setWorkoutList] = useState([]);
  const [workout, setWorkout] = useState("");

  function handleChange(event) {
    setWorkout(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (workout === "") return;
    await addDoc(workoutCollection, {name: workout});
    setWorkout("");
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  }

  async function deleteWorkout(workoutId) {
    const docRef = doc(db, "workouts", workoutId);
    await deleteDoc(docRef);
  }

  React.useEffect(() => {
    const unsubscribe = onSnapshot(workoutCollection, function(snapshot) {
      const workoutArray = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      setWorkoutList(workoutArray)
    })
    return unsubscribe;
  }, [])

  const workoutItems = workoutList.map(workout => 
    <WorkoutList 
      key={workout.id}
      name={workout.name}
      id={workout.id}
      deleteWorkout={deleteWorkout}
      />
  );

  return (
    <main className="main-content">
      <h1>Today&apos;s Workout</h1>
      <form>
        <input 
          type="text" 
          name="workout" 
          size="100"
          placeholder="Workout Name"
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          value={workout}
        />
        <button id="submit-btn" onClick={handleSubmit}>+</button>
      </form>
      <div className="workout-list">
        {workoutItems}
      </div>
    </main>
  )
}

export default MainContent;