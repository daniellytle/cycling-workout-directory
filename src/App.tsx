import { FaGithub } from "react-icons/fa"
import { Outlet } from "react-router"
import { Link } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <div className="flex justify-center">
        <header className="container fixed bg-white flex justify-between items-center border-b border-gray-200 w-full p-4">
          <Link to={"/"}>
            <h1 className="text-3xl font-bold hover:text-gray-600">
              Cycling Workouts
            </h1>
          </Link>
          <div className="flex">
            <Link to={"about"}>About</Link>
            <Link
              className="ml-4 self-center"
              to={"https://github.com/daniellytle/cycling-workout-directory"}
            >
              <FaGithub />
            </Link>
          </div>
        </header>
        <div className="container mt-16">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default App
