import React from 'react';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';

const LinkButton = (props) => {
    return (
        <Link to={props.link} style={{ textDecoration: 'none' }}>
            <Button
                variant="contained"
                size="large"
                color="secondary"
                id={props.id}
                onClick={props.onClick} 
            >
                {props.children}
            </Button>
        </Link>
    );
}

export default LinkButton;