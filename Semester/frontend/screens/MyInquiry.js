import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';

const MyInquiry = ({ navigation }) => {
  const [issueType, setIssueType] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [inquiries, setInquiries] = useState([]);

  const issueTypes = [
    { label: 'Select Issue Type', value: '' },
    { label: 'Server Issue', value: 'Server Issue' },
    { label: 'Internet Slow', value: 'Internet Slow' },
    // Add more issue types
  ];

  const locations = [
    { label: 'Select Location', value: '' },
    { label: 'MCA LAB', value: 'MCA LAB' },
    { label: 'RVS LAB', value: 'RVS LAB' },
    // Add more locations
  ];

  const handleCreateInquiry = () => {
    if (!issueType || !location || !description) {
      alert('Please fill in all fields');
      return;
    }

    // Send inquiry data to your Node.js server
    axios
      .post('http://192.168.29.176:3001/create-inquiry', {
        issueType,
        location,
        description,
      })
      .then((response) => {
        console.log('Inquiry created:', response.data);
        const inquiries = response.data.inquiries;

        alert('Inquiry created successfully');

        // Update the local state with the updated list of inquiries
        setInquiries(inquiries);
      })
      .catch((error) => {
        console.error('Error creating inquiry:', error);
        alert('Failed to create inquiry');
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>ADD INQUIRY</Text>
      <Text style={styles.label}>Issue Type</Text>
      <Picker
        selectedValue={issueType}
        onValueChange={(itemValue) => setIssueType(itemValue)}>
        {issueTypes.map((item) => (
          <Picker.Item key={item.value} label={item.label} value={item.value} />
        ))}
      </Picker>

      <Text style={styles.label}>Location</Text>
      <Picker
        selectedValue={location}
        onValueChange={(itemValue) => setLocation(itemValue)}>
        {locations.map((item) => (
          <Picker.Item key={item.value} label={item.label} value={item.value} />
        ))}
      </Picker>

      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter Description"
        value={description}
        onChangeText={(text) => setDescription(text)}
        multiline={true}
      />

      <TouchableOpacity
        style={[styles.button, { backgroundColor: !issueType || !location || !description ? 'gray' : '#007BFF' }]}
        disabled={!issueType || !location || !description}
        onPress={handleCreateInquiry}
      >
        <Text style={styles.buttonText}>Create Inquiry</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button3} onPress={() => navigation.navigate('InquiryList')}>
        <Text style={styles.buttonText}>All Inquiries</Text>
      </TouchableOpacity>
      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('Homepage')}>
          <Icon name="home" size={30} color="blue" />
          <Text style={styles.bottomNavText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('MyInquiry')}>
          <Icon name="search" size={30} color="lightgreen" />
          <Text style={styles.bottomNavText}>My Inquiry</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('InquiryList')}>
          <Icon name="bell" size={30} color="red" />
          <Text style={styles.bottomNavText}>AllInquiries</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavItem}onPress={() => navigation.navigate('DailyUpdates')}>
          <Icon name="bell" size={30} color="red" />
          <Text style={styles.bottomNavText}>DailyUpdates</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('User')}>
          <Icon name="user" size={30} color="blue" />
          <Text style={styles.bottomNavText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  button3: {
    backgroundColor: 'blue',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
    height: 100, // Increase the height for the description input
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'grey',
    marginTop:330
  },
 
  bottomNavText: {
    fontSize: 12,
    marginTop: 5, // Adjust this value to increase the distance between icon and label
    marginRight:28
  },
});

export default MyInquiry;
