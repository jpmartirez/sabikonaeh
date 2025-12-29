import Navbar from "./components/Navbar"
import {Routes, Route} from 'react-router'
import Homepage from "./pages/Homepage"

const App = () => {
  return (
    <div className="bg-[#121022]">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
      </Routes>
    </div>
  )
}

export default App