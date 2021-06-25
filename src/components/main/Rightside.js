import React from 'react'
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react'
import { DetailsContext } from '../../context/Details/DetailsContext';
import { ProductCard } from '../cards/ProductCard'

export const Rightside = () => {

    const [products, setProducts] = useState([]);
    const [ details, addDetails ] = useContext(DetailsContext)

    useEffect(() => {
        getProducts();     
    }, [])

    const getProducts = async () => {
        const res = await fetch("https://api.jsonbin.io/b/60d554888a4cd025b7a53206/6");
        const data = await res.json();
        setProducts(data.productos)
    }

    return (
        <div className = "w-9/12 h-full p-10 bg-grayprim flex flex-wrap">
            {
                products.map((e, id) => {
                    return (
                        <ProductCard handleClick = { (id) => addDetails({
                            cant: id.detail,
                            nombre: e.nombre,
                            precio: e.precio
                        }) } name = { e.nombre } img = { e.img }  key = { id } />
                    )
                })
            }
        </div>
    )
}
