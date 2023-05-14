"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
    CalendarIcon,
    ChartPieIcon,
    Cog6ToothIcon,
    TagIcon,
    UserCircleIcon,
} from "@heroicons/react/24/outline";

const Sidebar = () => {
    return (
        <div
            className='z-30 my-auto top-0 hidden sticky shadow-md md:w-[250px] bg-black text-white
         md:flex items-center justify-center flex-col text-center rounded-[15px]'
        >
            <div className='py-2 mt-6 w-full'>
                <h2 className='text-3xl mx-10 font-bold text-left'>Board.</h2>
            </div>
            <div className='w-full flex flex-col justify-center gap-x-2 mx-auto my-8 px-10 text-md'>
                <Link
                    href={"/"}
                    className='flex items-center text-center gap-4 mb-4 hover:font-semibold active:font-bold'
                >
                    <ChartPieIcon className='h-4 w-4' />
                    <h3 className='font-[700]'>Dashboard</h3>
                </Link>
                <Link
                    href={"/"}
                    className='flex items-center text-center gap-4 mb-4 hover:font-semibold active:font-bold'
                >
                    <TagIcon className='h-4 w-4' />
                    <h3 className=''>Transactions</h3>
                </Link>
                <Link
                    href={"/"}
                    className='flex items-center text-center gap-4 mb-4 hover:font-semibold active:font-bold'
                >
                    <CalendarIcon className='h-4 w-4 align-bottom' />
                    <h3 className=''>Schedule</h3>
                </Link>
                <Link
                    href={"/"}
                    className='flex items-center text-center gap-4 mb-4 hover:font-semibold active:font-bold '
                >
                    <UserCircleIcon className='h-4 w-4 align-bottom' />
                    <h3 className=''>Users</h3>
                </Link>
                <Link
                    href={"/"}
                    className='flex items-center text-center gap-4 mb-4 hover:font-semibold active:font-bold '
                >
                    <Cog6ToothIcon className='h-4 w-4 align-bottom' />
                    <h3 className=''>Settings</h3>
                </Link>
            </div>

            {/* Other Options */}
            <div className='flex w-full flex-col items-start text-white/80 mt-[14rem] mb-[4rem] font-[300]'>
                <div className=' mx-12 text-left my-1'>
                    <Link href={"/"} className='hover:font-semibold'>
                        <h3>Help</h3>
                    </Link>
                    <Link href={"/"} className='hover:font-semibold'>
                        <h3>Contact Us</h3>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
