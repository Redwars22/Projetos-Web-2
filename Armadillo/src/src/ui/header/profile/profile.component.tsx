import React from 'react';
import './profile.theme.css';

export default function Profile() {
  return (
    <div className="userInformationContainer">
      <img className="userAvatar" src="https://github.com/Redwars22.png" />
      <div className="userInformation">
        <h1 className="userName">Redwars22</h1>
        <div className="moneyContainer">
          <i className="material-icons">monetization_on</i>
          <h2 className="money">R$ 60.711</h2>
        </div>
      </div>
    </div>
  );
}
