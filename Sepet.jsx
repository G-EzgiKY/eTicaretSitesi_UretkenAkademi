import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { Link, Navigate } from 'react-router-dom'

function Sepet({ user }) {
    const [gives, setGives] = useState([])

    useEffect(() => {
        setGives(JSON.parse(localStorage.getItem('gives')) ?? []);
    }, [])

    return (

        <>

            <h1>SEPETİNİZ</h1>
    

            <div className="list-group">
                {
                    gives.map((item) =>
                        <Link
                            key={item.id}
                            className="list-group-item list-group-item-action"
                            to={`/products/product/${item.id}`}>
                            {item.title.toUpperCase()}
                        </Link>)
                }



            </div>

        </>

    )
}



export default Sepet