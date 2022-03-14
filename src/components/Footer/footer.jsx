import './footer.scss'
import { Link } from 'react-router-dom'


import footerLogo from '../../assets/images/footerLogo.png'
import footerLogoRes from '../../assets/images/footerLogoRes.png'

export default function Footer() {

    return (
        <div className='footer'>
            <img className='footer__logo' src={footerLogo} alt="footerLogo" width='182' height='70' />
            <img className='footer__logo-res' src={footerLogoRes} alt="footerLogoRes" width='120' height='33' />

            <div className='footer__content'>

                <ul className='footer__item'>
                    <li className='footer__item-title'>FIGHT WITH ME ON:</li>
                    <li className='footer__item-list'><Link to="#" className='footer__item-link'>Twitter</Link></li>
                    <li className='footer__item-list'><Link to="#" className='footer__item-link'>Instagram</Link></li>
                    <li className='footer__item-list'><Link to="#" className='footer__item-link'>Telegram</Link></li>
                    <li className='footer__item-list'><Link to="#" className='footer__item-link'>YouTube</Link></li>
                    <li className='footer__item-list'><Link to="#" className='footer__item-link'>Figma</Link></li>
                </ul>
                <ul className='footer__item'>
                    <li className='footer__item-title'>WHAT I HAVE DONE:</li>
                    <li className='footer__item-list'><Link to="#" className='footer__item-link'>Library</Link></li>
                    <li className='footer__item-list'><Link to="#" className='footer__item-link'>Websitee</Link></li>
                    <li className='footer__item-list'><Link to="#" className='footer__item-link'>Website</Link></li>
                    <li className='footer__item-list'><Link to="#" className='footer__item-link'>Play Market</Link></li>
                    <li className='footer__item-list'><Link to="#" className='footer__item-link'>App Store</Link></li>
                </ul>
                <ul className='footer__item'>
                    <li className='footer__item-list'><Link to="#" className='footer__item-link'>Contact</Link></li>
                    <li className='footer__item-list'><Link to="#" className='footer__item-link'>Blog</Link></li>
                    <li className='footer__item-list'><Link to="#" className='footer__item-link'>Dribbble</Link></li>
                    <li className='footer__item-list'><Link to="#" className='footer__item-link'>Behance</Link></li>
                </ul>

            </div>
        </div>
    )
}