import React from 'react'
import Hero from '../components/Hero.jsx';
import './pagesStyles/Home.css'
// import ScrollPosition from "../components/scrollPosition.vue"; // Adjust the import path as needed  

function Home() {
  return (
    <main>
      <Hero msg="Simple Solutions for Complex Problems" />
    </main>
  )
}

export default Home