import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Hero from './Components/Hero'
import CoinTable from './Components/CoinTable'
import About from './Components/About'
import Connect from './Components/Connect'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <Header />
        <Hero />
      </header>
      <section>
        <CoinTable />
        <About />
        <Connect />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
