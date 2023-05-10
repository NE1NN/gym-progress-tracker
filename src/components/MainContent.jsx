function MainContent() {
  return (
    <main className="main-content">
      <h1>Today&apos;s Workout</h1>
      <form>
        <input list="workouts" type="text" id="workout" name="workout" size="100" />
        <datalist id="workouts">
          <option value="Bench Press" />
          <option value="Barbell Squat" />
          <option value="Deadlift" />
        </datalist>
      </form>
      <button id="myBtn" onClick="javascript:alert('Hello World!')">Submit</button>
    </main>
  )
}

export default MainContent;