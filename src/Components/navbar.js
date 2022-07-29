import React from 'react';
import { NavLink } from 'react-router-dom';
import backArrow from '../images/arrow2.png';
import settings from '../images/settings.png';
import voice from '../images/mic.png';


const NavBar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'HomePage',
      image: {backArrow},
    },
  ];

  return (
    <nav >
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <NavLink to={link.path}><img src={backArrow} alt='arrow' /></NavLink>
          </li>
        ))}
      </ul>
      <div>
        <h1>Dog Breeds</h1>
      </div>
      <div className='voice-setting-div'>
        <img src={voice} alt='voicerecorder' ></img>
        <img src={settings} alt='settings' ></img>
      </div>
    </nav>
  );
};

export default NavBar;