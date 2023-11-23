import React, { useState, useEffect }  from 'react'
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { PiGlobeHemisphereEastLight } from "react-icons/pi";
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

const Navbar = () => {

  const navigate = useNavigate()
  const [navSize, setnavSize] = useState("auto");
  const [navColor, setnavColor] = useState("transparent");
  const [username, setUsername] = useState(localStorage.getItem('username'));
  const [password, setPassword] = useState(localStorage.getItem('password'));
  
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("white") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("auto") : setnavSize("auto");
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  
  let [open, setOpen] = useState(false);
  
  const openNavbar = () => {
    if (open == false){
      setOpen(true)
    } else {
      setOpen(false)
    }
    
    if (navColor == "transparent"){
      setnavColor("white")
    }
  }

  const handleSubmit = () => {
    localStorage.clear()
            
    toast.success('Logout successful!', {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    
    setTimeout(() => { 
        navigate('/login')
    }, 2000)
  }
  
  return (
    <div
      className='w-full fixed flex items-center justify-center z-50'
      style={{
        backgroundColor: navColor,
        height: navSize,
        transition: '0s ease-in'
      }}
    >
      <div className='w-full xl:w-[1280px]'>
        <div className='w-full md:flex items-center justify-between py-4 md:px-10 px-4'>

          <div onClick={()=>openNavbar()} className='font-bold text-3xl cursor-pointer flex items-center gap-2 z-50'>
            <Link to="/" className={`flex justify-center items-center`}>
                <div className='px-0'>
                    <PiGlobeHemisphereEastLight 
                      className='h-[60px] w-[60px] text-gray-800'
                    />
                </div>
                <div className='pl-4 font-black hover:bg-gray-200 md:hover:bg-gray-100 rounded-full py-2 px-4 md:px-4 mb-0 text-gray-800 hover:text-[#5ED1EA] duration-500'>
                    HOME
                </div>
            </Link>
          </div>

          <div onClick={()=>openNavbar()} className='absolute right-6 top-8 cursor-pointer xl:hidden w-7 h-7'>
            {
              open ? <XMarkIcon/> : <Bars3BottomRightIcon />
            }
          </div>

          <div 
            className={`
              xl:flex xl:items-center xl:pb-0 pb-4 absolute xl:static 
              left-0 w-full z-0
              xl:w-auto xl:pl-0 px-8
              ${open ? 'top-20' : 'top-[-490px]'}
            `}
            style={{
              backgroundColor: navColor,
              transition: '0s ease-in'
            }}
          >
            <div className='mt-6 mb-6 xl:items-center xl:text-center xl:gap-4 flex flex-col xl:flex-row xl:ml-8 xl:my-0 font-semibold'>
                <a href="#aboutus" className='text-2xl lg:text-3xl hover:bg-gray-200 md:hover:bg-gray-100 rounded-full py-2 px-4 md:px-4 mb-2 md:mb-0 text-gray-800 hover:text-[#5ED1EA] duration-500 font-black'>
                  ABOUT
                </a>
                <a href="#pricing" className='text-2xl lg:text-3xl hover:bg-gray-200 md:hover:bg-gray-100 rounded-full py-2 px-4 md:px-4 mb-2 md:mb-0 text-gray-800 hover:text-[#5ED1EA] duration-500 font-black'>
                  PRICING
                </a>
                <a href="#contactus" className='text-2xl lg:text-3xl hover:bg-gray-200 md:hover:bg-gray-100 rounded-full py-2 px-4 md:px-4 mb-2 md:mb-0 text-gray-800 hover:text-[#5ED1EA] duration-500 font-black'>
                  CONTACT
                </a>
                {
                    username != null ?
                      <div onClick={() => handleSubmit()} className='mt-4 xl:mt-0 hover:bg-[#5ED1EA] md:hover:bg-[#5ED1EA] bg-[#5ED1EA] lg:bg-white rounded-xl border-4 border-[#5ED1EA] px-4 py-2 md:px-12 mb-4 md:mb-0 text-white lg:text-[#5ED1EA] hover:text-white font-bold duration-500'>
                          LOGOUT
                      </div>
                    :
                      <Link to='/login' className='mt-4 xl:mt-0 hover:bg-[#5ED1EA] md:hover:bg-[#5ED1EA] bg-[#5ED1EA] lg:bg-white rounded-xl border-4 border-[#5ED1EA] px-4 py-2 md:px-12 mb-4 md:mb-0 text-white lg:text-[#5ED1EA] hover:text-white font-bold duration-500'>
                          LOGIN
                      </Link>
                }
            </div>
            <hr className='mb-2'/>
          </div>
          
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Navbar