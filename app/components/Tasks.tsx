import { ChevronRightIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Lato } from "next/font/google";

const lato = Lato({ subsets: ["latin"], weight: ["700"] });

const Tasks = () => {
    return (
        <div className='p-4 basis-1/2 rounded-[20px] shadow-sm hover:shadow-lg'>
            <div className='flex items-center justify-between'>
                <h3 className='text-[18px] md:text-xl  font-bold'>
                    Today's Schedule
                </h3>
                <div className='flex items-center'>
                    <p className='pr-3 text-gray-500'>See All</p>
                    <ChevronRightIcon className='h-4 w-4 text-gray-500' />
                </div>
            </div>
            <div className='flex items-center flex-col my-2 mx-12'>
                <div className='py-3 cursor-pointer flex w-full gap-3 rounded-[20px] active:scale-95 transition-all duration-200 ease-out'>
                    <div className='w-1 rounded-l-md max-h-full bg-[#9BDD7C]'></div>
                    <div className={`${lato.className}`}>
                        <h3 className='text-md'>Meeting with suppliers</h3>
                        <p className='text-sm text-gray-500'>14:00 - 15:00</p>
                        <p className='text-sm text-gray-500'>
                            at Sunset Road, Kuta, Bali
                        </p>
                    </div>
                </div>
                <div className='py-3 cursor-pointer flex w-full gap-3 rounded-[20px] active:scale-95 transition-all duration-200 ease-out'>
                    <div className='w-1 rounded-l-md max-h-full bg-[#6972C3]'></div>
                    <div className={`${lato.className}`}>
                        <h3 className='text-md'>
                            Check operations at Giga Factory 1
                        </h3>
                        <p className='text-sm text-gray-500'>18:00 - 20:00</p>
                        <p className='text-sm text-gray-500'>at Jakarta</p>
                    </div>
                </div>
                <div className='py-3 cursor-pointer flex w-full gap-3 rounded-[20px] active:scale-95 transition-all duration-200 ease-out'>
                    <div className='w-1 rounded-l-md max-h-full bg-[#004fff]'></div>
                    <div className={`${lato.className}`}>
                        <h3 className='text-md'>Check delivery of goods</h3>
                        <p className='text-sm text-gray-500'>21:00 - 22:00</p>
                        <p className='text-sm text-gray-500'>at Jakarta</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tasks;
