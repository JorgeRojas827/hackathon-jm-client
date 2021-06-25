import React from 'react'
import { ButtonPrimary } from '../buttons/ButtonPrimary'

export const SubHeader = () => {
    return (
        <div className = "w-screen h-subheader space-x-80 flex items-center pl-24">
            <ButtonPrimary selected value = "Lavandería" />
            <ButtonPrimary value = "Tintorería" />
            <ButtonPrimary value = "Secado" />
        </div>
    )
}
