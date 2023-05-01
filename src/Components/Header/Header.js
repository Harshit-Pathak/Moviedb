import React from 'react'
import "./Header.css"
import {Link} from 'react-router-dom'

const Header=()=>{
    return( 
        <div>
            <div className='header'>
                <div className='header-left'>
                    <Link to="/"><img className="header__icon" src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" /></Link>
                    <Link style={{textDecoration:"none"}} to="/movies/popular"><span>Popular</span></Link>
                    <Link style={{textDecoration:"none"}} to="/movies/upcoming"><span>Upcoming</span></Link>
                    <Link style={{textDecoration:"none"}} to="/movies/top_rated"><span>Top Rated</span></Link>
                </div>
            </div>
        </div>
    )
}

export default Header