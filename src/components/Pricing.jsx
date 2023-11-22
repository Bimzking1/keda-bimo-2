import React from 'react'
import Basic from './../assets/basic.svg'
import Business from './../assets/business.svg'
import Enterprise from './../assets/enterprise.svg'
import { ToastContainer, toast } from 'react-toastify';

const Pricing = () => {

    const basicSubsribe = () => {
        toast.success('Basic Plan subscribed!', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    const businessSubsribe = () => {
        toast.success('Business Plan subscribed!', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    const enterpriseSubsribe = () => {
        toast.success('Enterprise Plan subscribed!', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    return (
        <div className='text-gray-800 py-16 w-full xl:w-[1280px] flex flex-col items-center'>
            <div className='text-5xl font-bold mb-16'>
                Pricing
            </div>
            <div className='px-8'>
                <div className='flex flex-col lg:flex-row gap-8'>
                    <div className='shadow-xl hover:shadow-2xl border-2 border-[#01B7FE] px-4 py-8 text-center rounded-3xl'>
                        <div className='flex justify-center items-center mb-4'>
                            <img
                                src={Basic}
                                className='w-[250px] h-[150px]'
                            />
                        </div>
                        <div className='text-xl font-bold mb-4'>
                            Basic Plan
                        </div>
                        <div className='flex justify-center items-end'>
                            <div className='text-2xl md:text-3xl font-bold'>
                                Rp 299.000
                            </div>
                            <div className='text-md font-bold pl-2'>
                                / Month
                            </div>
                        </div>
                        <div className='text-xs my-4'>
                            Subscribe and get following benefits:
                        </div>
                        <div className='text-md my-1 font-bold text-green-600'>
                            Record incoming items
                        </div>
                        <div className='text-md my-1 font-bold text-green-600'>
                            Record outgoing items
                        </div>
                        <div className='text-md my-1 font-bold text-green-600'>
                            Record profits
                        </div>
                        <div className='text-md my-1 font-bold text-gray-600'>
                            Sales analysis by Chart
                        </div>
                        <div className='text-md my-1 font-bold text-gray-600'>
                            24/7 Support
                        </div>
                        <div className='text-md my-1 font-bold text-gray-600'>
                            Export data to Excel
                        </div>
                        <div className='text-md my-1 font-bold text-gray-600'>
                            AI profit predictor
                        </div>
                        <div className='mt-8'>
                            <button onClick={() => {basicSubsribe()}} className='text-xl font-bold hover:text-gray-100 text-gray-800 hover:bg-[#01B7FE] bg-[#5ED1EA] duration-500 py-2 px-6 rounded-full'>
                                Subscribe Now
                            </button>
                        </div>
                    </div>
                    <div className='shadow-xl hover:shadow-2xl border-2 border-[#01B7FE] px-4 py-8 text-center rounded-3xl'>
                        <div className='flex justify-center items-center mb-4'>
                            <img
                                src={Business}
                                className='w-[250px] h-[150px]'
                            />
                        </div>
                        <div className='text-xl font-bold mb-4'>
                            Business Plan
                        </div>
                        <div className='flex justify-center items-end'>
                            <div className='text-2xl md:text-3xl font-bold'>
                                Rp 499.000
                            </div>
                            <div className='text-md font-bold pl-2'>
                                / Month
                            </div>
                        </div>
                        <div className='text-xs my-4'>
                            Subscribe and get following benefits:
                        </div>
                        <div className='text-md my-1 font-bold text-green-600'>
                            Record incoming items
                        </div>
                        <div className='text-md my-1 font-bold text-green-600'>
                            Record outgoing items
                        </div>
                        <div className='text-md my-1 font-bold text-green-600'>
                            Record profits
                        </div>
                        <div className='text-md my-1 font-bold text-green-600'>
                            Sales analysis by Chart
                        </div>
                        <div className='text-md my-1 font-bold text-green-600'>
                            24/7 Support
                        </div>
                        <div className='text-md my-1 font-bold text-gray-600'>
                            Export data to Excel
                        </div>
                        <div className='text-md my-1 font-bold text-gray-600'>
                            AI profit predictor
                        </div>
                        <div className='mt-8'>
                            <button onClick={() => {businessSubsribe()}} className='text-xl font-bold hover:text-gray-100 text-gray-800 hover:bg-[#01B7FE] bg-[#5ED1EA] duration-500 py-2 px-6 rounded-full'>
                                Subscribe Now
                            </button>
                        </div>
                    </div>
                    <div className='shadow-xl hover:shadow-2xl border-2 border-[#01B7FE] px-4 py-8 text-center rounded-3xl'>
                        <div className='flex justify-center items-center mb-4'>
                            <img
                                src={Enterprise}
                                className='w-[250px] h-[150px]'
                            />
                        </div>
                        <div className='text-xl font-bold mb-4'>
                            Enterprise Plan
                        </div>
                        <div className='flex justify-center items-end'>
                            <div className='text-2xl md:text-3xl font-bold'>
                                Rp 999.000
                            </div>
                            <div className='text-md font-bold pl-2'>
                                / Month
                            </div>
                        </div>
                        <div className='text-xs my-4'>
                            Subscribe and get following benefits:
                        </div>
                        <div className='text-md my-1 font-bold text-green-600'>
                            Record incoming items
                        </div>
                        <div className='text-md my-1 font-bold text-green-600'>
                            Record outgoing items
                        </div>
                        <div className='text-md my-1 font-bold text-green-600'>
                            Record profits
                        </div>
                        <div className='text-md my-1 font-bold text-green-600'>
                            Sales analysis by Chart
                        </div>
                        <div className='text-md my-1 font-bold text-green-600'>
                            24/7 Support
                        </div>
                        <div className='text-md my-1 font-bold text-green-600'>
                            Export data to Excel
                        </div>
                        <div className='text-md my-1 font-bold text-green-600'>
                            AI profit predictor
                        </div>
                        <div className='mt-8'>
                            <button onClick={() => {enterpriseSubsribe()}} id="contactus" className='text-xl font-bold hover:text-gray-100 text-gray-800 hover:bg-[#01B7FE] bg-[#5ED1EA] duration-500 py-2 px-6 rounded-full'>
                                Subscribe Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Pricing