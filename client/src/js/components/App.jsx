import React from 'react';
import Component from './Component';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: "Ready to go",
    };
  }

  componentDidMount() {
  }

  render() {
    const { greeting } = this.state;
    return (
      <div className="grid">
        <header>
          <h1>{greeting}</h1>
        </header>
        <Component />
      </div>
    );
  }
}

export default App;
