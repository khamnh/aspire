import React, { useState } from 'react';
import HomeContext from './homecontext';

const HomeProvider = ({ children }) => {
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
    const [homeStates, setHomeState] = useState(initialState);
    return (
        <HomeContext.Provider value={{ homeStates, setHomeState }}>
            {children}
        </HomeContext.Provider>
    )
}

export default HomeProvider;
