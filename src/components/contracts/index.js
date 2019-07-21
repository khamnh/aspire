import React, { useContext } from 'react';
import HomeContext from '../../contextAPI/homecontext';
import { withRouter } from 'react-router-dom';

const contractImg = require('../../assests/contract.png');
const Contract = ({ history }) => {
    const { homeStates, setHomeState } = useContext(HomeContext);
    if (homeStates.contract === '') {
        return <div className="no-contract"><i>You have no contracts!</i></div>
    }
    const handleClick = () => {
        history.push('/dashboard/history');
    }
    return (
        <div className="contracts">
            <div className="contract" onClick={handleClick}>
                <img src={contractImg} width="100" height="100" alt="no" />
                <div className="contract-info">
                    <div>Name: {homeStates.name}</div>
                    <div>Contract: {homeStates.contract}</div>
                    <div>Amount required: {homeStates.amount}</div>
                    <div>Date start: {homeStates.date}</div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Contract);
