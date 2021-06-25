import React from 'react'

export const IconButton = ({ Icon, color, backgroundColor }) => {
    return (
        <div
            className="mr-5 p-3 rounded cursor-pointer text-white bg-primary flex-center"
            style = {{
                color,
                backgroundColor
            }}
        >
            <Icon />
        </div>  
    )
}
