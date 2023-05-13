import React, { ReactElement } from "react";
import { Open_Sans, Lato } from "next/font/google";
import { BanknotesIcon } from "@heroicons/react/24/outline";

type Props = {
    title: string;
    number: string;
    Icon: ReactElement<any, any>;
    classname: string;
};

// Fonts
const open_sans = Open_Sans({ subsets: ["latin"], weight: ["700"] });
const lato = Lato({ subsets: ["latin"], weight: ["400", "300"] });
const InfoCard = ({ title, number, Icon, classname }: Props) => {
    return (
        <div
            className={`${classname} flex items-start justify-between px-8 py-2 md:w-[280px] rounded-[20px] h-[140px] shadow-md`}
        >
            <div className='flex my-auto mt-16 flex-col'>
                <h4 className={`text-sm font-semibold ${lato.className}`}>
                    {title}
                </h4>
                <h3
                    className={`text-2xl space-x-2 font-bold tracking-wider min-w-full ${open_sans.className}`}
                >
                    {number}
                </h3>
            </div>
            <div>{Icon}</div>
        </div>
    );
};

export default InfoCard;
