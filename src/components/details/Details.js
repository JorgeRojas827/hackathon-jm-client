import React, { useContext } from 'react'
import { DetailsContext } from '../../context/Details/DetailsContext';

export const Details = () => {

    const [details] = useContext(DetailsContext);

    return (
        <div className = "w-full h-full flex justify-between">
            <h2 className = "mr-10">{ details.cant }</h2>
            <h3 className = "mr-10">{ details.nombre }</h3>
            <p>{ details.precio }</p>
        </div>
    )
}
