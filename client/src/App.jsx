import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import VideoCallPage from './pages/VideoCallPage';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <BrowserRouter>
        {/* The rest of your app goes here */}
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/:meetingID' element={<VideoCallPage />} />
          <Route path='*' element={<NotFound/>} />
          
        </Routes>
  </BrowserRouter>

    </>
  )
}

export default App
