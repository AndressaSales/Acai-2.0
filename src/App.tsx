import About from "./Components/About"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import Home from "./Components/Home"
import Testimonial from "./Components/Testimonial"

function App() {

  return (
    <div className="min-h-[100vh] w-[85vw] max-w-[1900px] app">
      <Home />
      <About />
      <Testimonial />
      <Contact />
      <Footer/>
    </div>
  )
}

export default App
