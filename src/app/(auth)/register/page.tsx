'use client'
import Image from 'next/image';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 
import { Button } from '../../../../components/Button'; 
import Link from 'next/link';

export default function Register() {
    const [showPassword, setShowPassword] = useState(false); 
    const [showConfirmPassword, setShowConfirmPassword] = useState(false); 
    const togglePassword = () => setShowPassword(!showPassword);
    const toggleConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

    return (
        <div className='m-auto w-full sm:w-[50%] md:w-[35%] mt-10 mb-10'>
            <div className='mb-5'>
                <h2 className='text-[24px] text-primary1 text-center'>
                    E-Academy
                </h2>
            </div>

            <div className='bg-white text-black p-[32px] sm:p-[56px] rounded-xl'>
                <div className='text-center'>
                    <h3 className='text-[#101928] text-[28px]'> Create an account </h3>
                    <p className='text-[16px] text-primary2'> Enter your credentials to create your account</p>
                </div>
                <form action="" method="post" className='flex flex-col gap-4 my-10'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="Email" className='text-xs text-[#101928]'>Email Address</label>
                        <input type="email" name="email" placeholder="Enter Email" className='py-3 px-2 border-2 border-[#98A2B3] placeholder:text-xs text-sm text-[#98A2B3] rounded-md focus:outline-none' />
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label htmlFor="password" className='text-xs text-[#101928]'>
                            Password
                        </label>
                        <div className='relative'>
                            <input 
                                type={showPassword ? 'text' : 'password'} 
                                name="password" 
                                placeholder="Enter Password" 
                                className='py-3 px-2 border-2 border-[#98A2B3] placeholder:text-xs text-sm text-[#98A2B3] rounded-md focus:outline-none w-full' 
                            />
                            <button 
                                type="button" 
                                onClick={togglePassword} 
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#98A2B3]"
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label htmlFor="confirmPassword" className='text-xs text-[#101928]'>
                            Confirm Password
                        </label>
                        <div className='relative'>
                            <input 
                                type={showConfirmPassword ? 'text' : 'password'} 
                                name="confirmPassword" 
                                placeholder="Enter Confirm Password" 
                                className='py-3 px-2 border-2 border-[#98A2B3] placeholder:text-xs text-sm text-[#98A2B3] rounded-md focus:outline-none w-full' 
                            />
                            <button 
                                type="button" 
                                onClick={toggleConfirmPassword} 
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#98A2B3]"
                            >
                                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                    </div>

                    <div className='bg-[#0D5EBA] text-white w-full rounded-md py-2 mt-3'>
                        <Button> Create an account </Button>
                    </div>

                    <div className='text-black w-full rounded-md py-4 mt-3 flex justify-center items-center gap-3 border-2'>
                        <Image src='/images/gogle.png' alt="Google logo" width={20} height={20} />
                        <p>Continue with Google</p>
                    </div>

                    <div className='text-black w-full rounded-md py-4 mt-3 flex justify-center items-center gap-3 border-2'>
                        <Image src='/images/twitter.png' alt="Twitter logo" width={20} height={20} />
                        <p>Continue with Twitter</p>
                    </div>

                </form>

                <div className='flex justify-center items-center'>
                    <div className='border-top-2 w-full h-[2px] bg-gray-300'></div>
                    <div className='mx-3 text-primary2'>Or</div>
                    <div className='border-top-2 w-full h-[2px] bg-gray-300'></div>
                </div>

                <div className='text-center mt-6'>
                    <p className='text-primary2'>
                        Already here?
                        <Link href='/login' className='text-[#0D5EBA]'> Login </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
