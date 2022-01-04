import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import HeaderContainer from './ui/header/header-container/header-container.component';
import GameLibrary from './ui/section/game-library/game-library.component';

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
    return (
      <>
        <HeaderContainer />
        <GameLibrary />
      </>
    );
  }
}

render(<App />, document.getElementById('root'));
