import React from 'react';
import './app-title.theme.css';

export default function AppTitle() {
  return (
    <div className="titleContainer">
      <h1 className="appTitle">Armadillo</h1>
      <img
        className="appLogo"
        src="https://redwars22.github.io/Website/img/armadillo.png"
      />
    </div>
  );
}
