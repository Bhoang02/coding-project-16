// U89173488
import React from 'react';
import Profile from './Profile';
import './Gallery.css';

export const Header = () => (
  <header className="header">
    <h1>Meet the Team</h1>
  </header>
);

const Gallery = ({ team }) => {
  return (
    <div className="gallery">
      {team.map(member => (
        <Profile key={member.id} {...member} />
      ))}
    </div>
  );
};

export default Gallery;
