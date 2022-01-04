import React from 'react';
import { CardHeader } from '@mui/material';

import Chart from '../shared/components/Chart';
import GraphPage from '../shared/components/GraphPage';
import './WeightPage.css';
import './Shared.css';

const WeightPage = () => {
    return (
        <div className='box'>
            <GraphPage>
                <CardHeader
                title="Weight"
                subheader=""
                />
                <Chart/>
            </GraphPage>
        </div>
    );
};

export default WeightPage;