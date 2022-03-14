import './about.scss'

import Right from '../../assets/images/right.png'
import Facebook from '../../assets/images/facebook.png'
import Cat from '../../assets/images/cat.png'
import Twitter from '../../assets/images/twitter.png'
import Instagramm from '../../assets/images/instagramm.png'

export default function About() {
    return (
        <div className="about">
            <h2 className="about__title">What I do!</h2>
            <p className="about__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora hic debitis, quos reiciendis ipsum pariatur aliquam eum sit itaque eos adipisci nulla iste incidunt fuga quidem praesentium maiores.</p>
            <div className="about__content">
                <p className="about__link">EXPLORE ME</p>
                <button className="about__btn"><img src={Right} alt="right" width='4' height='8' /></button>
            </div>
            <div className="about__item">
                <button className="about__item-btn"><img className="about__img" src={Facebook} alt="right" width='10' height='18'/></button>
                <button className="about__item-btn"><img className="about__img" src={Cat} alt="right" width='20' height='20'/></button> 
                <button className="about__item-btn"><img className="about__img" src={Twitter} alt="right" width='20' height='17'/></button> 
                <button className="about__item-btn"><img className="about__img" src={Instagramm} alt="right" width='17' height='17' /></button> 
            </div>

        </div>
    )
}