import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
    <nav className='navbar navbar-expand-md navbar-light navbar-laravel'>
        <div className='container'>
            <Link className='navbar-brand' to="/app">Intranet</Link>
            <div className='collapse navbar-collapse' id='navbarSupportedContent'
>
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/articles">Articles</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/articles/add">Add article</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)

export default Header
