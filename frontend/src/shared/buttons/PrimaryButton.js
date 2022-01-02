import React from 'react';
import Button from '@mui/material/Button';

const PrimaryButton = (props) => {
    return (
        <Button variant="contained">{props.children}</Button>
    );
}

export default PrimaryButton;