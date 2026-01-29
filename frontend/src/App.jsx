import HeroSection from "./Components/HeroSection"
import Navbar from "./Components/NavBar"
import ProductCard from "./Components/ProductCard"
import { NavbarMenu } from "./MockData/data"
 
function App() {

  return (
      <div className="overflow-x-hidden">
        <Navbar/>
        <HeroSection/>
        
          <ProductCard/>
        
      </div>
  )
}

export default App
