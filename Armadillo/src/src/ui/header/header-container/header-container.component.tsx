import React from 'react';
import AppTitle from '../app-title/app-title.component';
import Profile from '../profile/profile.component';
import './header-container.theme.css';

export default function HeaderContainer() {
  return (
    <div className="header">
      <Profile />
      <AppTitle />
    </div>
  );
}
