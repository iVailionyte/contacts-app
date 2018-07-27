import React from 'react';
import { render } from 'react-dom';
import Contacts from './components/Contacts';

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
    <Contacts />
  </div>
);

render(<App />, document.getElementById('root'));
