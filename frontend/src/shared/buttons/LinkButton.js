import React from 'react';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';

const LinkButton = (props) => {
    return (
        <Link to={props.link} style={{ textDecoration: 'none' }}>
            <Button
                variant={props.variant}
                size="large"
                color={props.color}
                id={props.id}
                onClick={props.onClick} 
            >
                {props.children}
            </Button>
        </Link>
    );
}

export default LinkButton;