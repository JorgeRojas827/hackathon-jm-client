import React from 'react';
import { HeaderButton } from '../buttons/HeaderButton';
import { IconButton } from '../buttons/IconButton';
import { FaAlignJustify } from "react-icons/fa";

export const Header = () => {
    return (
        <div className="w-screen h-header bg-white flex px-8 space-x-60 items-center shadow-md">
            <figure>
                <img className = "w-52" src = {"/static/images/logo.png"} alt="logo" />
            </figure>
            <div className="text-lg">
                <HeaderButton selected link = "/dashboard" value = "Nueva Orden" />
                <HeaderButton link = "/dashboard/process" value = "En Proceso" />
                <HeaderButton link = "/dashboard/shipping" value = "Por Entregar" />
                <HeaderButton link = "/dashboard/ready" value = "Entregados" />
            </div>
            <IconButton Icon = { FaAlignJustify } />
        </div>
    )
}
