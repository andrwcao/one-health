import { React, useContext, useState, useEffect } from 'react';
import LinkButton from '../shared/buttons/LinkButton';
import FitbitIcon from '@mui/icons-material/Fitbit';
import { Button, Grid, Paper, Divider } from '@mui/material';

import { AuthContext } from '../shared/context/auth-context';
import './ProfilePage.css';
import UserInformationTable from '../components/ProfilePage/UserInformationTable';

const ProfilePage = () => {
    const auth = useContext(AuthContext);
    const [fitbitInfo, setFitbitInfo] = useState({
        fitbitId: '',
        age: '',
        dateOfBirth: '',
        height: '',
        heightUnit: '',
        weight: '',
        weightUnit: '',
        memberSince: '',
    });
    useEffect(async () => {
        try {
            const res = await fetch(process.env.REACT_APP_BACKEND_URL + '/api/users', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': auth.token,
                }
            });
            const responseData = await res.json();
            console.log(responseData.user)
            const { fitbitId, age, dateOfBirth, height, heightUnit, weight, weightUnit, memberSince } = responseData.user;
            setFitbitInfo({        
                fitbitId,
                age,
                dateOfBirth,
                height,
                heightUnit,
                weight,
                weightUnit,
                memberSince,
            });

        } catch (err) {
            console.log(err);
        }
      }, []);

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
                            <a href={`${process.env.REACT_APP_BACKEND_URL}/fitbit/${auth.token}`} target='_blank' style={{ textDecoration: 'none' }}>
                            <Button id='fitbit-button' color='primary' variant='outlined' style={{ textDecoration: 'none', color: '#00B0B9' }}>
                                <FitbitIcon/>
                                FITBIT
                            </Button>
                            </a>
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
                    <UserInformationTable fitbitInfo={fitbitInfo}/>
                </Paper>
            </div>
        </div>
    );
};

export default ProfilePage;