import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import * as firebase from 'firebase';

export default class SignIn extends Component {
    constructor() {
        super();
        this.state = {
            signInText: "",
            SignInPass: ""
        }
    }
    textchange(text) {
       this.setState({signInText:text})
    }
    passchange(text) {
       this.setState({SignInPass:text})
    }
    onButtonClick() {
       const auth = firebase.auth();
       const email = this.state.signInText;
       const password = this.state.SignInPass;
       const promise = auth.signInWithEmailAndPassword(email,password);
       promise.catch(e => alert(e.message));
       firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser) {
            console.log("logged in");
        } else {
            console.log('not logged in');
        }
    })
    }
    render() {
        const style = {
            margin: 12,
          };
        return(
            <div>
                 <TextField
      hintText="Email Address"
      floatingLabelText="Email Address"
      onChange={(text) => {this.textchange(text.target.value)}}
    />
      <br />
      <TextField
      hintText="Password Field"
      floatingLabelText="Password"
      type="password"
      onChange={(text) => {this.passchange(text.target.value)}}
    /><br />
    <RaisedButton label="Sign In" primary={true} style={style} onClick={this.onButtonClick.bind(this)}/>
            </div>
        )
    } 
}