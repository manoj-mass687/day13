import React from 'react';

// create a simple functional component 

class Greet extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}



function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
} 

export default Greet;