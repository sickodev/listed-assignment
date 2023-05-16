"use client";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import InfoCard from "./components/InfoCard";
import {
    ArrowLeftIcon,
    ArrowRightIcon,
    BanknotesIcon,
    HandThumbUpIcon,
    TagIcon,
    UsersIcon,
} from "@heroicons/react/24/outline";
import ActivityGraph from "./components/ActivityGraph";
import PieChartComponent from "./components/PieChartComponent";
import Tasks from "./components/Tasks";
import { Carousel, IconButton } from "@material-tailwind/react";
import SidebarM from "./components/SidebarM";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/signIn");
        }
    }, [session]);
    return (
        <main className='my-4 mx-8 max-w-full'>
            <div className='flex gap-x-6 flex-col sm:flex-row'>
                <div>
                    <Sidebar />
                </div>
                <SidebarM />
                <div className='flex flex-col basis-1 md:basis-5/6'>
                    <Navbar />
                    {/* Big Screens */}
                    <div className='hidden md:flex items-center my-1 justify-between'>
                        <InfoCard
                            title='Total Revenue'
                            number={"$2,129,456"}
                            Icon={<BanknotesIcon className='h-10 w-10' />}
                            classname='bg-[#c7edcd] hover:scale-105 transition-all duration-200 ease-out cursor-pointer active:scale-90'
                        />
                        <InfoCard
                            title='Total Transactions'
                            number={"1,520"}
                            Icon={<TagIcon className='h-10 w-10' />}
                            classname='bg-[#f4ecdd] hover:scale-105 transition-all duration-200 ease-out cursor-pointer active:scale-90'
                        />
                        <InfoCard
                            title='Total Likes'
                            number={"9,721"}
                            Icon={<HandThumbUpIcon className='h-10 w-10' />}
                            classname='bg-[#efdada] hover:scale-105 transition-all duration-200 ease-out cursor-pointer active:scale-90'
                        />
                        <InfoCard
                            title='Total Users'
                            number={"824"}
                            Icon={<UsersIcon className='h-10 w-10' />}
                            classname='bg-[#dee0ef] hover:scale-105 transition-all duration-200 ease-out cursor-pointer active:scale-90'
                        />
                    </div>

                    {/* Small Screens */}
                    <div className='py-6 my-2'>
                        <Carousel
                            className='md:hidden my-4'
                            transition={{ ease: "easeOut", duration: 0.5 }}
                            prevArrow={({ handlePrev }) => (
                                <IconButton
                                    variant='text'
                                    color='white'
                                    size='lg'
                                    onClick={handlePrev}
                                    className='!absolute top-2/4 -translate-y-2/4 left-4'
                                >
                                    <ArrowLeftIcon
                                        strokeWidth={2}
                                        className='w-6 h-6 text-black opacity-50'
                                    />
                                </IconButton>
                            )}
                            nextArrow={({ handleNext }) => (
                                <IconButton
                                    variant='text'
                                    color='white'
                                    size='lg'
                                    onClick={handleNext}
                                    className='!absolute top-2/4 -translate-y-2/4 !right-4'
                                >
                                    <ArrowRightIcon
                                        strokeWidth={2}
                                        className='w-6 h-6 text-black opacity-50 '
                                    />
                                </IconButton>
                            )}
                        >
                            <div className='w-full mx-2 rounded-[20px]'>
                                <InfoCard
                                    title='Total Revenue'
                                    number={"$2,129,456"}
                                    Icon={
                                        <BanknotesIcon className='h-10 w-10' />
                                    }
                                    classname='bg-[#c7edcd] transition-all duration-200 ease-out mx-4 my-2 px-2 active:scale-90'
                                />
                            </div>
                            <div className='w-full mx-2  rounded-[20px]'>
                                <InfoCard
                                    title='Total Transactions'
                                    number={"1,520"}
                                    Icon={<TagIcon className='h-10 w-10' />}
                                    classname='bg-[#f4ecdd]  transition-all duration-200 ease-out mx-4 my-2 px-2 active:scale-90'
                                />
                            </div>
                            <div className='w-full mx-2  rounded-[20px]'>
                                <InfoCard
                                    title='Total Likes'
                                    number={"9,721"}
                                    Icon={
                                        <HandThumbUpIcon className='h-10 w-10' />
                                    }
                                    classname='bg-[#efdada]  transition-all duration-200 ease-out mx-4 my-2 px-2 active:scale-90'
                                />
                            </div>
                            <div className='w-full mx-2  rounded-[20px]'>
                                <InfoCard
                                    title='Total Users'
                                    number={"824"}
                                    Icon={<UsersIcon className='h-10 w-10' />}
                                    classname='bg-[#dee0ef]  transition-all duration-200 ease-out mx-4 my-2 px-2 active:scale-90'
                                />
                            </div>
                        </Carousel>
                    </div>

                    <div className='my-2 w-full'>
                        <ActivityGraph />
                    </div>
                    <div className='md:flex hidden items-center justify-between my-3 gap-x-4'>
                        <PieChartComponent />
                        <Tasks />
                    </div>
                    <div className='px-4'>
                        <Carousel
                            className='md:hidden rounded-[20px] py-6'
                            prevArrow={({ handlePrev }) => (
                                <IconButton
                                    variant='text'
                                    color='white'
                                    size='lg'
                                    onClick={handlePrev}
                                    className='!absolute top-2/4 -translate-y-2/4 left-4'
                                >
                                    <ArrowLeftIcon
                                        strokeWidth={2}
                                        className='w-6 h-6 text-black opacity-50'
                                    />
                                </IconButton>
                            )}
                            nextArrow={({ handleNext }) => (
                                <IconButton
                                    variant='text'
                                    color='white'
                                    size='lg'
                                    onClick={handleNext}
                                    className='!absolute top-2/4 -translate-y-2/4 !right-4'
                                >
                                    <ArrowRightIcon
                                        strokeWidth={2}
                                        className='w-6 h-6 text-black opacity-50 '
                                    />
                                </IconButton>
                            )}
                        >
                            <PieChartComponent />
                            <Tasks />
                        </Carousel>
                    </div>
                </div>
            </div>
        </main>
    );
}
