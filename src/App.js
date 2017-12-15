import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common'; // should import our own stuffs at bottom
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyBBQ5HG9QpXI6wLBaAMAV9KeAS4Qc0e0ZQ',
            authDomain: 'auth-a21c9.firebaseapp.com',
            databaseURL: 'https://auth-a21c9.firebaseio.com',
            projectId: 'auth-a21c9',
            storageBucket: 'auth-a21c9.appspot.com',
            messagingSenderId: '857751852568'
          });
    }

    render() {
        return (
            <View>
                <Header headerText='Auth' />
                <LoginForm />
            </View>
        );
    }
}

export default App;
