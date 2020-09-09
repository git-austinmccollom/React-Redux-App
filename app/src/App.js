import React from 'react';
import logo from './logo.svg';
import './App.css';

//redux
import { connect } from 'react-redux';


function App(props) {
  return (
    <div className={'page-wrapper'}>
      <h1>Nasagram</h1>
      <h2>{props.subtitle}</h2>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    subtitle: state.subtitle
  }
}

export default connect( mapStateToProps, {})(App);
