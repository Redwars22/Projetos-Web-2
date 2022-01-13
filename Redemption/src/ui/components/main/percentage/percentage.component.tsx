import React from 'react';
import '../container/form.style.css';

export default function PercentageComponent() {
  function throwError() {
    window.alert(
      'Erro! Verifique se os valores informados não são menores ou iguais a zero e tente novamente!!!'
    );
  }

  function getPercentage() {
    let percent = (document.getElementById('percent') as HTMLInputElement)
      .value;
    let ofNumber = (document.getElementById('ofNumber') as HTMLInputElement)
      .value;

    if (parseFloat(percent) == 0 || parseFloat(ofNumber) == 0) {
      throwError();
    } else if (parseFloat(percent) <= 0 || parseFloat(ofNumber) <= 0) {
      throwError();
    } else {
      let percentOfNumber: number =
        (parseFloat(percent) * parseFloat(ofNumber)) / 100;
      document.getElementById('result2').innerText = percentOfNumber.toString();
    }
  }

  return (
    <div className="form">
      <h1 className="section-title">CALCULAR PORCENTAGEM</h1>
      <div className="form-container">
        <label>n%:</label>
        <input id="percent" type="number" min="0" />
      </div>
      <div className="form-container">
        <label>DE:</label>
        <input id="ofNumber" type="number" min="0" />
      </div>
      <a
        onClick={getPercentage}
        className="form-button pink darken-4 btn-small"
      >
        CALCULAR PORCENTAGEM
      </a>
      <div className="result-container">
        <span id="result2" className="result">
          00.00
        </span>
      </div>
    </div>
  );
}
