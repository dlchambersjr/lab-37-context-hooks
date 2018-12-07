import React from 'react';

export const GenericContext = React.createContext();

class GenericProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 5,
      color: 'orange',
      changeNumberTo: this.changeNumberTo,
      changeColorTo: this.changeColorTo
    };
  }

  changeNumberTo = () => this.setState({ number: Math.random() });

  changeColorTo = color => {
    color = `#${((Math.random() * 0xffffff) << 0).toString(16)}`;
    console.log(color);
    this.setState({ color });
  };

  render() {
    return (
      <GenericContext.Provider value={this.state}>
        {this.props.children}
      </GenericContext.Provider>
    );
  }
}

export default GenericProvider;
