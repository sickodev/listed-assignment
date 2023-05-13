"use client";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import {
    LineChart,
    XAxis,
    Tooltip,
    Legend,
    Line,
    CartesianGrid,
    YAxis,
    ResponsiveContainer,
} from "recharts";

const ActivityGraph = () => {
    const data = [
        {
            name: "Week 1",
            Guest: 400,
            User: 200,
        },
        {
            name: "Week 2",
            Guest: 100,
            User: 400,
        },
        {
            name: "Week 3",
            Guest: 500,
            User: 300,
        },
        {
            name: "Week 4",
            Guest: 50,
            User: 100,
        },
    ];
    return (
        <div className='p-4 rounded-[20px] shadow-md hover:shadow-xl transition-all duration-100 ease-out'>
            <div>
                <h3 className='font-bold text-xl'>Activities</h3>
                <div className='flex items-center'>
                    <p className='pr-3 text-slate-500/50'>May-Jun</p>
                    <ChevronDownIcon className='h-4 w-4 text-slate-500/50' />
                </div>
                <div className='md:w-full my-3'>
                    <ResponsiveContainer
                        width={"100%"}
                        minWidth={200}
                        height={200}
                    >
                        <LineChart
                            className=''
                            width={1200}
                            height={200}
                            data={data}
                            margin={{
                                top: 5,
                                right: 5,
                                left: 5,
                                bottom: 5,
                            }}
                        >
                            <XAxis dataKey='name' />
                            <Legend
                                align='right'
                                verticalAlign='top'
                                iconType='circle'
                                iconSize={8}
                                wrapperStyle={{
                                    marginBottom: "10px",
                                    paddingBottom: "8px",
                                }}
                            />
                            <Tooltip />
                            <CartesianGrid vertical={false} stroke='#dfdada' />
                            <YAxis />
                            <Line
                                type='monotone'
                                dataKey='Guest'
                                stroke='#e9a0a0'
                            />
                            <Line
                                type='monotone'
                                dataKey='User'
                                stroke='#9bdd7c'
                                activeDot={{ r: 8 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default ActivityGraph;
