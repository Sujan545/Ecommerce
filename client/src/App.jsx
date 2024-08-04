import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Category from './components/category/Category'
import Category2 from './components/category/Category2'
import Services from './components/services/Services'

const App = () => {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
      <Navbar />
      <Hero />
      <Category />
      <Category2 />
      <Services />
    </div>
  )
}

export default App