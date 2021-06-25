import React from 'react';
import { Leftside } from '../components/main/Leftside';
import { Rightside } from '../components/main/Rightside';
import { MainLayout } from '../layout/MainLayout';
import { DetailsState } from '../context/Details/DetailsState';

export const Dashboard = () => {
    return (
        <div className = "bg-graycuart w-full h-full">
            <MainLayout>
                <DetailsState>
                    <div className="flex w-full h-main">
                        <Leftside />
                        <Rightside />
                    </div>
                </DetailsState>
            </MainLayout>
        </div>
    )
}
