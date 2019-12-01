import React, {Component} from 'react';
import './App.css';
import Pokecard from './Pokecard';

class App extends Component{
  render() {
    return (
      <div className="App">
        <h1><Pokecard id={4} name="Charmander" type="fire" exp={62}/></h1>
      </div>
    );
  }
}

export default App;
