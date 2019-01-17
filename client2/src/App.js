import React, { Component } from 'react'
import { Main } from './components/editor'

class App extends Component {
  render() {
    return (
      <div className="App" style={{height: '100%', display: 'inline'}}>
        <Main />
      </div>
    );
  }
}

export default App;
