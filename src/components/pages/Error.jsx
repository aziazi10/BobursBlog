import './Error.scss'
import { NavLink } from 'react-router-dom'

import Err from '../../assets/images/err.png'
import Right from '../../assets/images/right.png'

export default function Error () {
    return (
        <div className='error'>
            <img src={Err} alt="err" width='500' height='193' className='error__image'/>
            <h2 className='error__title'>Page not found - 404</h2>
            <p className='error__text'>This page not found (deleted or never exists). Try a phrase in search box or back to home and start again.</p>
            <NavLink to="/" className='error__link'>TAKE ME HOME! <img src={Right} alt="right" width='8' height='8' className='error__img' /> </NavLink>
        </div>
    )
}