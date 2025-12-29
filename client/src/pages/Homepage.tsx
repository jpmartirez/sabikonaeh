import Difference from "../components/Difference"
import Features from "../components/Features"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Teams from "../components/Teams"

const Homepage = () => {
  return (
    <div>
        <Hero/>
        <Teams/>
        <Features/>
        <Difference/>
        <Footer/>
    </div>
  )
}

export default Homepage