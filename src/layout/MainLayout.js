import React from 'react'
import { Header } from '../components/headers/Header'
import { SubHeader } from '../components/headers/SubHeader'

export const MainLayout = ({ children }) => {
    return (
        <>
            <Header />
            <SubHeader />
            { children }
        </>
    )
}
