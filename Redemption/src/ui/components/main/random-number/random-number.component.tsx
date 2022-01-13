import React from 'react';
import '../container/form.style.css';

export default function RandomNumberComponent() {
  function throwError() {
    window.alert(
      'Erro! Verifique se os valores informados não são menores ou iguais a zero e tente novamente!!!'
    );
  }

  let argument = 0;

  function getSeed() {
    switch (argument) {
      case 0:
        argument++;
        return 10;
        break;
      case 1:
        argument++;
        return 100;
        break;
      case 2:
        argument++;
        return 1000;
        break;
      case 3:
        argument = 0;
        return 10000;
        break;
      case 4:
        argument = 0;
        return 10;
        break;
    }
  }

  function getRandomNumber() {
    /*let sum = (document.getElementById('sum') as HTMLInputElement).value;
    let quantity = (document.getElementById('quantity') as HTMLInputElement)
      .value;

    if (parseFloat(sum) == 0 || parseFloat(quantity) == 0) {
      throwError();
    } else if (parseFloat(sum) <= 0 || parseFloat(quantity) <= 0) {
      throwError();
    } else {
      let average: number = parseFloat(sum) / parseFloat(quantity);
      document.getElementById('result').innerText = average.toString();
    }*/
    let seed: number = getSeed();
    let randomNumber: number = parseInt(Math.random() * seed);
    document.getElementById('result4').innerText = randomNumber.toString();
  }

  return (
    <div className="form">
      <h1 className="section-title">GERAR NÚMERO ALEATÓRIO</h1>
      <a
        onClick={getRandomNumber}
        className="form-button pink darken-4 btn-small"
      >
        OBTER NÚMERO ALEATÓRIO
      </a>
      <div className="result-container">
        <span id="result4" className="result">
          00.00
        </span>
      </div>
    </div>
  );
}
