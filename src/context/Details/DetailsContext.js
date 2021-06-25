import React, { createContext, useReducer } from 'react';
import { DetailsReducer } from './DetailsReducer';

export const DetailsContext = createContext([{}]);

export const detailsInitialState = {
    details: []
}
    
export const DetailsProvider = ({ children }) => {
    const [{details}, dispatch] = useReducer(DetailsReducer, detailsInitialState);

    const addDetails = (productDetail) => {
        console.log(productDetail.cant)
        if (!details.some(e => e.id === productDetail.id)) {
            dispatch({ type: 'ADD_DETAILS', payload: productDetail });
        } else {
            dispatch({ type: 'ADD_DETAILS_CANT', payload: productDetail.cant })
        }
    };

    return (
        <DetailsContext.Provider value = {[
            details,
            addDetails
        ]}>
            { children }
        </DetailsContext.Provider>
    )
}
