import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <div className="logo nav__logo">
        <Link to="/"><img src="assets/images/logo.svg" alt="logo" /></Link>
      </div>
      <ul className="nav__list">
        <li className="nav__item"><Link to="/">Episodes</Link></li>
      </ul>
      <ul className="nav__social">
        <li><Link to="/" className="nav_social__item"><i className="fab fa-google-play"></i></Link></li>
        <li><Link to="/" className="nav_social__item"><i className="fab fa-itunes-note"></i></Link></li>
        <li><Link to="/" className="nav_social__item"><i className="fas fa-rss-square"></i></Link></li>
      </ul>
    </nav>
  )
}

export default Nav;