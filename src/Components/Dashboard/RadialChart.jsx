import { Box, Typography } from '@mui/material'
import ReactApexChart from 'react-apexcharts'
const state = {
    series: [65],
    options: {
        colors: ["#15B112"],
        stroke: {
            lineCap: "round",
        },
        labels: ['Total'],
        plotOptions: {
            radialBar: {
                startAngle: 0,
                endAngle: 360,
                hollow: {
                    size: "70%",
                },
                track: {
                    show: true,
                    startAngle: undefined,
                    endAngle: undefined,
                    background: "#D7D9DB",
                    strokeWidth: "70%",
                    opacity: 1,
                    margin: 5,
                },
                dataLabels: {
                    show: true,
                    name: {
                        show: true,
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "#637381",
                        offsetY: -10,
                    },
                    value: {
                        show: true,
                        fontSize: "32px",
                        fontWeight: 700,
                        offsetY: 16,
                        formatter: function (val) {
                            return val + "%";
                        },
                    },
                },
                responsive: [{
                    breakpoint: 1000,
                    options: {},
                }]
            },
        },
    },
};
export default function RadialChart() {
    return (
        <Box sx={{
            // boxShadow: "0px 12px 24px -4px rgba(145, 158, 171, 0.12), 0px 0px 2px 0px rgba(145, 158, 171, 0.20)",
            borderRadius: "6px", border: "1px solid black"
        }}>
            <Box sx={{ padding: "24px" }}>
                <Typography
                    variant='h3'
                    color="text.900"
                >
                    Best Selling Category
                </Typography>
            </Box>
            <Box sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                <ReactApexChart
                    options={state.options}
                    series={state.series}
                    type="radialBar"
                    width={360}
                />
            </Box>
        </Box>
    )
}
