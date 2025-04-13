import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Services from './Components/Services'
import Projects from './Components/Projects'
import Contract from './Components/Contract'
import Footer from './Components/Footer'
function App() {
  

  return (
    <>
      <div>
       <Navbar />
       <Hero />
       <About/>
       <Services/>
       <Projects/>
       <Contract/>
       <Footer />
      </div>
    </>
  )
}

export default App
