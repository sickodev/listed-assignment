"use client";
import { Lato } from "next/font/google";
import { useSession, signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";

type Props = {};

const lato = Lato({ subsets: ["latin"], weight: ["400"] });
const NEXTAUTH_URL = process.env.NEXTAUTH_URL as string;

const Page = (props: Props) => {
    const notReady = () => {
        alert("Function not ready...");
        alert("Use Login with Google.");
    };
    return (
        <div className='flex items-center gap-4'>
            <div className='flex items-center justify-evenly bg-black w-[300px] md:w-[500px] h-screen'>
                <h1 className='text-white text-center text-7xl font-bold'>
                    Board.
                </h1>
            </div>
            <div className=' mx-auto my-4 p-6 rounded-2xl'>
                <div>
                    <h2 className='text-[36px] font-bold'>Sign In</h2>
                    <h4 className={`${lato.className} text-[16px]`}>
                        Sign in to your account
                    </h4>
                </div>
                <div className='flex items-center justify-between my-2 py-4 gap-2'>
                    <button
                        onClick={() => signIn("google", {})}
                        className='rounded-md bg-white p-2 flex items-center gap-2 transition-all duration-200 ease-out active:scale-95'
                    >
                        <img
                            src='https://cdn-icons-png.flaticon.com/512/300/300221.png?w=740&t=st=1684006589~exp=1684007189~hmac=8e2a2d9c29856333db5f2c8571610d2f26a0182949363f405926955d2217bbed'
                            alt=''
                            className='h-4 w-4 '
                        />
                        <p className='text-slate-500/50'>Sign in with Google</p>
                    </button>
                    <button
                        type='button'
                        onClick={notReady}
                        className='rounded-md bg-white p-2 flex items-center gap-2 transition-all duration-200 ease-out active:scale-95'
                    >
                        <img
                            src='https://cdn-icons-png.flaticon.com/512/145/145802.png?w=740&t=st=1684006837~exp=1684007437~hmac=cf555cf26dfe1c3daf15017c2b7ea2cb402154988937d6b7bff7e022791502d7'
                            alt=''
                            className='h-4 w-4'
                        />
                        <p className='text-slate-500/50'>
                            Sign in with Facebook
                        </p>
                    </button>
                </div>
                <div className='flex flex-col w-[430px] bg-white px-8 py-4 rounded-[20px]'>
                    <div className='m-2'>
                        <h4 className={`${lato.className} mx-2`}>
                            Email address
                        </h4>
                        <div className='bg-[#eaeaea] w-full my-2 h-8  rounded-[5px]'>
                            <input
                                type='email'
                                placeholder='johndoe@gmail.com'
                                className='my-1 mx-1 w-[340px] rounded-[5px] bg-transparent text-[16px] placeholder:text-[16px] placeholder:text-slate-700/50 outline-none ring-0'
                            />
                        </div>
                    </div>
                    <div className='m-2'>
                        <h4 className={`${lato.className} mx-2`}>Password</h4>
                        <div className='bg-[#eaeaea] w-full my-2 h-8  rounded-[5px]'>
                            <input
                                type='password'
                                placeholder='******'
                                className='my-1 mx-1 w-[340px] rounded-[5px] bg-transparent text-[16px] placeholder:text-[16px] placeholder:text-slate-700/50 outline-none ring-0'
                            />
                        </div>
                    </div>
                    <button
                        type='button'
                        onClick={notReady}
                        className={`${lato.className} text-left w-32 mx-2 text-[#346BD4]`}
                    >
                        Forgot password?
                    </button>
                    <button
                        type='button'
                        onClick={notReady}
                        className='font-bold text-xl m-2 bg-black text-white rounded-[10px] py-1 transition-all duration-200 ease-out active:scale-95'
                    >
                        Sign In
                    </button>
                </div>
                <div
                    className={`flex items-center mx-16 my-2 ${lato.className}`}
                >
                    <h4 className='mx-1'>Don't have an Account?</h4>
                    <button
                        type='button'
                        onClick={notReady}
                        className='text-left text-[#346BD4]'
                    >
                        Register Here.
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Page;
