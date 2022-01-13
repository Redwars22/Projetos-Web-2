import React from 'react';
import './header.style.css';
import AppLogoComponent from '../app-logo/app-logo.component';
import NavBarComponent from '../navbar/navbar.component';

export default function HeaderComponent() {
  return (
    <div className="header">
      <AppLogoComponent />
      <NavBarComponent />
    </div>
  );
}
