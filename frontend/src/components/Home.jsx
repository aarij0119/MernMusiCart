import React from 'react'
import Header from '../components/Header'
import HeaderBanner from './HeaderBanner'
import Sortedicons from './Sortedicons'

const Home = () => {
  return (
    <div className='px-8 py-6 '>
        <Header />
        <HeaderBanner />
        <Sortedicons />
    </div>
  )
}

export default Home