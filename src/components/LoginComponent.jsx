import React, { useEffect, useRef, useState } from 'react'
import { UseForm } from '../hooks/UseForm'
import { CardComponent } from './CardComponent'
import { useNavigate } from "react-router-dom";


export const LoginComponent = () => {
    const navigate = useNavigate();
    const focusRef = useRef()
    const [authenticated, setauthenticated] = useState(localStorage.getItem("authenticated") || false);

    const initialForm = {
        email: "",
        password: ""
    }
    const { formState, email, password, onInputChange } = UseForm(initialForm)
    const saveGames = () => {
        fetch('http://localhost:3000/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formState),
        })
            .then((e) => {
                if (e.statusText === 'Created') {
                    setauthenticated(true)
                    localStorage.setItem("authenticated", true)
                    navigate("/post");
                }
            })
            .catch((err) => console.log(err))
    }
    const onSubmit = (event) => {
        event.preventDefault()
        console.log(authenticated)
        saveGames()

    }
    useEffect(() => {
        focusRef.current.focus()
    }, [])

    return (
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                    ref={focusRef}
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    value={email}
                    onChange={onInputChange}
                />

            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    className="form-control"
                    name="password"
                    id="password"
                    value={password}
                    onChange={onInputChange}
                />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}
