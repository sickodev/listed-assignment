"use client";
import {
    Bars4Icon,
    CalendarIcon,
    ChartPieIcon,
    Cog6ToothIcon,
    TagIcon,
    UserCircleIcon,
    UserIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { useState } from "react";

const SidebarM = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    return (
        <div
            className='md:hidden py-1 mx-4 px-2 bg-[#050505] text-white 
         rounded-[20px]'
        >
            <div className='flex items-center justify-between'>
                <div className='w-full'>
                    <h2 className='font-bold mx-2 text-3xl'>Board.</h2>
                </div>
                <button
                    type='button'
                    onClick={() => {
                        setShowMenu(!showMenu);
                    }}
                    className='mx-2 hover:shadow-md shadow-white'
                >
                    {!showMenu ? (
                        <Bars4Icon className='h-7 w-7' />
                    ) : (
                        <XMarkIcon className='h-7 w-7' />
                    )}
                </button>
            </div>
            {showMenu && (
                <div
                    className={`transition-all ease-out duration-500 ${
                        showMenu ? "h-auto opacity-100" : "h-0 opacity-0"
                    } flex-col flex justify-center gap-x-2 mx-auto my-2 p-4 text-md`}
                >
                    <div className='px-4 text-lg'>
                        <Link
                            href={"/"}
                            className='flex w-full items-center text-center gap-4 mb-4  active:font-bold'
                        >
                            <ChartPieIcon className='h-4 w-4' />
                            <h3 className='font-[700]'>Dashboard</h3>
                        </Link>
                        <Link
                            href={"/"}
                            className='flex w-full items-center text-center gap-4 mb-4  active:font-bold'
                        >
                            <TagIcon className='h-4 w-4' />
                            <h3 className=''>Transactions</h3>
                        </Link>
                    </div>
                    <div className='px-4 text-lg'>
                        <Link
                            href={"/"}
                            className='flex items-center text-center gap-4 mb-4  active:font-bold'
                        >
                            <CalendarIcon className='h-4 w-4 align-bottom' />
                            <h3 className=''>Schedule</h3>
                        </Link>
                        <Link
                            href={"/"}
                            className='flex items-center text-center gap-4 mb-4  active:font-bold '
                        >
                            <UserCircleIcon className='h-4 w-4 align-bottom' />
                            <h3 className=''>Users</h3>
                        </Link>
                    </div>
                    <div className='px-4 text-lg'>
                        <Link
                            href={"/"}
                            className='flex items-center text-center gap-4 mb-4  active:font-bold '
                        >
                            <Cog6ToothIcon className='h-4 w-4 align-bottom' />
                            <h3 className=''>Settings</h3>
                        </Link>
                    </div>

                    <div className=''>
                        <div className='mx-4 text-left my-1 text-gray-500/50'>
                            <Link href={"/"} className='hover:font-semibold'>
                                <h3>Help</h3>
                            </Link>
                            <Link href={"/"} className='hover:font-semibold'>
                                <h3>Contact Us</h3>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SidebarM;
