import logo from '../../logo.svg';
import './App.css';
import Intro from '../Intro';
import { Component } from 'react';
import { fetch } from 'whatwg-fetch';
import Series from '../../containers/Series';

class App extends Component {
  state = {
    series: []
  }

  
  // this is what state exactly does. when it changes it renders the component.
  // componentDidMount()  {
  //   const series = ["Game of Thrones", "Breaking Bad"];

  //   setTimeout(() => {
  //     this.setState({series});
  //   }, 7000);
  // }

  componentDidMount()  { 
    fetch('http://api.tvmaze.com/search/shows?q=Vikings')
    .then(response => response.json())
    .then(json => this.setState( {series: json}))
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">     
          <h1 className="App-title">Tv Series List</h1>                  
        </header>
        <Intro message="Here I Come!"/>        
        <Series />
      </div>
    );
  }
  
}

export default App;
