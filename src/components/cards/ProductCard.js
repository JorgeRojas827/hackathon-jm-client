import React from 'react'

export const ProductCard = ({ name, img, handleClick }) => {
    return (
        <div
            onClick = { handleClick }
            className = "w-40 h-42 p-5 mr-12 mb-5 cursor-pointer bg-white rounded hover:bg-gray-50 shadow-md">
            <h3 className = "text-sm text-center mb-2">{ name }</h3>
            <figure className = "flex-center">
                <img src= { img } alt={ name } />
            </figure>
        </div>
    )
}
