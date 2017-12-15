import React, { Component } from 'react';
import { Card, CardSection, Button, Input } from './common';

class LoginForm extends Component {
    state = { email: '', password: '' };

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        // these stuffs are passed as props
                        placeholder='user@gmail.com'
                        label='Email'
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })} //{email: email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        // these stuffs are passed as props
                        placeholder='password'
                        label='Password'
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                </CardSection>

                <CardSection>
                    <Button>
                        Log In
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;
