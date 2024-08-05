import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Category from './components/category/Category'
import Category2 from './components/category/Category2'
import Services from './components/services/Services'
import Banner from './components/Banner/Banner'
import headphone from './assets/hero/headphone.png'
import smartwatch2 from './assets/category/smartwatch2.png'
import Product from './components/Product/Product'
import Blogs from './components/Blogs/Blogs'
import Partner from './components/Partner/Partner'
import Footer from './components/Footer/Footer'
import Popup from './components/Popup/Popup'

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

const BannerData2 = {
  discount: "30% OFF",
  title: "Happy Hours",
  date: "10 Jan to 25 Jan",
  image: smartwatch2,
  title2: "Smart Solo",
  title3: "Winter Sale",
  title4: "The Handmade Traditional Country Bed The traditional wood country bed frame takes inspiration from classic bed frame",
  bgColor: "#2dcc6f",
};


const App = () => {
  const [orderPopup,setOrderPopup]=useState(false);
  const handleOrderPopup=()=>{
setOrderPopup(!orderPopup);
  }
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup}/>
      <Category />
      <Category2 />
      <Services />
      <Banner data={BannerData} />
      <Product />
      <Banner data={BannerData2} />
      <Blogs />
      <Partner />
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  )
}

export default App