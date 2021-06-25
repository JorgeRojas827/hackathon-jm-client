import React, { useContext } from 'react'
import { DetailsContext } from '../../context/Details/DetailsContext';

export const Details = () => {

    const [details] = useContext(DetailsContext);

    return (
        <div className = "w-full h-full flex flex-col">
            <div className = "flex mt-2">
                <h2 className = "mr-10 font-semibold">Cant</h2>
                <h3 className = "w-36 mr-10 text-left font-semibold">Nombre</h3>
                <p className = "w-4 justify-self-end font-semibold">Precio</p>
            </div>
            {
                details.map((e, i) => {
                    return (
                        <div key = { i } className = "flex mt-2">
                            <h2 className = "mr-10">{ e.cant }</h2>
                            <h3 className = "w-48 mr-10 text-left">{ e.nombre }</h3>
                            <p className = "w-4 justify-self-end">{ e.precio * e.cant }</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
