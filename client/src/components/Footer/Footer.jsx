import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow } from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";


const FooterLinks = [
    {
        title: "Home",
        link: "/#"
    },
    {
        title: "About",
        link: "/#about"
    },
    {
        title: "Contact",
        link: "/#contact"
    },
    {
        title: "Blog",
        link: "/#blog"
    },
]

const Footer = () => {
    return (
        <div className='dark:bg-gray-900'>
            <div className="container">
                <div className="grid md:grid-cols-3 pb-20 pt-5">
                    {/* company details */}
                    <div className='py-8 px-4'>
                        <a href="#" className='text-primary font-semibold tracking-widest
                        text-2xl uppercase sm:text-3xl'>ESHOP</a>
                        <p className='text-gray-600 dark:text-white/70 lg:pr-24 pt-3'>A smartwatch is a portable device designed to be worn on the wrist, supporting apps and often recording vital signs such as heart rate and other health metrics. It is a wearable computer that </p>
                        <p className="text-gray-500 mt-4"> Made with ♥️ by SUJAN</p>
                        <a href="https://github.com/Sujan545" target='_blank'
                            className='inline-block bg-primary/90 text-white py-2 px-2 mt-4 text-sm rounded-full'>
                            Visit Our github Account
                        </a>
                    </div>
                    {/* Footer Links */}
                    <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
                        <div className='py-8 px-4'>
                            <h1 className='text-xl font-bold sm:text-left mb-3'>Important Links</h1>
                            <ul className='space-y-3'>
                                {
                                    FooterLinks.map((data, index) => (
                                        <li key={index}>
                                            <a href={data.link} className='text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300'
                                            > {data.title}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className='py-8 px-4'>
                            <h1 className='text-xl font-bold sm:text-left mb-3'>Quick Links</h1>
                            <ul className='space-y-3'>
                                {
                                    FooterLinks.map((data, index) => (
                                        <li key={index}>
                                            <a href={data.link} className='text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300'
                                            > {data.title}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        {/* Company Address */}
                        <div className='py-8 px-4 col-span-2 sm:col-auto'>
                        <h1 className='text-xl font-bold sm:text-left mb-3'>Address</h1>
                            <div>
                                <div className="flex items-center gap-3">
                                    <FaLocationArrow />
                                    <p>Birtamode, Jhapa</p>
                                    <p>Nepal</p>
                                </div>
                                <div className="flex items-center gap-3 mt-6">
                                    <FaMobileAlt />
                                    <p>+977 9811121314</p>
                                </div>
                                {/* Social Links */}
                                <div className='flex items-center gap-3 mt-6'>
                                    <a href="#">
                                        <FaInstagram className='text-3xl hover:text-primary duration-300' />
                                    </a>
                                    <a href="#">
                                        <FaFacebook className='text-3xl hover:text-primary duration-300' />
                                    </a>
                                    <a href="#">
                                        <FaLinkedin className='text-3xl hover:text-primary duration-300' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer