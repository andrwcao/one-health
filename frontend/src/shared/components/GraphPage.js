import React from 'react';
import { Grid, Card, CardHeader } from '@mui/material';

import ControlPanel from './ControlPanel';

import './GraphPage.css';

const GraphPage = (props) => {
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
                    <ControlPanel />
                </Card>
            </Grid>
        </Grid>
    );
};

export default GraphPage;