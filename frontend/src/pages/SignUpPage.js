import React from 'react';
import { Paper, Divider, Grid, TextField, Button, ButtonGroup} from '@mui/material';

import PrimaryButton from '../shared/buttons/PrimaryButton';
import './SignUpPage.css'

const SignUpPage = () => {
    
    const signUp = () => {
        console.log("signed up");
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
                <h2 className='SignUpHeading'>Create an account</h2>
                <Divider className='head-divider'/>
                    <div className='body'>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <TextField
                                required
                                id="outlined-uncontrolled"
                                label="First Name"
                                defaultValue=""
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                required
                                id="outlined-uncontrolled"
                                label="Last Name"
                                defaultValue=""
                                />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField
                                required
                                id="outlined-uncontrolled"
                                label="Email"
                                defaultValue=""
                                fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField
                                required
                                id="outlined-uncontrolled"
                                label="Password"
                                defaultValue=""
                                fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField
                                required
                                id="outlined-uncontrolled"
                                label="Confirm Password"
                                defaultValue=""
                                fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <ButtonGroup fullWidth variant="outlined" aria-label="outlined button group">
                                    <Button>Male</Button>
                                    <Button>Female</Button>
                                </ButtonGroup>
                            </Grid>
                        </Grid>
                    </div>
                    <PrimaryButton id='signUpButton' onClick={signUp}>Sign Up</PrimaryButton>
            </Paper>
        </div>
    );
};

export default SignUpPage;