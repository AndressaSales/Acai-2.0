import About from "./Components/About"
import Home from "./Components/Home"
import Testimonial from "./Components/Testimonial"

function App() {

  return (
    <div className="min-h-[100vh] w-[85vw] max-w-[1900px] app">
      <Home />
      <About />
      <Testimonial />
    </div>
  )
}

export default App
