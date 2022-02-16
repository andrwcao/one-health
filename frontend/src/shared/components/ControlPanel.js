import React from 'react';
import { Grid, ToggleButton, ToggleButtonGroup } from '@mui/material';
import DatePicker from './DatePicker';

import './ControlPanel.css'
const ControlPanel = (props) => {

    const handleDatePrecision = (event, newDatePrecision) => {
        props.setDatePrecision(newDatePrecision);
    };

    return (
        <div className='control-panel'>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <DatePicker
                    id='fromDate'
                    title='From'
                    date={props.fromDate}
                    setDate={props.setFromDate} 
                    />
                </Grid>
                <Grid item xs={6}>
                    <DatePicker 
                    id='toDate'
                    title='To'
                    date={props.toDate}
                    setDate={props.setToDate} 
                    />
                </Grid>
                <Grid item xs={12}>
                    <ToggleButtonGroup
                    exclusive
                    id="datePrecision"
                    name="datePrecision"
                    className='date-precision'
                    type="text"
                    fullWidth
                    onChange={handleDatePrecision}
                    value={props.datePrecision}
                    >
                        <ToggleButton value="Daily" aria-label="left aligned">
                            Daily
                        </ToggleButton>
                        <ToggleButton value="Weekly" aria-label="centered">
                            Weekly
                        </ToggleButton>
                        <ToggleButton value="Monthly" aria-label="right aligned">
                            Monthly
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Grid>
            </Grid>
        </div>
    );
};

export default ControlPanel;