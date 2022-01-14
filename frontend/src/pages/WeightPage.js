import React from 'react';
import { CardHeader } from '@mui/material';

import GraphPage from '../shared/components/GraphPage';
import './Shared.css';

const WeightPage = () => {
    const xData = ['11/11/21', '11/12/21', '11/13/21', '11/14/21', '11/15/21', '11/16/21', '11/18/21'];
    return (
        <div className='box'>
            <GraphPage xData={xData} colour='rgba(60, 160, 232)'>
                <CardHeader
                title="Weight"
                subheader=""
                />
            </GraphPage>
        </div>
    );
};

export default WeightPage;