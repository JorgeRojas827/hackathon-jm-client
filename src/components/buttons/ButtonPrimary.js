import React from 'react'

export const ButtonPrimary = ({ value, selected }) => {
    return (
        <>
            <input 
                type="submit"
                value= { value }
                style = {
                    selected && {
                    backgroundColor: '#3AB8FF',
                    color: 'white' 
                }}
                className = "py-2 px-20 rounded-md cursor-pointer bg-transparent text-black font-medium" />
        </>
    )
}
