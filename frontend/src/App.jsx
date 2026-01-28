import HeroSection from "./Components/HeroSection"
import Navbar from "./Components/NavBar"
import { NavbarMenu } from "./MockData/data"
 
function App() {

  return (
      <div className="overflow-x-hidden">
        <Navbar/>
        <HeroSection/>
      </div>
  )
}

export default App
