import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { Grid } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';

const data = [
    { label: 'Group A', value: 400 },
    { label: 'Group B', value: 300 },
    { label: 'Group C', value: 300 },
    { label: 'Group D', value: 200 },
    { label: 'Group E', value: 278 },
    { label: 'Group F', value: 189 },
];

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
    'Page A',
    'Page B',
    'Page C',
    'Page D',
    'Page E',
    'Page F',
    'Page G',
];

const Marketchart = () => {
    return (
        <Grid container spacing={2} padding={2}>
            <Grid item sm={7} xs={12}>
                <h3 style={{ position: "relative", top: "40px", left: "30px", zIndex: "1", }}>Market Overview</h3>
                <LineChart
                    sx={{ color: "white", background: "#3B3363" }}
                    maxWidth={500}
                    height={350}
                    series={[
                        { data: pData, label: 'pv' },
                        { data: uData, label: 'uv' },
                    ]}
                    xAxis={[{ scaleType: 'point', data: xLabels }]}
                >

                </LineChart>
            </Grid>
            <Grid item sm={5} xs={12} sx={{m:"auto"}}>
                <PieChart sx={{color:"white"}}
                    series={[
                        {
                            startAngle: -90,
                            endAngle: 90,
                            data,
                        },
                    ]}
                    height={300}
                />
            </Grid>
        </Grid>
    );
}

export default Marketchart;