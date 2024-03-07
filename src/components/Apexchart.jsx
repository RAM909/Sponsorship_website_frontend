import React, { useRef, useEffect } from 'react';
import ApexCharts from 'apexcharts';

const ApexChart = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        const options = {
            chart: {
                type: 'bar',
                height: 300, // Adjust height as needed
            },
            series: [
                {
                    name: 'Registered Users',
                    data: [18, 28, 47, 57, 77]
                },
                {
                    name: 'Registered Users with Sponsorship',
                    data: [10, 20, 35, 45, 60]
                },
                {
                    name: 'Sponsors',
                    data: [5, 10, 15, 20, 25]
                }
            ],
            yaxis: {
                opposite: true,
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May']
            }
        };

        const myChart = new ApexCharts(chartRef.current, options);
        myChart.render();

        // Clean up function
        return () => {
            myChart.destroy();
        };
    }, []);

    return (
        
        <div ref={chartRef} style={{ width: '700px', height: '1900px ' }} /> // Adjust height as needed
    );
};

export default ApexChart;
