import React from 'react';
import { Link } from 'react-router-dom';

export const HeaderButton = ({ value, link, selected, onClick }) => {

    return (
        <Link to = { link }>
            <input 
                type="submit"
                value= { value }
                style = {
                    selected && {
                        color: "#3AB8FF"
                    }
                }
                className = "py-1 px-8 rounded bg-white cursor-pointer text-headerfont font-medium" />
        </Link>
    )
}
