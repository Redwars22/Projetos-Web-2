import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import HeaderComponent from './ui/components/header/header/header.component';
import FooterComponent from './ui/components/footer/footer/footer.component';
import Container from './ui/components/main/container/container.component';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
    };
  }

  render() {
    window.alert(
      'Esta é uma versão BETA e portanto pode conter bugs e os resultados apresentados podem ser inacurados!!!'
    );

    return (
      <div>
        <HeaderComponent />
        <Container />
        <FooterComponent />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
