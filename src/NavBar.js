import React from 'react'
import {NavLink} from 'react-router-dom'
import './NavBar.css'


export default function NavBar() {
    return (
        <nav>
            <div>
                <ul>
                    <li><NavLink className='NavLink' activeClassName='active' to='/home'>Главная</NavLink></li>
                    <li><NavLink className='NavLink' activeClassName='active' to='/basket'>Корзина</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}