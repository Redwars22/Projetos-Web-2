import React from 'react';
import './wide-card.theme.css';

export default function WideCard(props) {
  return (
    <div className="wideCard">
      <img
        src={props.url}
        className="wideGameLogo"
        width="302px"
        height="136px"
      />
      <h1 className="wideTitleElement">{props.title}</h1>
    </div>
  );
}
