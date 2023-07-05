import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './Components/Home';
import Posts from './Components/Posts_API';
import Album from './Components/Albums_API';
import Photos from './Components/Photos_API';
import Todo from './Components/Todo_Api';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
            <Route path='/Api1' element={<Posts />} />
            <Route path='/Api2' element={<Album />} />
            <Route path='/Api3' element={<Photos />} />
            <Route path='/Api4' element={<Todo />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
