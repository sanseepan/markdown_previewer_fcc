import React, { Component } from 'react';
import Container from'./Components/Container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         Markdown previewer
        </header>
        <Container/>
      </div>
    );
  }
}

export default App;