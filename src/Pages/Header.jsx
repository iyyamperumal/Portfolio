import React from 'react';
const Header = () => {
    return (
        <>
            <div className='w-full bg-dark fixed z-10 '>
                <div className="w-full p-3">
                    <span className="badge-dark nav justify-content-center italic h1 ">PORTFOLIO</span>
                </div>
                <nav className="nav nav-pills text-warning nav-fill h6 p-1">
                    <a className="nav-link border border-light rounded-pill" href='#home'>Homepage</a>
                    <a className="nav-link border border-light rounded-pill" href='#about'>About</a>
                    <a className="nav-link border border-light rounded-pill" href='#projects'>Projects</a>
                    <a className="nav-link border border-light rounded-pill" href='#contacts'>Contact</a>
                </nav>
            </div >
        </>

    );
}

export default Header;
