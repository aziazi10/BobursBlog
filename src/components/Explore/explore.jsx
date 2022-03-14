import './explore.scss'

import Right from '../../assets/images/right.png'

export default function Explore() {
    return (
        <div className="explore">
            <h2 className="explore__title">What I do!</h2>
            <p className="explore__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora hic debitis, quos reiciendis ipsum pariatur aliquam eum sit itaque eos adipisci nulla iste incidunt fuga quidem praesentium maiores.</p>
            <div className="explore__content">
                <p className="explore__link">EXPLORE ME</p>
                <button className="explore__btn"><img src={Right} alt="right" width='4' height='8' /></button>
            </div>
        </div>
    )
}