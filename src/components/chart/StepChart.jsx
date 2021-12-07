import React, { Fragment, useEffect, useState } from 'react'
import Chart from 'react-apexcharts'
import { useSelector } from 'react-redux';
import ApexCharts from "apexcharts";
const chartOptions = {
    series: [{
        name: 'Online Customers',
        data: [1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0]
    }],
    options: {
        title: {
            text: "Gas Sensor Data Realtime Chart",
            align: 'center',
            style: {
                fontSize: '16px',
                fontWeight: "bold",
                // fontFamily: undefined,
                color: '#263238'
            }
        },
        color: ['#6ab04c', '#2980b9'],
        chart: {
            background: 'transparent',
            type: 'line',
            offsetY: 40,
            offsetX: 0,
            width: 1,
            zoom: {
                enabled: false
            },
            animations: {
                enabled: true,
                easing: 'linear',
                dynamicAnimation: {
                    speed: 1000
                }
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            // curve: 'smooth'
            curve: 'stepline',
        },
        xaxis: {
            // type: "datetime",
            range: 5,
            // 500ms mỗi step là 1000ms
            // categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            // range:5000,
            // labels: {
            //     formatter: function (value) {
            //         return value
            //     }
            // }
        },
        yaxis: {
            min: 0,
            max: 1,
            tickAmount: 2,
            labels: {
                formatter: function (value) {
                    if (value === 0) {
                        return "Not detected";
                    } else if (value === 1) {
                        return "Detected";
                    } return ""
                },
                minWidth: 75
            },
        },
        legend: {
            position: 'top'
        },
        grid: {
            show: false
        }
    }
}

let value = [1, 0, 1, 0, 0, 1, 0]
export default function StepChart() {
    // const [data, setData] = useState([]);
    const { data } = useSelector((state) => state.DataChartReducer)
    console.log(data)
    return (
        <Chart
            options={{
                ...chartOptions.options,
                theme: { mode: 'light' }
            }}
            series={[{
                name: "Sensor Realtime",
                data: [...data]
            }]}
            type='line'
            height='240px'
        />

    )
}