import React from 'react';
import { Paper, Divider, Stack, TextField} from '@mui/material';

import PrimaryButton from '../shared/buttons/PrimaryButton';
import './LoginPage.css'

const LoginPage = () => {
    
    const login = () => {
        console.log("logged in");
    }

    return (
        <div className='box'>
            <Paper 
                variant='outlined'
                className='paper' 
                sx={
                    {borderRadius: 2}
                }
            >
                <h2 className='LoginHeading'>Login</h2>
                <Divider className='head-divider'/>
                    <div className='body'>
                        <Stack spacing={2}>
                        <TextField
                            id="outlined-uncontrolled"
                            label="Email"
                            defaultValue=""
                        />
                        <TextField
                            id="outlined-uncontrolled"
                            label="Password"
                            defaultValue=""
                        />
                        </Stack>
                    </div>
                    <PrimaryButton id='loginButton' onClick={login}>Login</PrimaryButton>
            </Paper>
        </div>
    );
};

export default LoginPage;