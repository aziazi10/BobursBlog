import './All.scss'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import About from '../About/about'
import Explore from '../Explore/explore'

import Clock from '../../assets/images/clock.png'

export default function All() {

    const [data, setData] = useState([])

    const getPosts = (num = 1) => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            });
    };

    useEffect(() => {
        getPosts()
    }, [])

    // &_limit=8

    return (
        <div className="all">
            <About />
            <div>
                <h2 className='all__title'>Recent Posts</h2>
                <ul>
                    {
                        data.map(post =>
                            <li key={post.id} className='all__list'><Link to="/information" state={{ id: post.id }} className='all__link'>
                                <div className='all__user'>
                                    <p className='all__date'>September 24.2020</p>
                                    <p className='all__date'>User Interface</p>
                                </div>
                                <b className='all__bolt'>Post:</b>
                                {post.title}
                            </Link>
                                <div className='all__item'>
                                    <img className='all__item-img' src={Clock} alt="clock" width='17.5' height='17.5' />
                                    <p className='all__read'>readed 3 minutes ago</p>
                                </div>
                            </li>)
                    }
                </ul>
                <Explore />
            </div>
            {/* <button onClick={() => this.getPosts(1)}>Page 1</button>
            <button onClick={() => this.getPosts(2)}>Page 2</button> */}
        </div>
    )
}




