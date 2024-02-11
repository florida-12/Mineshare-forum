import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import reactLogo from './assets/react.svg'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home'
import Teams from './Teams'

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
      </Routes>
    </Router>
  )

}

export default App
