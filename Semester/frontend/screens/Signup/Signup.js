import React, { useState } from 'react';
import { View, TextInput, StyleSheet,TouchableOpacity,Text } from 'react-native';

const Signup = ({navigation}) => {
  const [personid, setPersonid] = useState('');
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Person ID"
        value={personid}
        onChangeText={(text) => setPersonid(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Verification')}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <Text>Note:</Text>
      <Text>*This page is only for Faculty</Text>
      <Text>*If you are a network Engineer please contact network Admin</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  button: {
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

export default Signup;
