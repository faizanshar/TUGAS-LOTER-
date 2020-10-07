import React, {Component} from 'react';
import {ActivityIndicator, Image, Text, View} from 'react-native';
import Indux from './indux';
import Login from './Login';

export default class Splash extends Component {
  constructor() {
    super();
    (this.componentDidMount = function () {
      console.log(' Console Log Ini Dari componentDidMount');
      setTimeout(() => {
        this.setState({
          role: false,
        });
      }, 2000);
      
    }),
      (this.componentDidUpdate = function () {
        console.log(' Console Log Ini Dari componentDidUpdate');
      });
  }

  state = {
    role: true,
  };

  splash = () => {
    // if (this.state.role) {
    return (
      <View
        style={{
          height: '100%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        <Image
          source={require('./assets/progad.png')}
          style={{height: 300, width: 300}}
        />
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
    // }\
  };

  render() {
    if (this.state.role) {
      return <View style={{flex: 1}}>{this.splash()}</View>;
    } else {
      return <Indux />;
    }
  }
}
