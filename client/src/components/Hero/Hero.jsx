import React from 'react'
import Slider from 'react-slick'


const HeroData=[
    {
        id:1,
        img:Image1,
        subtitle:"Beats solo",
        title:"Wireless",
        title2:"Headphone",
        description:"Buy headphones (Bluetooth wireless, sports, noise-canceling, waterproof, gaming) from Logitech, Rapoo, Beats by Dre, Sony in Nepal at best price from ITTI."
    },
    {
        id:2,
        img:Image2,
        subtitle:"Beats solo",
        title:"Wireless",
        title2:"virtual",
        description:"Buy headphones (Bluetooth wireless, sports, noise-canceling, waterproof, gaming) from Logitech, Rapoo, Beats by Dre, Sony in Nepal at best price from ITTI."
    },
    {
        id:1,
        img:Image3,
        subtitle:"Beats solo",
        title:"Branded",
        title2:"Laptops",
        description:"Buy headphones (Bluetooth wireless, sports, noise-canceling, waterproof, gaming) from Logitech, Rapoo, Beats by Dre, Sony in Nepal at best price from ITTI."
    },
]

const Hero = () => {
    var setting ={
        dots:true,
        infinite:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1
    };
  return (
    <div>
        <div className='w-full'>
            {/* Hero section */}
            <Slider {...setting}>
            
            </Slider>
        </div>
    </div>
  )
}

export default Hero