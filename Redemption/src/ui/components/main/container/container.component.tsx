import React from 'react';
import FactorialComponent from '../factorial/factorial.component';
import MeanComponent from '../mean/mean.component';
import PercentageComponent from '../percentage/percentage.component';
import RandomNumberComponent from '../random-number/random-number.component';
import './container.style.css';

export default function Container() {
  return (
    <div className="main">
      <div className="container">
        <MeanComponent />
        <PercentageComponent />
      </div>
      <div className="container">
        <FactorialComponent />
        <RandomNumberComponent />
      </div>
    </div>
  );
}
