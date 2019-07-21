import React, { useContext, useState } from 'react';
import HomeContext from '../../contextAPI/homecontext';

const addDays = (date, days) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

const PayRow = (props) => {
    const [show, setShow] = useState(false);
    const handleClick = () => {
        setShow(!show);
    }
    return (
        <tr key={props.week}>
            <td>{addDays(props.homeStates.date, props.week * props.days).toDateString()}</td>
            <td>{props.payPerWeeks}</td>
            <td>{
                !show ?
                    <button onClick={handleClick}>repay</button> :
                    <div className="repayment">
                        <i className="repaid" />
                        <span>Repaid</span>
                    </div>
            }</td>
        </tr>
    )
}

const Payment = () => {
    const { homeStates, setHomeState } = useContext(HomeContext);
    const createListPayment = (states) => {
        const numberOfWeeks = homeStates.frequency === 'weekly' ? states.installments * 4 : states.installments;
        const totalPaid = parseInt(parseInt(states.interest, 10) / 100 * states.amount, 10) + parseInt(states.amount, 10);
        const payPerWeeks = totalPaid / numberOfWeeks;
        const days = homeStates.frequency === 'weekly' ? 7 : 30;
        const ret = [];
        let week = 1;
        for (week; week <= numberOfWeeks; week++) {
            const payRow = (
                <PayRow key={week} homeStates={homeStates} week={week} payPerWeeks={payPerWeeks} days={days} />
            )
            ret.push(payRow);
        }
        return ret;
    }
    if (homeStates.contract === '') {
        return (
            <div className="no-payment"><i>You have no payments!</i></div>
        )
    }
    return (
        <div className="payment">
            <div className="payment-contract">
                <div>Contract: {homeStates.contract}</div>
                <div>Date start: {homeStates.date}</div>
                <div>Repayment Frequency: {homeStates.frequency}</div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Deadline</th>
                        <th>Repayment ($)</th>
                        <th>Repaid</th>
                    </tr>
                </thead>
                <tbody>
                    {createListPayment(homeStates)}
                </tbody>
            </table>
        </div>
    )
}

export default Payment;
