import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import About from './Pages/About'
import Contacts from './Pages/Contacts'
import Header from './Pages/Header'
import HomePage from './Pages/HomePage'
import Projects from './Pages/projects'


function App() {


  return (
    <>
      <div className='bg-dark'>
        <Header />
        <HomePage />
        <About />
        <Projects />
        <Contacts />
      </div>

    </>
  )
}

export default App
