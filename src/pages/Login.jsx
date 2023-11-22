import React from 'react'
import { useState } from 'react'
import { FaEye, FaEyeSlash  } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import LoginImage from './../assets/login.svg'
import KedaLogo from './../assets/keda.svg'

const Login = () => {

    const navigate = useNavigate()
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [visible, setVisible] = useState()
    
    const handleSubmit = () => {
        if (((username == null) || (username == "")) || ((password == null) || (password == ""))){
            toast.error('Please fill the username or password!', {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else {
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
            
            toast.success('Login successful!', {
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
                navigate('/')
            }, 2000)
        }
    }

    return (
        <>
            <div className='flex w-full flex-col justify-center z-0'>
                <div className='bg-bubble bg-no-repeat bg-cover w-full flex flex-col items-center justify-center h-screen'>
                    <div className='flex flex-col shadow-2xl bg-white my-4 py-8 text-gray-800 mx-4 p-4 rounded-lg md:w-[600px] lg:w-[850px]'>
                        <div className='flex justify-center items-center text-center text-5xl lg:text-6xl lg:mb-8 mt-4 sm:mt-0 mb-8 font-bold text-gray-800'>
                            <img
                                src={KedaLogo}
                                className='w-[100px] hidden lg:flex mr-8'
                            />
                            <div>
                                Keda Enterprise
                            </div>
                        </div>
                        <hr className=''/>
                        <div className='flex lg:mt-8'>
                            <img
                                src={LoginImage}
                                className='w-[300px] mr-8 hidden lg:flex'
                            />
                            <div className='w-full'>
                                <div className='text-center lg:text-start text-4xl mt-4 mb-8 font-bold text-gray-800'>
                                    Sign In
                                </div>
                                <div className='mb-4'>
                                    <div className='mb-2 font-bold'>
                                    Email or Phone Number
                                    </div>
                                    <div>
                                    <input
                                        value={username}
                                        className='border border-gray-300 w-full py-2 pl-4 rounded-lg' 
                                        type="text"
                                        placeholder='Enter ANY email address or phone number'
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                    </div>
                                </div>
                                <div className='mb-4'>
                                    <div className='mb-2 font-bold'>
                                    Password
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <input
                                            value={password}
                                            type={visible ? "text" : "password"}
                                            className="border border-gray-300 w-full py-2 pl-4 rounded-lg"
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder='Enter ANY password'
                                        />
                                        <button
                                            className='h-[25px] text-center hover:h-[30px] duration-300'
                                            onClick={() => setVisible(!visible)}
                                        >
                                            {
                                                visible ?  <FaEyeSlash className='w-full h-full'/> : <FaEye className='w-full h-full'/>
                                            }
                                        </button>
                                    </div>
                                </div>
                                <button className='w-full bg-[#01B7FE] hover:bg-[#5ED1EA] duration-300 rounded-3xl py-2 my-2 text-white font-bold' onClick={handleSubmit}>Sign In</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default Login