"use client";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import React from "react";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

const data = [
    { name: "Super Hoodies", value: 14 },
    { name: "Basic Tees", value: 55 },
    { name: "Custom Short Pants", value: 31 },
];

const COLORS = ["#EE8484", "#98D89E", "#F6DC7D"];

const PieChartComponent = () => {
    return (
        <div className='p-4 basis-1/2 rounded-[20px] shadow-sm hover:shadow-lg'>
            <div className='flex items-center justify-between'>
                <h3 className='text-xl font-bold'>Top Products</h3>
                <div className='flex items-center'>
                    <p className='pr-3 text-slate-500/50'>May-Jun</p>
                    <ChevronDownIcon className='h-4 w-4 text-slate-500/50' />
                </div>
            </div>
            <div className='flex flex-col md:flex-row items-center justify-between rounded-[20px]'>
                <div>
                    <PieChart width={200} height={200}>
                        <Pie
                            dataKey='value'
                            isAnimationActive={true}
                            data={data}
                            cx={100}
                            cy={100}
                            outerRadius={80}
                            fill='#fff'
                        >
                            {data.map((entry, index) => (
                                <Cell
                                    fill={COLORS[index % COLORS.length]}
                                    className=' hover:skew-x-3'
                                />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </div>
                <div>
                    <div className='flex gap-2 items-center'>
                        <div className='h-2 w-2 rounded-full mb-5 bg-[#98D89E]'></div>
                        <div>
                            <h3 className='font-bold text-lg'>Basic Tees</h3>
                            <p className='text-sm text-slate-500/50'>55%</p>
                        </div>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <div className='h-2 w-2 rounded-full mb-5 bg-[#F6DC7D]'></div>
                        <div>
                            <h3 className='font-bold text-lg'>
                                Custom Short Pants
                            </h3>
                            <p className='text-sm text-slate-500/50'>31%</p>
                        </div>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <div className='h-2 w-2 rounded-full mb-5 bg-[#EE8484]'></div>
                        <div>
                            <h3 className='font-bold text-lg'>Super Hoodies</h3>
                            <p className='text-sm text-slate-500/50'>14%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PieChartComponent;
