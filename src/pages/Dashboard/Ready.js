import React from 'react'
import { MainLayout } from '../../layout/MainLayout'

export const Ready = () => {
    return (
        <>
            <MainLayout>
                <table className = "w-full table-fixed">
                    <thead>
                        <tr className = "h-16 text-gray-700">
                            <th>ID</th>
                            <th>Listo a</th>
                            <th>Cliente</th>
                            <th>Órden</th>
                            <th>Piezas</th>
                            <th>Pagado</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className = "text-center h-auto bg-gray-50">
                            <td>1</td>
                            <td>25/06/12</td>
                            <td></td>
                            <td className = "text-left pl-5">xd <br /> xd <br /> xd</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr className = "text-center h-auto">
                            <td>1</td>
                            <td>25/06/12</td>
                            <td></td>
                            <td className = "text-left pl-5">xd <br /> xd <br /> xd</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr className = "text-center h-auto bg-gray-50">
                            <td>1</td>
                            <td>25/06/12</td>
                            <td></td>
                            <td className = "text-left pl-5">xd <br /> xd <br /> xd</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </MainLayout>
        </>
    )
}
