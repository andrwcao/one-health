import { React, useEffect, useState } from 'react';
import { Grid, Card, CardHeader } from '@mui/material';

import Chart from '../components/Chart';
import ControlPanel from './ControlPanel';

import './GraphPage.css';
import { areDayPropsEqual } from '@mui/lab/PickersDay/PickersDay';

const GraphPage = (props) => {
    const [fromDate, setFromDate] = useState(new Date(new Date().setFullYear(new Date().getFullYear() - 1)));
    const [toDate, setToDate] = useState(Date.now());
    const [datePrecision, setDatePrecision] = useState('Daily');
    const [xAxis, setXAxis] = useState(props.xData);

    useEffect(() => {
        setXAxis(props.xData.filter((date) => {
            return (new Date(date) >= fromDate) && (new Date(date) <= toDate);
        }));
    },[fromDate, toDate]);

    return (
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <Card 
                variant='outlined'
                className='card-graph'
                sx={
                    {borderRadius: 2}
                }>
                    {props.children}
                    <Chart
                    xAxis={xAxis}
                    colour={props.colour}
                    />
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card 
                variant='outlined'
                className='card-control'
                sx={
                    {borderRadius: 2}
                }>
                    <CardHeader
                    title="Controls"
                    subheader=""
                    />
                    <ControlPanel 
                    fromDate={fromDate}
                    setFromDate={setFromDate} 
                    toDate={toDate}
                    setToDate={setToDate} 
                    datePrecision={datePrecision}
                    setDatePrecision={setDatePrecision}
                    />
                </Card>
            </Grid>
        </Grid>
    );
};

export default GraphPage;