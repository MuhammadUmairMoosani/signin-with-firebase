import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import RaisedButton from 'material-ui/RaisedButton';
import SignIn from './components/signIn';
import SignUp from './components/signUp';
import Dashboard from './components/Show';
import * as firebase from 'firebase';

class App extends Component {
  constructor() {
    super();
    this.state = {
      changeUi: false,
    }
  }
  render() {
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser) {
        if(this.state.changeUi != true) {
             this.state.changeUi = true;
           this.setState({changeUi:this.state.changeUi});
        }
          
          console.log("i am true of the main function");
      } else {
                if(this.state.changeUi != false) {
                    this.state.changeUi = false;
                   this.setState({changeUi:false});
                }
        
        console.log("i am false of the main function");
      }
  })
    const style = {
      margin: 12,
    };
    const marTop = {
      marginTop: 200,
    }
     if(this.state.changeUi === false) {
       return(
      <Router>
      <div className="App" style={marTop}>
        
          <Link to="/signin"><RaisedButton label="SignIn" secondary={true} style={style} /></Link>
          <Link to="/signup"><RaisedButton label="SignUp" secondary={true} style={style} /></Link>
        
        <Route exact path="/signin" component={SignIn}/>
        <Route path="/signup" component={SignUp}/>
      </div>
      </Router>
       )} else if(this.state.changeUi === true) {
         return(
           <div><Dashboard/></div>
         )
       }
    
  }
}

export default App;
