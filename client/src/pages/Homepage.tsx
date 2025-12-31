import Difference from "../components/Difference"
import Features from "../components/Features"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Teams from "../components/Teams"

const Homepage = () => {
  return (
    <div className="scroll-smooth">
        <Hero/>
        <Teams/>
        <Features/>
        <Difference/>
        <Footer/>
    </div>
  )
}

export default Homepage