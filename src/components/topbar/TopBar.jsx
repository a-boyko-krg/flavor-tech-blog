import './topbar.scss';
import loginImg from '../../assets/loginImg.jpg';
import { Link } from 'react-router-dom';
import Menu from '../menu/Menu';
import { useState } from 'react';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';


export default function TopBar() {
  const [navOpen, setNavOpen] = useState(false);
  const user = false;
  return (
    <>
      <div className="top">
        <div className="topLeft">
          <IconButton
            size="large"
            edge="start"
            color="tomato"
            aria-label="menu"
            sx={{ mr: 2, display: { lg: 'none' } }}
            onClick={() => setNavOpen(!navOpen)}
          >
            {navOpen ? (
              <CloseIcon className="burgerButton" />
            ) : (
              <LunchDiningIcon className="burgerButton" />
            )}
          </IconButton>
          <span className="topLeftLogo">Технологія смаку</span>
        </div>
        <div className="topCenter">
          <Menu />
        </div>
        <div className="topRight">
          {user ? (
            <img className="topImg" src={loginImg} alt="" />
          ) : (
            <ul className="topList">
              <li className="topListItem">
                <Link to="/register" className="link">
                  Реєстрація
                </Link>
              </li>
              <li className="topListItem">
                <Link to="/login" className="link">
                  Вхід
                </Link>
              </li>
            </ul>
          )}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <SearchIcon />
          </IconButton>
        </div>
      </div>
      <div
        className="nav-overlay"
        style={{
          top: navOpen ? '0' : '-120%',
          transitionDelay: navOpen ? '0s' : '0s',
        }}
      >
        <ul className="nav-links">
          <li className="nav-item">
            <Link
              to="/"
              className="link"
              onClick={() => setNavOpen(!navOpen)}
              style={{
                top: navOpen ? '0' : '120px',
                transitionDelay: navOpen ? '0.8s' : '0s',
              }}
            >
              ГОЛОВНА
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/favorites"
              className="link"
              onClick={() => setNavOpen(!navOpen)}
              style={{
                top: navOpen ? '0' : '120px',
                transitionDelay: navOpen ? '0.9s' : '0s',
              }}
            >
              Вибране
            </Link>
            <div className="nav-item-wrapper"></div>
          </li>

          <li className="nav-item">
            <Link
              to="/write"
              className="link"
              onClick={() => setNavOpen(!navOpen)}
              style={{
                top: navOpen ? '0' : '120px',
                transitionDelay: navOpen ? '1s' : '0s',
              }}
            >
              ДОДАТИ
            </Link>
            <div className="nav-item-wrapper"></div>
          </li>
          <li className="nav-item">
            <Link
              to="/write"
              className="link"
              onClick={() => setNavOpen(!navOpen)}
              style={{
                top: navOpen ? '0' : '120px',
                transitionDelay: navOpen ? '1.1s' : '0s',
              }}
            >
              КОНТАКТИ
            </Link>
            <div className="nav-item-wrapper"></div>
          </li>
          <li className="nav-item">
            <Link
              to="/account"
              className="link"
              onClick={() => setNavOpen(!navOpen)}
              style={{
                top: navOpen ? '0' : '120px',
                transitionDelay: navOpen ? '1.2s' : '0s',
              }}
            >
              {user && 'ВИХІД'}
            </Link>
            <div className="nav-item-wrapper"></div>
          </li>
        </ul>
      </div>
    </>
  );
}
