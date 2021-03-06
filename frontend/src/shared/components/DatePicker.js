import React from 'react';
import { DesktopDatePicker, LocalizationProvider} from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { TextField } from '@mui/material';

const DatePicker = (props) => {
    const [value, setValue] = React.useState(new Date());

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
            label={props.title}
            value={props.date}
            minDate={new Date('2017-01-01')}
            onChange={(newDate) => {
                props.setDate(newDate);
            }}
            renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    );
}

export default DatePicker;