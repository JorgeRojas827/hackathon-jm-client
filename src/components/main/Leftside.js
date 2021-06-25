import React from 'react';
import { Details } from '../details/Details';
import { Input } from '../inputs/Input';
import { ButtonPrimary } from '../buttons/ButtonPrimary';
import { FaPlus, FaChevronUp } from "react-icons/fa";
import { IconButton } from '../buttons/IconButton';

export const Leftside = () => {
    return (
        <div className = "w-3/12 flex flex-col relative p-5 h-full">
            <div className="w-full flex items-strech mb-2">
                <IconButton Icon = { FaPlus } />
                <Input placeholder = "Cliente" type = "text" />
            </div>
            <div className="w-full h-96 p-3 bg-gray-50 rounded">
                <Details />
            </div>
            <div className="flex-center mt-10 space-x-5">
                <ButtonPrimary selected value = "Registrar orden" />
                <IconButton Icon = { FaChevronUp } backgroundColor = "white" color = "#3AB8FF" />
            </div>
        </div>
    )
}
