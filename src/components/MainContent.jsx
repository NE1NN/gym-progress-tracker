import WorkoutList from "./WorkoutList";
import React, { useState } from "react";
import {onSnapshot, addDoc, doc, deleteDoc} from "firebase/firestore";
import { db, workoutCollection, allWorkoutCollection } from "../../firebase";
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';

function MainContent() {

  const [allWorkouts, setAllWorkouts] = useState([]);
  const [workoutList, setWorkoutList] = useState([]);
  const [workout, setWorkout] = useState("");

  const sortedWorkoutList = workoutList.sort((a, b) => a.addedTime - b.addedTime);

  function handleChange(event) {
    setWorkout(event.target.value);
  }

  function capitalizeFirstLetter(string) {
    return string
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  async function addWorkout(event) {
    event.preventDefault();
    if (workout === "") return;
    const capitalizedWorkout = capitalizeFirstLetter(workout);
    if (workoutList.some(workoutItem => workoutItem.name === capitalizedWorkout)) {
      alert("Workout already exists!");
      setWorkout("");
      return;
    }

    await addDoc(workoutCollection, {name: capitalizedWorkout, addedTime: Date.now()});
    setWorkout("");
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      addWorkout(event);
    }
  }

  async function deleteWorkout(workoutId) {
    const docRef = doc(db, "workouts", workoutId);
    await deleteDoc(docRef);
  }

  // Collects all workout names from the database and stores them in an array
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

  React.useEffect(() => {
    const unsubscribe = onSnapshot(allWorkoutCollection, function(snapshot) {
      const allWorkoutArray = snapshot.docs.map(doc => ({
        id: doc.id,
        name: doc.data().name
      }))
      setAllWorkouts(allWorkoutArray)
    })
    return unsubscribe;
  }, [])

  const workoutItems = sortedWorkoutList.map(workout => 
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
        <button id="submit-btn" onClick={addWorkout} style={{cursor: "pointer"}}>+</button>
      </form>
      <div className="workout-list">
        {workoutItems}
      </div>
    </main>
  )
}

export default MainContent;