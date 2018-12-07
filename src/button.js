import React from 'react';

import { GenericContext } from './settings/context.js';

class Clicker extends React.Component {
  render() {
    return (
      <GenericContext.Consumer>
        {context => {
          return (
            <div>
              <button onClick={() => context.changeColorTo()}>Color(button.js)</button>
            </div>
          );
        }}
      </GenericContext.Consumer>
    );
  }
}

export default Clicker;
