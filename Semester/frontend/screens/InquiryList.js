import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList,TouchableOpacity } from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';

const AllInquiries = ({navigation}) => {
  const [inquiries, setInquiries] = useState([]);

  useEffect(() => {
    const fetchInquiries = async () => {
      try {
        // Fetch all inquiries
        const response = await axios.get('http://192.168.29.176:3001/get-all-inquiries');
        const inquiries = response.data;
        setInquiries(inquiries);
      } catch (error) {
        console.error('Error fetching inquiries:', error);
      }
    };

    fetchInquiries();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>All Inquiries</Text>
      <FlatList
        data={inquiries}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.inquiryBox}>
            <Text style={styles.inquiryText}>Issue Type: {item.issueType}</Text>
            <Text style={styles.inquiryText}>Location: {item.location}</Text>
            <Text style={styles.inquiryText}>Description: {item.description}</Text>
          </View>
        )}
      />
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
  inquiryBox: {
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  inquiryText: {
    fontSize: 16,
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'grey',
    marginTop:30
  },
 
  bottomNavText: {
    fontSize: 12,
    marginTop: 5, // Adjust this value to increase the distance between icon and label
    marginRight:28
  },
});

export default AllInquiries;
