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
  
  // let counter = 0;
  // const day = date.format( new Date(), 'YYYY-MM-DD');

  // let pastDay = day.getDate() - counter;
  // day.setDate(pastDay);
  // console.log(day, pastday)

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
          return <Post key={new Date()} imageObject={img} />
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
