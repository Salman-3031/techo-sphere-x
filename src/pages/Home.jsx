import React from 'react'
import HomeHero from '../components/HomeComponent/HomeHero'
import HomeServices from '../components/HomeComponent/HomeServices'
import HomeCollaboration from '../components/HomeComponent/HomeCollaboration'

const Home = () => {
  return (
    <div>
        <HomeHero/>
        <HomeServices/>
        <HomeCollaboration/>
    </div>
  )
}

export default Home