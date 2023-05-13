import Image from "next/image";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import InfoCard from "./components/InfoCard";
import {
    BanknotesIcon,
    HandThumbUpIcon,
    TagIcon,
    UsersIcon,
} from "@heroicons/react/24/outline";
import ActivityGraph from "./components/ActivityGraph";
import PieChartComponent from "./components/PieChartComponent";
import Tasks from "./components/Tasks";

export default function Home() {
    return (
        <main className='my-4 mx-8'>
            <div className='flex gap-x-6'>
                <div className='sticky'>
                    <Sidebar />
                </div>
                <div className='flex flex-col basis-2/3 md:basis-5/6'>
                    <Navbar />
                    <div className='flex items-center my-1 justify-between'>
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
                    <div className='my-2 max-w-full'>
                        <ActivityGraph />
                    </div>
                    <div className='flex items-center justify-between my-3 gap-x-4'>
                        <PieChartComponent />
                        <Tasks />
                    </div>
                </div>
            </div>
        </main>
    );
}
