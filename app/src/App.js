import React from 'react';
import logo from './logo.svg';
import './App.css';
import nasaLogo from './images/download.png'
import orbitLoad from './images/orbit-load.webp'

//redux
import { connect } from 'react-redux';

//actions
import { sendIt } from './actions/actions'

function App(props) {
  
  const handleClick = (evt) => {
    console.log(evt.target)
    props.sendIt();
  }
  return (
    <div className={'page-wrapper'}>
      <header>
        <img src={nasaLogo} alt="nasa logo"/>
        <h1>+ gram = NASAgram</h1>
      </header>
      { props.isFetching ? <img src={orbitLoad} alt="loading..."/> : null }
      <button onClick={handleClick}>SEND IT</button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    isFetching: state.isFetching
  }
}

export default connect( mapStateToProps, { sendIt })(App);
