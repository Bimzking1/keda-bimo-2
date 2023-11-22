import React from 'react'
import Navbar from '../components/Navbar'
import AboutUs from '../components/AboutUs'
import Pricing from '../components/Pricing'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
import Illustration from '../assets/undraw_bg.svg'

const Home = () => {
  return (
    <>  
        <div id="home"></div>
        <Navbar className='z-50 top-0'/>

        <div className='flex w-full flex-col justify-center z-0'>
            <div className='bg-bubble bg-no-repeat bg-cover w-full flex flex-col items-center justify-center h-screen'>
                <div className='mt-4 md:mt-2 z-0 mb-4 w-full md:w-4/5 flex justify-center md:w-1/2 md:justify-end'>
                    <div className='w-full text-center lg:w-1/2 rounded-lg text-gray-800 text-xl pt-4 mx-4'>
                        <div className='w-full text-center lg:pt-16 rounded-lg text-gray-800 text-6xl font-bold pt-4 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]'>
                            Keda Enterprise
                        </div>
                        <div className='w-full text-center rounded-lg text-gray-800 text-xl pt-4'>
                            Expand your business with Our ERP Services
                        </div>
                        <div className='w-full flex justify-center items-center mt-4'>
                            <a href="#pricing" className='w-1/2 bg-[#01B7FE] py-2 text-center rounded-lg text-gray-100 text-xl font-bold hover:bg-white hover:text-gray-800 border-2 hover:border-[#01B7FE] duration-500'>
                                Get Started
                            </a>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-center md:justify-start w-full xl:w-[1280px]'>
                    <div className='mb-8 px-8 w-full italic text-center lg:w-[500px] lg:ml-8 rounded-lg text-gray-800 text-xl pt-4'>
                        We provides various business models
                    </div>
                    <img
                        src={Illustration}
                        className='w-[500px] lg:pl-16 hidden md:flex'
                    />
                </div>
                <div
                    id="aboutus">
                </div>
            </div>
        </div>
        
        <div className='bg-blue-800 w-full flex items-center justify-center'>
            <AboutUs/>
        </div>
        
        <div className='bg-white w-full flex items-center justify-center'>
            <Pricing/>
        </div>
        
        <div className='bg-white w-full flex items-center justify-center'>
            <ContactUs/>
        </div>


        <Footer className='z-50'/>
    </>
  )
}

export default Home