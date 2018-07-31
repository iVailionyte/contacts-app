import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

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



render(<App />, document.getElementById('root'));
