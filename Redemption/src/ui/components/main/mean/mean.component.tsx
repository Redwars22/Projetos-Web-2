import React from 'react';
import '../container/form.style.css';

export default function MeanComponent() {
  function throwError() {
    window.alert(
      'Erro! Verifique se os valores informados não são menores ou iguais a zero e tente novamente!!!'
    );
  }

  function calculate() {
    let sum = (document.getElementById('sum') as HTMLInputElement).value;
    let quantity = (document.getElementById('quantity') as HTMLInputElement)
      .value;

    if (parseFloat(sum) == 0 || parseFloat(quantity) == 0) {
      throwError();
    } else if (parseFloat(sum) <= 0 || parseFloat(quantity) <= 0) {
      throwError();
    } else {
      let average: number = parseFloat(sum) / parseFloat(quantity);
      document.getElementById('result').innerText = average.toString();
    }
  }

  return (
    <div className="form">
      <h1 className="section-title">CALCULAR MÉDIA</h1>
      <div className="form-container">
        <label>SOMA TOTAL:</label>
        <input id="sum" type="number" min="0" />
      </div>
      <div className="form-container">
        <label>QUANTIDADE DE ELEMENTOS:</label>
        <input id="quantity" type="number" min="0" />
      </div>
      <a onClick={calculate} className="form-button pink darken-4 btn-small">
        CALCULAR MÉDIA
      </a>
      <div className="result-container">
        <span id="result" className="result">
          00.00
        </span>
      </div>
    </div>
  );
}
