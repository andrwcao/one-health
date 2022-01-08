import { React, useEffect, useState } from 'react';
import { Grid, Card, CardHeader } from '@mui/material';

import Chart from '../components/Chart';
import ControlPanel from './ControlPanel';

import './GraphPage.css';

const GraphPage = (props) => {
    const [fromDate, setFromDate] = useState(new Date(new Date().setFullYear(new Date().getFullYear() - 1)));
    const [toDate, setToDate] = useState(Date.now());
    const [datePrecision, setDatePrecision] = useState('Daily');
    const [xAxis, setXAxis] = useState(props.xData);
    const dog = (date) => {
        return (new Date(date)) >= (fromDate);
    };

    useEffect(() => {
        setXAxis(props.xData.filter(dog));
    },[fromDate]);

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