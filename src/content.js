import React from 'react';

import { GenericContext } from './settings/context.js';

class Content extends React.Component {
  render() {
    return (
      <GenericContext.Consumer>
        {context => {
          let styles = {
            color: context.color
          };
          return (
            <div>
              <h1 style={styles}>{context.number}</h1>
              <button onClick={() => context.changeNumberTo()}>
                Number(content.js)
              </button>
              <button onClick={() => context.changeColorTo()}>Color(content.js)</button>
            </div>
          );
        }}
      </GenericContext.Consumer>
    );
  }
}

export default Content;
