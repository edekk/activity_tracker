import React, { useReducer } from 'react'
import AppContext from './context';
import rootReducer from './reducer';

const initialState = {
    activities: []
}

const AppProvider = (props) => {
    const { children } = props;
    const [ state, dispatch ] = useReducer(rootReducer, initialState);

    return(
        <AppContext.Provider value={{ state, dispatch }}>
            { children }
        </AppContext.Provider>
    );
}

export default AppProvider;