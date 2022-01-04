import React from 'react';
import { Grid } from '@mui/material';
import DatePicker from './DatePicker';

import './ControlPanel.css'
const ControlPanel = () => {
    
    return (
        <div className='control-panel'>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <DatePicker title='From'/>
                </Grid>
                <Grid item xs={6}>
                    <DatePicker title='To'/>
                </Grid>
            </Grid>
        </div>
    );
};

export default ControlPanel;