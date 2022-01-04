import React from 'react';
import './small-card.theme.css';

export default function SmallCard(props) {
  return (
    <div className="smallCard">
      <img src={props.url} className="gameLogo" />
    </div>
  );
}
