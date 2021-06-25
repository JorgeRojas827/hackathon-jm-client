import React, { createContext, useReducer } from 'react';
import { DetailsReducer } from './DetailsReducer';

export const DetailsContext = createContext([{}]);

export const detailsInitialState = {
    cant: undefined,
    nombre: undefined,
    precio: undefined,
};

export const DetailsProvider = ({ children }) => {
    const [details, dispatch] = useReducer(DetailsReducer, detailsInitialState);

    const addDetails = (productDetails) => {
        dispatch({ type: 'ADD_DETAILS', payload: productDetails });
    };

    return (
        <DetailsContext.Provider  value = {[
            details,
            addDetails
        ]}>
            { children }
        </DetailsContext.Provider>
    )
}
