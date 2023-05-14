import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React from "react";
import Image from "next/image";
import LoginButton from "./LoginButton";

const Navbar = () => {
    return (
        <div className='py-4 flex items-center justify-between sticky'>
            <h2 className='font-bold text-[24px]'>Dashboard</h2>
            <div className='flex items-center justify-between gap-4'>
                <div className='flex bg-white items-center flex-col sm:flex-row md:justify-between px-3 py-2 rounded-full hover:shadow-lg duration-100 ease-out transition-all'>
                    <input
                        type='text'
                        placeholder='Search...'
                        className='outline-none ring-0 placeholder:text-[#d0d0d0] bg-transparent mx-1 line-clamp-1 w-16 md:w-48'
                    />
                    <button type='button'>
                        <MagnifyingGlassIcon className='h-5 w-5 text-[#858585]' />
                    </button>
                </div>
                <div className='flex items-center justify-between gap-6 h-full'>
                    <BellIcon className='h-5 w-5 cursor-pointer' />
                    <LoginButton />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
