import React from 'react';
import './big-card.theme.css';

export default function BigCard(props) {
  return (
    <div className="bigCard">
      <img src={props.url} className="bigGameLogo" />
      <h1 className="titleElement">Em promoção: GTA V</h1>
    </div>
  );
}
