import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { Button, Card, CardSection } from './common';

class LoginForm extends Component {
    state = { text:'' };
    render() {
        return (
            <Card>

                <CardSection>
                    <TextInput 
                        value={this.state.text}
                        onChangeText={text => this.state({ text })}
                    />
                </CardSection>

                <CardSection>
                    <TextInput />
                </CardSection>

                <CardSection>
                    <Button>
                        Login
                </Button>
                </CardSection>

            </Card>
        );
    }
}

export default LoginForm;