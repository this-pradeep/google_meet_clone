import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <BrowserRouter>
        {/* The rest of your app goes here */}
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='*' element={<NotFound/>}></Route>
          
        </Routes>
  </BrowserRouter>

    </>
  )
}

export default App
