import React from 'react';
import { Paper, Divider, Grid, TextField, Button, ButtonGroup} from '@mui/material';
import { useFormik } from 'formik';

import PrimaryButton from '../shared/buttons/PrimaryButton';
import './SignUpPage.css'

const SignUpPage = () => {
    
    const signUp = () => {
        console.log("signed up");
    }

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

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
                    <form onSubmit={formik.handleSubmit}>
                        <div className='body'>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <TextField
                                        required
                                        id="firstName"
                                        name='firstName'
                                        type='text'
                                        label="First Name"
                                        defaultValue=""
                                        onChange={formik.handleChange}
                                        value={formik.values.firstName}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                        required
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        label="Last Name"
                                        defaultValue=""
                                        onChange={formik.handleChange}
                                        value={formik.values.lastName}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                    <TextField
                                        required
                                        id="email"
                                        name="email"
                                        type="email"
                                        label="Email"
                                        defaultValue=""
                                        fullWidth
                                        onChange={formik.handleChange}
                                        value={formik.values.email}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                    <TextField
                                        required
                                        id="password"
                                        name="password"
                                        type="text"
                                        label="Password"
                                        defaultValue=""
                                        fullWidth
                                        onChange={formik.handleChange}
                                        value={formik.values.password}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                    <TextField
                                        required
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        type="text"
                                        label="Confirm Password"
                                        defaultValue=""
                                        fullWidth
                                        onChange={formik.handleChange}
                                        value={formik.values.confirmPassword}
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
                        <PrimaryButton id='signUpButton' type='submit' onClick={signUp}>Sign Up</PrimaryButton>
                    </form>
            </Paper>
        </div>
    );
};

export default SignUpPage;