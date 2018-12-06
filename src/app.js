import React from 'react';
import GenericContext from './settings/context.js';
import Content from './content.js';
import Clicker from './button.js';

class App extends React.Component {
  render() {
    return (
      <GenericContext>
        <Content />
        <Clicker />
      </GenericContext>
    );
  }
}

export default App;
