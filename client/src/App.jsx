import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Category from './components/category/Category'
import Category2 from './components/category/Category2'
import Services from './components/services/Services'
import Banner from './components/Banner/Banner'
import headphone from './assets/hero/headphone.png'




const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Jan to 25 Jan",
  image: headphone,
  title2: "Air solo Bass",
  title3: "Winter Sale",
  title4: "The Handmade Traditional Country Bed The traditional wood country bed frame takes inspiration from classic bed frame",
  bgColor: "#f42c37",
};
const App = () => {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
      <Navbar />
      <Hero />
      <Category />
      <Category2 />
      <Services />
      <Banner data={BannerData} />
    </div>
  )
}

export default App