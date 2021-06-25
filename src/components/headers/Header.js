import React from 'react';
import { HeaderButton } from '../buttons/HeaderButton';
import logo from '../../assets/logo.png';

export const Header = () => {


    return (
        <div className="w-screen h-header bg-white flex px-8 space-x-80 items-center shadow-md">
            <figure>
                <img className = "w-52" src= { logo } alt="logo" />
            </figure>
            <div className="text-lg">
                <HeaderButton selected link = "/dashboard" value = "Nueva Orden" />
                <HeaderButton value = "En proceso" />
                <HeaderButton value = "Listo" />
            </div>
        </div>
    )
}
