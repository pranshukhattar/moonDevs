import React from 'react'
import BurnButtonBar from '../../../components/pages/BurnPage/BurnButtonBar';
import BurnStatsContainer from '../../../components/pages/BurnPage/BurnStatsContainer';
const BurnPageStyled = styled.div``;

const DashboardLayoutStyled = () => {
    return (
        <DashboardLayoutStyled className='burnpage'>
        <div
            className='top_conatiner burnpage'
            style={{ alignItems: "flex-start" }}
        >
            <BurnButtonBar />
            <BurnStatsContainer/>
        </div>
    </DashboardLayoutStyled>
    )
}

export default DashboardLayoutStyled