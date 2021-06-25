import React from 'react'

export const Input = ({ type, placeholder }) => {
    return (
        <>
            <input 
                type={ type }
                className = "w-full rounded pl-3 p-1 bg-gray-100"
                style = {{
                    color: '#5A5A5A'
                }}
                placeholder = { placeholder } />
        </>
    )
}
