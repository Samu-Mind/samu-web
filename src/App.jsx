import { useState } from 'react'
import './App.css'

// Sections
import Navbar from './components/navbar.jsx'
import Home from './sections/home.jsx'
import About from './sections/about.jsx'
import Works from './sections/works.jsx'
import Ikigai from './sections/ikigai.jsx'
import Contact from './sections/contact.jsx'
// Components
import Footer from './components/footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="font-sans">
      <Navbar />
      <Home/>
      <Works />
      <About />
      <Ikigai />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
