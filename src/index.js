import React from 'react';
import { render } from 'react-dom';

/*
Smart Component

class App extends React.Component {
  render() {
    return (
      <div>
        Hello
      <div>
    )
  }
}


! DO NOT USE !
Function Component

function App() {
  return (
    <div>
      Hello
    <div>
  )
}
*/

const App = () => (
  <div>
    Hello
  </div>
);

render(<App />, document.getElementById('root'));
