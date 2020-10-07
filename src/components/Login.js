import React, {Component} from 'react';
import {Text, TextInput, View, Image, TouchableOpacity} from 'react-native';
import {styles} from './stylelogin';
export default class Login extends Component {
  render() {
    return (
      <View style={styles.view1}>
        <View style={styles.View2}>
          <View style={styles.view3}>
            <Image
              style={styles.image}
              source={require('./assets/progad.png')}
            />
          </View>
          <View>
            <Text style={styles.username}>Username</Text>
            <TextInput style={styles.textinput1} placeholder={'  username'} />
          </View>
          <View>
            <Text style={styles.password}>Password</Text>
            <TextInput style={styles.textinput1} placeholder={'  password'} />
          </View>
          <View>
            <TouchableOpacity
              style={styles.button1}
              onPress={() => alert('Anda telah login')}>
              <Text style={styles.login1}>Login</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => alert('Anda lupa password')}>
              <Text style={styles.textinput2}>Forgot your password?</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.view4}>
        
          <Text>Not registered?</Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('register')}>
            <Text style={styles.textinput3}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
