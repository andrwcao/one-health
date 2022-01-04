import React from 'react';
import { Paper, Divider, Stack, TextField} from '@mui/material';
import { useFormik } from 'formik';

import PrimaryButton from '../shared/buttons/PrimaryButton';
import './LoginPage.css';
import './Shared.css';

const LoginPage = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2));
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
                <h2 className='LoginHeading'>Login</h2>
                <Divider className='head-divider'/>
                    <form onSubmit={formik.handleSubmit}>
                        <div className='body'>
                            <Stack spacing={2}>
                            <TextField
                                id="email"
                                name='email'
                                type='email'
                                label="Email"
                                defaultValue=""
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                            <TextField
                                id="password"
                                name='password'
                                type='password'
                                label="Password"
                                defaultValue=""
                                onChange={formik.handleChange}
                                value={formik.values.password}
                            />
                            </Stack>
                        </div>
                        <PrimaryButton id='loginButton' type='submit'>Login</PrimaryButton>
                    </form>
            </Paper>
        </div>
    );
};

export default LoginPage;