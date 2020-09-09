import React from 'react';
import logo from './logo.svg';
import './App.css';
import nasaLogo from './images/download.png'
import orbitLoad from './images/orbit-load.webp'

//redux
import { connect } from 'react-redux';

const handleClick = (evt) => {
  console.log(evt.target)
}


function App(props) {
  return (
    <div className={'page-wrapper'}>
      <header>
        <img src={nasaLogo} alt="nasa logo"/>
        <h1>+ gram = NASAgram</h1>
      </header>
      <img src={orbitLoad} alt="loading..."/>
      <h2>{props.subtitle}</h2>
      <button onClick={handleClick}>SEND IT</button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    subtitle: state.subtitle
  }
}

export default connect( mapStateToProps, {})(App);
