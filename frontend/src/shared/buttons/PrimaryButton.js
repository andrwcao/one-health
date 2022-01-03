import React from 'react';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';

const PrimaryButton = (props) => {
    return (
        <Button
            variant="contained"
            size="large"
            color="secondary"
            onClick={props.onClick} 
            className={props.className}
            id={props.id}
            type={props.type}
        >
            {props.children}
        </Button>
    );
}

export default PrimaryButton;