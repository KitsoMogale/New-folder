import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavBar } from './navBar'
import { Body } from './body'
import { Projects } from './projects'
import { Footer } from './footer'

function App() {

  return (
    <>
      <NavBar/>
      <Body/>
      <div id='projectsP'>
       <hr style={{color:'white'}}/>
        <p style={{color:'white' ,fontWeight:'bold'}}>These are my top three projects</p>
        
      </div>
      <Projects/>
      <Footer/>
    </>
  )
}

export default App
