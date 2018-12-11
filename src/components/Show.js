import React, { Component } from 'react';
import * as firebase from 'firebase';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

export default class Dashboard extends Component {
    signOut() {
        firebase.auth().signOut();
    }
    render() {
        const style = {
            margin: 12,
          };
          const  container = {
            flex: 1,
            flexDirection: 'column',
            marginLeft:"50%"
        }
        return(
            <div> <AppBar
            title="Dashboard"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
          <br/><br/><br/><br/><br/>
          <div style={container}><RaisedButton label="LOGOUT" secondary={true} style={style} onClick={this.signOut.bind(this)} /></div>
          </div>
        )
    }
}