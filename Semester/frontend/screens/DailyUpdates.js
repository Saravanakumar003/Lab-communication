// DailyUpdates.js

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';

const DailyUpdates = ({ route,navigation }) => {
  const [dailyData, setDailyData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.29.176:3001/get-all-inquiries');
        const descriptions = response.data.map((item) => item.description).join('\n'); // Concatenate descriptions
        setDailyData(descriptions);
      } catch (error) {
        console.error('Error fetching daily data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Daily Updates</Text>
      <Text style={styles.description}>{dailyData}</Text>
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
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    padding: 10, // Add padding around the text
    borderWidth: 1, // Add a border
    borderColor: 'gray', // Border color
    borderRadius: 5, // Border radius
    color: 'darkslategray', // Darker text color
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'grey',
    marginTop:610
  },
 
  bottomNavText: {
    fontSize: 12,
    marginTop: 5, // Adjust this value to increase the distance between icon and label
    marginRight:30
  },
});

export default DailyUpdates;
