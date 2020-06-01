import React from 'react';
import '../assets/styles.css';

const Topbar = () => {
    return (
        <div className="page">
            <nav className="menu">
                <ul className="menu__list">
                    <li className="menu__group"><a href="#0" className="menu__link">Home</a></li>
                    <li className="menu__group"><a href="#0" className="menu__link">Projetos</a></li>
                    <li className="menu__group"><a href="#0" className="menu__link">Contato</a></li>
                </ul>
            </nav>
        </div>
  );
}

export default Topbar;
