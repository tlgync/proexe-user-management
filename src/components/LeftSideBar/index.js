/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useCallback, useState } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { HeaderSide } from '../HeaderSide';
import { LeftRoute } from './LeftRoute';
import './LeftSideBar.css';

export const LeftSideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(0);
  const handleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);
  return (
    <>
      <div className={`sidebar ${isOpen && 'open'}`}>
        <div className="logo-details">
          <div className="logo_name">
            <img src="./logo.svg" alt="logo" width="170" />
          </div>
          <i onClick={() => handleMenu()} className={`${!isOpen ? 'bx bx-menu' : 'bx bxs-caret-left-square'}`} id="btn" />
        </div>
        <ul className="nav-list">
          <li>
            <i className="bx bx-search" />
            <input id="searchInput" type="text" placeholder="Search..." />
            <span className="tooltip">Search</span>
          </li>
          {LeftRoute.map((route, index) => (
            <li key={index}>
              <Link onClick={() => setIsActive(index)} to={route.path} className={index === isActive ? 'activeBG' : ''}>
                <i className={route.icon} style={{ color: index === isActive ? '#FF7E1D' : '#0378CC' }} />
                <span className={`links_name ${index === isActive ? 'activeSpan' : ''}`}>{route.name}</span>
              </Link>
              <span className="tooltip">{route.hoverName}</span>
            </li>

          ))}
        </ul>
      </div>
      <HeaderSide />
      <section className="home-section">
        <div style={{ marginTop: 75 }}>
          <Switch>
            {LeftRoute.map((route, index) => (
              <Route exact={index === 0} key={index} path={route.path} render={() => route.component} />
            ))}
          </Switch>
        </div>
      </section>
    </>
  );
};
