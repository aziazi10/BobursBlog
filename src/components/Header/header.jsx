import './header.scss'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Modals from "../Modals/modals"
import Home from '../pages/Home'

import logo from '../../assets/images/logo.png'
import modalBtn from '../../assets/images/modalBtn.png'
import loop from '../../assets/images/loop.png'


export default function Header() {

    const [openModal, setOpenModal] = useState(false)
    const [value, setValue] = useState('')

    const getPosts = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
    };

    useEffect(() => {
        getPosts()
    }, [])

    const searchPost = () => {

    }


    return (
        <header className='header'>
            <div className='header__item'>
                <img className='header__logo' src={logo} alt="logo" width='209' height='58' />
                <button className='header__modal-btn' onClick={() => setOpenModal(true)}><img src={modalBtn} alt="modalBtn" width='32' height='32' /></button>
                {openModal && <Modals closeModal={setOpenModal} />}
            </div>
            <ul className='header__sitenav'>
                <li className='header__sitenav-list'>
                    <NavLink className={(x) => x.isActive ? "header__sitenav-link header__sitenav-link--active" : "header__sitenav-link"} to='All'>All</NavLink>
                </li>
                <li>
                    <NavLink className={(x) => x.isActive ? "header__sitenav-link header__sitenav-link--active" : "header__sitenav-link"} to='Design'>Design Theory</NavLink>
                </li>
                <li>
                    <NavLink className={(x) => x.isActive ? "header__sitenav-link header__sitenav-link--active" : "header__sitenav-link"} to='UX'>UX</NavLink>
                </li>
                <li>
                    <NavLink className={(x) => x.isActive ? "header__sitenav-link header__sitenav-link--active" : "header__sitenav-link"} to='UI'>UI</NavLink>
                </li>
                <li>
                    <NavLink className={(x) => x.isActive ? "header__sitenav-link header__sitenav-link--active" : "header__sitenav-link"} to='Typography'>Typography</NavLink>
                </li>
            </ul>
            <form className='header__form'>
                <input className='header__input' type='search' placeholder='Search'
                    onClick={searchPost}
                >
                </input>
                <button className='header__button' type='submit'><img className='header__btn-img' src={loop} alt='loop' width='16' height='16'></img></button>
            </form>
        </header>
    )
}