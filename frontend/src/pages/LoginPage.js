import { React, useContext } from 'react';
import { Paper, Divider, Stack, TextField} from '@mui/material';
import { useFormik } from 'formik';

import { AuthContext } from '../shared/context/auth-context';
import PrimaryButton from '../shared/buttons/PrimaryButton';
import './LoginPage.css';
import './Shared.css';

const LoginPage = () => {
    const auth = useContext(AuthContext);

    const onSubmitHandler = async (values) => {
        try {
            const res = await fetch('http://localhost:5000/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: values.email,
                    password: values.password,
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
            email: '',
            password: '',
        },
        onSubmit: onSubmitHandler,
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