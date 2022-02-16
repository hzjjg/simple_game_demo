import React, { Component } from 'react';
import { render } from 'react-dom';
import Start from './views/Start/index';
import Condition from './views/Condition/index';
import './style.css';

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
    return <Condition />;
  }
}

render(<App />, document.getElementById('root'));
