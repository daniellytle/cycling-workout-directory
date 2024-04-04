import { Outlet } from 'react-router';
import './App.css';
import { Link } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <div className='flex justify-center'>
        <div className='container'>
          <header className="flex justify-between items-center border-b border-gray-200 w-full p-4">
            <Link to={'/'}>
              <h1 className='text-3xl font-bold hover:text-gray-600'>
                Cycling Workouts
              </h1>
            </Link>
            <div>
              <Link to={'about'} >
                About
              </Link>
              <Link className='ml-4' to={'https://github.com/daniellytle/cycling-workout-directory'} >
                Github
              </Link>
            </div>
          </header>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
