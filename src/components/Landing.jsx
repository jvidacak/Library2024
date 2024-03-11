import React from 'react';
import Undraw_Books from '../assets/Undraw_Books.svg'
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <section id="landing">
            <header>
                <div className="header__container">
                    <div className="header__description">
                        <h1>Croatia's most awarded online library platfom</h1>
                        <h2>Find your dream book with <span className='purple'>Library</span></h2>
                        <Link to="#features">
                            <button className='btn'>Browse books</button>
                        </Link>
                    </div>
                    <figure className='header__img--wrapper'>
                        <img src={Undraw_Books} alt="" />
                    </figure>
                </div>
            </header>
        </section>
    );
}

export default Landing;
