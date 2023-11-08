import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet,TouchableOpacity } from 'react-native';

const Login = ({navigation}) => {
  const [personIdOrEmail, setPersonIdOrEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Person ID/Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Person ID or Email"
        value={personIdOrEmail}
        onChangeText={(text) => setPersonIdOrEmail(text)}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        secureTextEntry={true} // Hide the text for the password field
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('')}>
        <Text style={styles.buttonText}>User</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('')}>
        <Text style={styles.buttonText}>Network Engineers</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button3} onPress={() => navigation.navigate('Homepage')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
  },
  button1: {
    backgroundColor: 'green', 
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  button2: {
    backgroundColor: 'red', 
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  button3: {
    backgroundColor: 'blue', 
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default Login;
