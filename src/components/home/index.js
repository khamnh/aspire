import React, { Fragment, useContext } from 'react';
import HomeContext from '../../contextAPI/homecontext';
import { withRouter } from 'react-router-dom';
const Home = ({ history }) => {
    const initialState = {
        name: '',
        occupation: '',
        income: 0,
        amount: 0,
        interest: 0,
        installments: 0,
        frequency: '',
        date: '',
        contract: ''
    }
    const { homeStates, setHomeState } = useContext(HomeContext);

    const handleChangeOccupation = (event) => {
        setHomeState({ ...homeStates, occupation: event.target.value });
    }
    const handleChangeName = (event) => {
        setHomeState({ ...homeStates, name: event.target.value });
    }
    const handleChangeIncome = (event) => {
        setHomeState({ ...homeStates, income: event.target.value });
    }
    const handleChangeAmount = (event) => {
        setHomeState({ ...homeStates, amount: event.target.value });
    }
    const handleChangeInterest = (event) => {
        setHomeState({ ...homeStates, interest: event.target.value });
    }
    const handleChangeInstallments = (event) => {
        setHomeState({ ...homeStates, installments: event.target.value });
    }
    const handleChangeFrequency = (event) => {
        setHomeState({ ...homeStates, frequency: event.target.value });
    }
    const handeSubmit = (event) => {
        event.preventDefault();
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const yyyy = today.getFullYear();

        const datetoday = mm + '/' + dd + '/' + yyyy;
        setHomeState({ ...homeStates, date: datetoday, contract: `${today.getTime()}` });
        const confirm = window.confirm('Your loan has been approved. Go to contract?');
        if (confirm) {
            history.push('/dashboard/contracts');
        }
    }
    const handleReset = () => {
        setHomeState(initialState);
    }
    return (
        <Fragment>
            <h3>Loan Application Form</h3>
            <div className="form-info">
                <form onSubmit={handeSubmit}>
                    <div className="field">
                        <label>Borrower name <span>*</span></label>
                        <input name="name" type="text" onChange={handleChangeName} value={homeStates.name} />
                    </div>
                    <div className="field">
                        <label>Occupation <span>*</span></label>
                        <input name="occupation" type="text" onChange={handleChangeOccupation} value={homeStates.occupation} />
                    </div>
                    <div className="field">
                        <label>Monthly income ($) <span>*</span></label>
                        <input name="income" type="number" onChange={handleChangeIncome} value={homeStates.income} />
                    </div>
                    <div className="field">
                        <label>Amount required ($) <span>*</span></label>
                        <input name="amount" type="number" onChange={handleChangeAmount} value={homeStates.amount} />
                    </div>
                    <div className="field">
                        <label>Interest rate (%) <span>*</span></label>
                        <input name="interest" type="number" onChange={handleChangeInterest} value={homeStates.interest} />
                    </div>
                    <div className="field">
                        <label>Number of installments (month) <span>*</span></label>
                        <input name="installments" type="number" onChange={handleChangeInstallments} value={homeStates.installments} />
                    </div>
                    <div className="field">
                        <label>Repayment Frequency <span>*</span></label>
                        <p className="group-radio">
                            <input type="radio" name="payment" id="monthly" checked={homeStates.frequency === "monthly"} value="monthly" onChange={handleChangeFrequency} />
                            <label htmlFor="monthly">Monthly</label>
                            <input type="radio" name="payment" id="weekly" value="weekly" checked={homeStates.frequency === "weekly"} onChange={handleChangeFrequency} />
                            <label htmlFor="weekly" >Weekly</label>
                        </p>
                    </div>
                    <div className="home-group-btn">
                        <button className="btn-submit">Submit</button>
                        <button className="btn-reset" type="button" onClick={handleReset}>Reset</button>
                    </div>
                </form>
            </div>

        </Fragment>
    )
}

export default withRouter(Home);
