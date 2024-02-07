import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend
} from 'recharts';
import './Statistics.css'



const Statistics = () => {
    const topicDetails = useLoaderData()
    const topics = topicDetails.data;
    console.log(topics)
    return (
        <div className='rechart-container'>
            <ResponsiveContainer>
                <BarChart
                    data={topics}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="total" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="name" fill="#8884d8" />
                    <Bar dataKey="total" fill="#FA8072" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;