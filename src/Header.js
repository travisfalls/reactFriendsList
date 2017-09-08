import React from 'react';
import efalogo from './eleven-fifty-badge-white.png';

const Header = () => {
    return (
        <nav className="navbar navbar-inverse">
            <img src={efalogo} alt="efalogo" className="logo" />
            <h1>Friends List Application</h1>
        </nav>
    );
}

export default Header;
