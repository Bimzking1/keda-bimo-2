import React from 'react'
import Solution from './../assets/solutions.svg'
import Special from './../assets/special.svg'
import Value from './../assets/value.svg'
import Value2 from './../assets/value2.svg'

const AboutUs = () => {
  return (
    <div className='text-gray-100 py-16 w-full xl:w-[1280px] flex flex-col items-center'>
        <div className='text-5xl font-semibold mb-16'>
            About Us
        </div>
        <div className='px-8'>
            <div className='flex flex-col lg:flex-row gap-8'>
                <div className='flex-flex-col'>
                    <div className='mb-8'>
                        <div className='text-4xl font-semibold'>
                            We Give The Best Business Solutions
                        </div>
                        <div className='text-lg font-semibold mt-8'>
                            Keda Tech are a team of business experts who wants help
                            our clients with the best solutions we can
                            offer. Established in 2013, we have 10 years
                            of experiences making our clients satisfied
                            with their needs of business models.
                        </div>
                    </div>
                    <div className=''>
                        <img
                            src={Solution} 
                            className={`w-full`}
                            alt="logo" 
                        />
                    </div>
                </div>
                <div className='flex-flex-col'>
                    <div className=''>
                        <img 
                            src={Special} 
                            className={`hidden lg:flex w-full`}
                            alt="logo" 
                        />
                    </div>
                    <div className=''>
                        <div className='text-4xl font-semibold mt-8'>
                            We Are Specialized In Business Models
                        </div>
                        <div className='text-lg font-semibold mt-8'>
                            Our Team are capable to serve our clients
                            with the best current business model and 
                            technologies. We always make our team updated
                            and always do a year evaluation of
                            technologies.
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col mt-8'>
                <div className=''>
                    <div className='text-4xl font-semibold'>
                        We Are Focused to Our Core Values
                    </div>
                    <div className='text-lg font-semibold my-8'>
                        Keda Tech focuses on three distinct parts: 
                        the vision, core values, and network. 
                        We uses an expert team to make these
                        things delivered in the best way.

                        Our experts are focused and passionate
                        with their works and product deliveries.
                    </div>
                </div>
                <div className='flex'>
                    <img 
                        src={Value} 
                        className={`w-full md:w-1/2`}
                        alt="logo" 
                    />
                    <img 
                        src={Value2} 
                        className={`hidden md:flex w-1/2`}
                        alt="logo" 
                    />
                </div>
            </div>
        </div>
        <div
            id="pricing">
        </div>
    </div>
  )
}

export default AboutUs