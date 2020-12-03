// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Popchart from './components/Popchart'

class App extends React.Component{
  render(){
    return(
      <div className='container'>
        <Popchart />
      </div>
    )
  }
}

export default App;
