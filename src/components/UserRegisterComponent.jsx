import React, { useEffect, useRef, useState } from 'react'
import { UseForm } from '../hooks/UseForm'

export const UserRegisterComponent = () => {
  const focusRef = useRef()
  const initialForm = {
    fullname: "",
    email: "",
    password: "",
    rolename: ""
  }
  const { formState, fullname, email, password, rolename, onInputChange } = UseForm(initialForm)
  // const {fullname, email, password} = formState
  const saveGames = () => {
    fetch('http://localhost:3000/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formState),
    })
      .then((res) => res.json())
      .then((result) => console.log(result))
      .catch((err) => console.log(err))
  }
  const onSubmit = (event) => {
    event.preventDefault()
    console.log(formState)
    saveGames()
  }
  useEffect(() => {
    focusRef.current.focus()
  }, [])

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="fullname">fullname</label>
        <input
          type="text"
          className="form-control"
          name="fullname"
          id="fullname"
          value={fullname}
          onChange={onInputChange}
        />

      </div>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input

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
      <div className="form-group">
        <label htmlFor="rolename">Rolename</label>
        <input
          ref={focusRef}
          type="text"
          className="form-control"
          name="rolename"
          id="rolename"
          value={rolename}
          onChange={onInputChange}
        />
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}
