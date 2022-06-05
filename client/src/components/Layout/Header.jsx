import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import '../../styles/header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__left">
          <div className="header__title">developer.io</div>
          <form className="header__search__form">
            <label htmlFor="" className="header__search__label">
              <input
                className="header__search__input"
                placeholder="Search..."
                type="text"
              />
            </label>
            <button type="submit" className="header__form__button">
              <FaSearch className="header__search__icon" />
            </button>
          </form>
        </div>
        <div className="header__right">
          <Link to="/login">Log in</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
