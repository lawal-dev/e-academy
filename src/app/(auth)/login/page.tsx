'use client'
import Image from 'next/image';
import { useState } from 'react';
import { FaEye, FaEyeSlash, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';
import { Button } from '../../../../components/Button';

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const togglePassword = () => setShowPassword(!showPassword);


    return (
        <div className='m-auto w-full sm:w-[50%] md:w-[35%] mt-10 mb-10'>
            <div className='mb-5'>
                <h2 className='text-[24px] text-red-800 text-center'>
                    E-Academy
                </h2>
            </div>

            <div className='bg-white text-black p-[32px] sm:p-[56px] rounded-xl'>
                <div className='text-center'>
                    <h3 className='text-[#101928] text-[28px]'> Log In </h3>
                    <p className='text-[16px] text-primary2'> Enter your credentials to access your account</p>
                </div>
                <form className='flex flex-col gap-4 my-10'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="email" className='text-xs text-[#101928]'>Email Address</label>
                        <div className='relative'>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter Email"
                                className='py-3 px-2 border-2 border-[#98A2B3] placeholder:text-xs text-sm text-[#98A2B3] rounded-md focus:outline-none w-full'
                                required
                            />
                            <FaEnvelope className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#98A2B3]" />
                        </div>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label htmlFor="password" className='text-xs text-[#101928]'>Password</label>
                        <div className='relative'>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter Password"
                                className='py-3 px-2 border-2 border-[#98A2B3] placeholder:text-xs text-sm text-[#98A2B3] rounded-md focus:outline-none w-full'
                                required
                            />
                            <button
                                type="button"
                                onClick={togglePassword}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#98A2B3]"
                                aria-label={showPassword ? "Hide password" : "Show password"}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                    </div>

                    <div className='flex justify-between items-center mt-2'>
                        <div className='flex items-center'>
                            <input type="checkbox" id="remember" name="remember" className="mr-2" />
                            <label htmlFor="remember" className="text-sm text-[#101928]">Remember Me</label>
                        </div>
                        <Link href="/forgot-password" className="text-sm text-[#CC400C]">Forgot Password?</Link>
                    </div>
                    <div className="bg-[#0D5EBA] text-white w-full rounded-md py-2 mt-3">

                    <Button >Login</Button>
                    </div>

                    <button className="w-full flex justify-center items-center gap-3 border-2 rounded-md py-4 mt-3">
                        <Image src='/images/gogle.png' alt="Sign in with Google" width={20} height={20} />
                        <p>Continue with Google</p>
                    </button>

                    <button className="w-full flex justify-center items-center gap-3 border-2 rounded-md py-4 mt-3">
                        <Image src='/images/twitter.png' alt="Sign in with Twitter" width={20} height={20} />
                        <p>Continue with Twitter</p>
                    </button>
                </form>

                <div className='flex justify-center items-center'>
                    <div className='border-top-2 w-full h-[2px] bg-gray-300'></div>
                    <div className='mx-3 text-primary2'>Or</div>
                    <div className='border-top-2 w-full h-[2px] bg-gray-300'></div>
                </div>

                <div className='text-center mt-6'>
                    <p className='text-primary2'>
                        Are you new here?
                        <Link href='/register' className='text-[#0D5EBA]'> Create Account </Link> 
                    </p>
                </div>
            </div>
        </div>
    );
}



