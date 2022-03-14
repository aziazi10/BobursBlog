import './modals.scss'
import { NavLink } from 'react-router-dom'

import logo from '../../assets/images/logo.png'
import menuBtn from '../../assets/images/menuBtn.png'


export default function Modals({ closeModal }) {
    
    return (
        <div className='modal'>
            <div className='modal__item'>
                <img className='modal__logo' src={logo} alt="logo" width='120' height='33' />
                <button className='modal__btn' onClick={() => closeModal(false)}><img src={menuBtn} alt="menuBtn" width='32' height='32' /></button>
            </div>
            <ul className='modal__content'>
                <li className='modal__list'>
                    <NavLink className={(x) => x.isActive ? "modal__link modal__link--active" : "modal__link"} to='/'>All</NavLink>
                </li>
                <li className='modal__list'>
                    <NavLink className={(x) => x.isActive ? "modal__link modal__link--active" : "modal__link"} to='Design'>Design Theory</NavLink>
                </li>
                <li className='modal__list'>
                    <NavLink className={(x) => x.isActive ? "modal__link modal__link--active" : "modal__link"} to='UX'>UX</NavLink>
                </li>
                <li className='modal__list'>
                    <NavLink className={(x) => x.isActive ? "modal__link modal__link--active" : "modal__link"} to='UI'>UI</NavLink>
                </li>
                <li className='modal__list'>
                    <NavLink className={(x) => x.isActive ? "modal__link modal__link--active" : "modal__link"} to='Typography'>Typography</NavLink>
                </li>
            </ul>
        </div>
    )
}