import './Home.scss'
import About from '../About/about'

import { useEffect, useState } from 'react'

export default function Home( { value } ) {

    const [posts, setPosts] = useState ([])

    const getPosts = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((data) => {
                setPosts(data);
                console.log(data);
            });
    };

    useEffect(() => {
        getPosts()
    }, [])

    


    return (
        <div className='home'>
            <About />
            <h2>Home page</h2>
        </div>
    )
}