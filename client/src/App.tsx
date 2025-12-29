import Navbar from "./components/Navbar"
import {Routes, Route} from 'react-router'
import Homepage from "./pages/Homepage"
import { useUser } from "@clerk/clerk-react"
import SummarizePage from "./pages/SummarizePage"
import ParaphrasePage from "./pages/ParaphrasePage"

const App = () => {
  const {isLoaded, user} = useUser();

  if(!isLoaded) return <div className="flex w-full h-screen items-center justify-center bg-linear-to-b from-[#1B1933] to-[#2815EC]">
    <span className="loading loading-spinner loading-xl"></span>
  </div>

  return (
    <div className="bg-[#121022]">
      <Navbar/>
      <Routes>
        <Route path="/" element={user ? <SummarizePage/> : <Homepage/>}/>
        <Route path="/summarize" element={user ? <SummarizePage/> : <Homepage/>}/>
        <Route path="/paraphrase" element={user ? <ParaphrasePage/> : <Homepage/>}/>
      </Routes>
    </div>
  )
}

export default App