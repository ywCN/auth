import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button } from './components/common'; // should import our own stuffs at bottom
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: false };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyBBQ5HG9QpXI6wLBaAMAV9KeAS4Qc0e0ZQ',
            authDomain: 'auth-a21c9.firebaseapp.com',
            databaseURL: 'https://auth-a21c9.firebaseio.com',
            projectId: 'auth-a21c9',
            storageBucket: 'auth-a21c9.appspot.com',
            messagingSenderId: '857751852568'
          });

        // handles either signin and signout
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    // helper for showing content
    renderContent() {
        if (this.state.loggedIn) {
            return (
                <Button>
                    Log Out
                </Button>
            );
        }
        
        return <LoginForm />;
    }

    render() {
        return (
            <View>
                <Header headerText='Auth' />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
