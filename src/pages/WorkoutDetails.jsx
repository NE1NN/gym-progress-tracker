import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Details from '../components/Details';

function WorkoutDetails() {
  const location = useLocation()
  const { name } = location.state
  return (
    <main className="workout-details-page">
      <Navbar />
      <Details name={name}/>
    </main>
  )
}

export default WorkoutDetails;