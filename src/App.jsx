import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import video from "./assets/video.mp4"

function App() {

  return (
    <>
      <video autoPlay loop muted src={video}></video>
      <Navbar />
      <Home />
    </>
  )
}

export default App
