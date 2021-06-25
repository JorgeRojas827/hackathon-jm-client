import React from 'react'

export const ButtonPrimary = ({ value, selected }) => {
    return (
        <>
            <input 
                type="submit"
                value= { value }
                style = {
                    selected && {

                }}
                className = "py-1 px-20 rounded cursor-pointer bg-primary text-white font-medium" />
        </>
    )
}
