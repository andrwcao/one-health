import { React, useContext } from 'react';
import LinkButton from '../shared/buttons/LinkButton';
import FitbitIcon from '@mui/icons-material/Fitbit';
import { Button, Grid, Paper, Divider } from '@mui/material';

import { AuthContext } from '../shared/context/auth-context';
import './ProfilePage.css';
import UserInformationTable from '../components/ProfilePage/UserInformationTable';

const ProfilePage = () => {
    const auth = useContext(AuthContext);
    
    const reload = async () => {
        //window.location.reload(false);
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
                            <a href={`http://localhost:5000/fitbit/${auth.token}`} target='_blank' style={{ textDecoration: 'none' }}>
                            <Button id='fitbit-button' color='primary' onClick={reload}variant='outlined' style={{ textDecoration: 'none', color: '#00B0B9' }}>
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
                    <UserInformationTable/>
                </Paper>
            </div>
        </div>
    );
};

export default ProfilePage;