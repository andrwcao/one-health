import React from 'react';
import { Grid, ToggleButton, ToggleButtonGroup } from '@mui/material';
import DatePicker from './DatePicker';

import './ControlPanel.css'
const ControlPanel = () => {
    const [datePrecision, setDatePrecision] = React.useState('left');

    const handleDatePrecision = (event, newDatePrecision) => {
      setDatePrecision(newDatePrecision);
    };

    return (
        <div className='control-panel'>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <DatePicker title='From'/>
                </Grid>
                <Grid item xs={6}>
                    <DatePicker title='To'/>
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
                    value={datePrecision}
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