import React from 'react';
import { CardHeader } from '@mui/material';

import GraphPage from '../shared/components/GraphPage';
import './WeightPage.css';
import './Shared.css';

const WeightPage = () => {
    const xData = ['11/11/22', '11/12/22', '11/13/22', '11/14/22', '11/15/22', '11/16/22', '11/18/22'];
    return (
        <div className='box'>
            <GraphPage xData={xData}>
                <CardHeader
                title="Weight"
                subheader=""
                />
            </GraphPage>
        </div>
    );
};

export default WeightPage;