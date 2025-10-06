import React from 'react'
import HomeHero from '../components/HomeComponent/homeHero'
import HomeServices from '../components/HomeComponent/HomeServices'
import HomeCollaboration from '../components/HomeComponent/HomeCollaboration'

const Home = () => {
  return (
    <div className=''>
        <HomeHero/>
        <HomeServices/>
        <HomeCollaboration/>
    </div>
  )
}

export default Home