import React, { useState } from 'react'
import { MenuConstants } from '../utils/MenuConstants'
import '../styles/NavbarStyle.css'

export const NavbarComponent = () => {
    const [state, setState] = useState(false)
    const [searchInput, setSearchInput] = useState("");
    const handleClick = () => {
        setState(!state)
    }
    const refreshPage = () => {
        window.location.href = "/"
    }
    return (
        <>
            <nav className="navbar-items">
                <div className='logo-div' onClick={refreshPage}>
                    <h2 className='logo'>LiBROTHER</h2>
                </div>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={!state ? 'fa fa-bars' : 'fa fa-times'}></i>
                </div>
                <ul className={state ? 'nav-menu active' : 'nav-menu'}>
                    {MenuConstants.map(item => {
                        return (
                            <li key={item.name}>
                                <a className={item.cName} href={item.url} onClick={handleClick} target={item.target}>
                                    <i className={item.icon}></i>
                                    {item.name}
                                </a>

                            </li>
                        )
                    })}
                </ul>
                <input
                    className="search-input"
                    type="search"
                    name="search"
                    id="search"
                    placeholder="Search..."
                    value={searchInput}
                    onChange={(e) => {
                        setSearchInput(e.target.value);
                    }}
                    required
                />
            </nav>
        </>
    )
}
