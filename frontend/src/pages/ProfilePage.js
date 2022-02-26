import { React, useContext } from 'react';
import LinkButton from '../shared/buttons/LinkButton';
import FitbitIcon from '@mui/icons-material/Fitbit';
import { Button, Grid, Paper, Divider } from '@mui/material';

import { AuthContext } from '../shared/context/auth-context';
import './ProfilePage.css';
import UserInformationTable from '../components/ProfilePage/UserInformationTable';

const ProfilePage = () => {
    const auth = useContext(AuthContext);
    
    const authenticateWithFitbit = async () => {
        try {
            const res = await fetch('http://localhost:5000' + '/fitbit', {
                mode: 'cors',
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': auth.token,
                }
            });
            console.log('dog');
            const responseData = await res.json();
            console.log(responseData);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <div className='box'>
                <Paper 
                variant='outlined'
                className='connectionPaper' 
                sx={
                    {borderRadius: 2}
                }
                >
                    <Grid 
                    container 
                    alignItems="center"
                    justifyContent="flex-end"
                    spacing={2}>
                        <Grid item xs={10.4}>
                            <h2>User Information</h2>
                        </Grid>
                        <Grid item xs>
                            <a href={`http://localhost:5000/fitbit/${auth.token}`}>
                                dog
                            </a>
                            <Button id='fitbit-button' onClick={authenticateWithFitbit} color='primary' variant='outlined' style={{ textDecoration: 'none', color: '#00B0B9' }}>
                                <FitbitIcon/>
                                FITBIT
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
            <div className='box'>
                <Paper 
                variant='outlined'
                className='tablePaper' 
                sx={
                    {borderRadius: 2}
                }
                >
                    <UserInformationTable/>
                </Paper>
            </div>
        </div>
    );
};

export default ProfilePage;