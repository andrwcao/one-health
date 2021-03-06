import { React, useContext } from 'react';
import { Paper, Divider, Grid, TextField, ToggleButtonGroup, ToggleButton } from '@mui/material';
import { useFormik } from 'formik';

import { AuthContext } from '../shared/context/auth-context';
import PrimaryButton from '../shared/buttons/PrimaryButton';
import './SignUpPage.css';
import './Shared.css';

const SignUpPage = () => {
    const auth = useContext(AuthContext);

    const onSubmitHandler = async (values) => {
        try {
            const res = await fetch(process.env.REACT_APP_BACKEND_URL + '/api/users/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    fName: values.firstName,
                    lName: values.lastName,
                    email: values.email,
                    password: values.password,
                    gender: values.gender,
                })
            });

            const responseData = await res.json();
            auth.login(responseData.token);
        } catch (err) {
            console.log(err);
        }
    };

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            gender: '',
        },
        onSubmit: onSubmitHandler,
    });

    const handleGenderChange = (event, newGender) => {
        // manually update formik
        formik.setFieldValue('gender', newGender);
    };

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
                                        type="password"
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
                                        type="password"
                                        label="Confirm Password"
                                        defaultValue=""
                                        fullWidth
                                        onChange={formik.handleChange}
                                        value={formik.values.confirmPassword}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <ToggleButtonGroup
                                        exclusive
                                        aria-label="text alignment"
                                        id="gender"
                                        name="gender"
                                        type="text"
                                        fullWidth
                                        onChange={handleGenderChange}
                                        value={formik.values.gender}
                                        >
                                            <ToggleButton id="male-button" value="Male" aria-label="left aligned">
                                                Male
                                            </ToggleButton>
                                            <ToggleButton id="female-button" value="Female" aria-label="centered">
                                                Female
                                            </ToggleButton>
                                        </ToggleButtonGroup>
                                    </Grid>
                                </Grid>
                        </div>
                        <PrimaryButton id='signUpButton' type='submit'>Sign Up</PrimaryButton>
                    </form>
            </Paper>
        </div>
    );
};

export default SignUpPage;