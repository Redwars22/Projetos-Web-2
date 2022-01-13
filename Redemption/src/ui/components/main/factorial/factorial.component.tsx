import React from 'react';
import '../container/form.style.css';

export default function FactorialComponent() {
  function throwError() {
    window.alert(
      'Erro! Verifique se os valor informados não é menor ou igual a zero e tente novamente!!!'
    );
  }

  function calculateFactorialOf(n: number) {
    let factorialResult: number = n;
    let i: number = n;

    do {
      factorialResult *= i - 1;
      i--;
    } while (i != 1);

    return factorialResult;
  }

  function getFactorial() {
    let number = (document.getElementById('factorialOf') as HTMLInputElement)
      .value;

    if (
      parseInt(number) == 0 ||
      parseInt(number) <= 0 ||
      parseInt(number) == 1
    ) {
      throwError();
    } else {
      let factorialResult: number = calculateFactorialOf(parseInt(number));
      document.getElementById('result3').innerText = factorialResult.toString();
    }
  }

  return (
    <div className="form">
      <h1 className="section-title">CALCULAR FATORIAL</h1>
      <div className="form-container">
        <label>FATORIAL DE:</label>
        <input id="factorialOf" type="number" min="0" />
      </div>
      <a onClick={getFactorial} className="form-button pink darken-4 btn-small">
        CALCULAR FATORIAL
      </a>
      <div className="result-container">
        <span id="result3" className="result">
          00.00
        </span>
      </div>
    </div>
  );
}
