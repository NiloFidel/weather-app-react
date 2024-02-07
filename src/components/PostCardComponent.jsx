import React, { useEffect, useRef, useState, ChangeEvent } from 'react'
import { UseForm } from '../hooks/UseForm'
import { NavbarComponent } from './NavbarComponent'

export const PostCardComponent = () => {
    const focusRef = useRef()
    //console.log(focusRef)
    const initialForm = {
        title: "",
        description: "",
        author: "",
        category: ""
    }
    const { formState, title, description, author, category, onInputChange } = UseForm(initialForm)
    const saveGames = () => {
        fetch('http://localhost:3000/upload/all-NO_FUNCIONA', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formState),
        })
            .then((response) => {
                console.log(response.statusText)
            })
            .catch((err) => console.log(err))
    }
    const onSubmit = (event) => {
        event.preventDefault()
        // console.log(formState)
        saveGames()
    }

    useEffect(() => {
        focusRef.current.focus()
    }, [])

    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="title">title</label>
                    <input
                        ref={focusRef}
                        type="text"
                        className="form-control"
                        name="title"
                        id="title"
                        placeholder=""
                        value={title}
                        onChange={onInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">description</label>
                    <textarea
                        type="text"
                        className="form-control"
                        style={{ row: "3" }}
                        name="description"
                        id="description"
                        placeholder=""
                        value={description}
                        onChange={onInputChange}
                    />

                </div>
                <div className="form-group">
                    <label htmlFor="author">author</label>
                    <input
                        type="text"
                        className="form-control"
                        name="author"
                        id="author"
                        placeholder=""
                        value={author}
                        onChange={onInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="category">category</label>
                    <input
                        type="text"
                        className="form-control"
                        name="category"
                        id="category"
                        placeholder=""
                        value={category}
                        onChange={onInputChange}
                    />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}
