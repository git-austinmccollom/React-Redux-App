import React from 'react';
import logo from './logo.svg';
import './App.css';
import nasaLogo from './images/download.png'
import orbitLoad from './images/orbit-load.webp'

//redux
import { connect } from 'react-redux';

//actions
import { sendIt } from './actions/actions'

//components
import Post from './components/Post';


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
      {
        props.images.map( (img) => {
          return <Post content={img} />
        })
      }
      <button onClick={handleClick}>SEND IT</button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    isFetching: state.isFetching,
    images: state.images
  }
}

export default connect( mapStateToProps, { sendIt })(App);
