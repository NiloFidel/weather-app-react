import React, { useEffect, useState } from 'react'
import { getCardRequest } from '../apis/card.api'
import { Navigate } from "react-router-dom";
import { NavbarComponent } from './NavbarComponent';
import { UseForm } from '../hooks/UseForm';

export const CardComponent = () => {
    const [cardList, setCardList] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3000/upload?` + new URLSearchParams({
            keyword: ''
        }))
            .then((response) => response.json())
            .then((data) => {
                setCardList(data)
            })
            .catch((err) => console.log(err))
        const loggedInUser = localStorage.getItem("authenticated");
        console.log('recuperado desde el local', loggedInUser)

    }, []);
    return (
        <>
            <NavbarComponent />

            <div className='row' style={{ marginTop: "90px" }}>
                {
                    cardList.map(item => {
                        return (
                            <div key={item._id} className="col-sm-3 card">
                                <img style={{ width: "100%", height: "250px" }} src={`http://localhost:3000/upload/image/${item.image}`} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p>{item.author}</p>
                                    <p className="card-text">{item.description}</p>
                                </div>

                            </div>
                        )
                    })
                }
            </div>

        </>
    )

}
