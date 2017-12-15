import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
// should import our own stuffs at bottom
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    // null means we do not know if logged in
    // now loggedIn has 3 states: true, false, null
    state = { loggedIn: null };

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

    // helper for showing content for different states
    renderContent() {
        switch (this.state.loggedIn) {
            case true: 
                return (
                    <CardSection>
                        <Button onPress={() => firebase.auth().signOut()}>
                            Log Out
                        </Button>
                    </CardSection>
                );
            case false:
                return <LoginForm />;
            default:
                return <Spinner size='large' />;
        }
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
