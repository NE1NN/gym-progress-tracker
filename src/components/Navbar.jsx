import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <a href="#">Profile</a>
      <a href="#">Calendar</a>
      <a href="#">About</a>
    </nav>
  )
}

export default Navbar