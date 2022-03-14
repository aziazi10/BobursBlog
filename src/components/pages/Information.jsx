import './Information.scss'


import Like from '../../assets/images/like.png'
import Share from '../../assets/images/share.png'
import Clock from '../../assets/images/clock.png'
import Right from '../../assets/images/right.png'

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"

export default function Information() {

    const [post, setPost] = useState([])
    const location = useLocation()
    const { id } = location.state

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setPost(data)
            })
            .catch((error) => {
                console.log(error);
            })
    })

    return (
        <div className='information'>
            <div className='information__like'>
                <img src={Like} alt="like" width="18" height='20' />
                <span>125</span>
                <img className='information__likee' src={Share} alt="share" width="18" height='16' />
                <span>78</span>
            </div>
            <div>
                <p className='information__title'>User interface</p>
                <span className='information__span'>October 24, 2020</span>
                <p className='information__text'>{post.body}</p>
                <div className='information__item'>
                    <img src={Clock} alt="clock" width='14' height='14' />
                    <span className='information__span'>readed 3 minutes ago</span>
                </div>
                <div className='information__btn'>
                    <Link to="/" className='information__link'>Go to Home </Link>
                    <img className='information__img' src={Right} alt="right" width="10" height='11' />
                </div>
            </div>
        </div>
    )
}