import * as React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function Homepage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>MCA DEPARTMENT</Text>

      <View style={styles.centeredContent}>
        <Text style={styles.text1}>Recent Daily Updates</Text>

        <TouchableOpacity style={styles.buttonWrapper} onPress={() => navigation.navigate('DailyUpdates')}>
          <Text style={styles.buttonText}>View all</Text>
          <Text style={styles.update}>No Daily Updates</Text>
        </TouchableOpacity>

        <Text style={styles.text2}>Your Recent Enquiries</Text>

        <TouchableOpacity style={styles.buttonWrapper} onPress={() => navigation.navigate('DailyUpdates')}>
          <Text style={styles.buttonText}>View all</Text>
          <Text style={styles.update}>No Recent Inquiries</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button3} onPress={() => navigation.navigate('MyInquiry')}>
        <Text style={styles.buttonText1}>Add Inquiry</Text>
      </TouchableOpacity>
      </View>
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
          <Text style={styles.bottomNavText}>All Inquiries</Text>
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
}

export default Homepage;

const styles = StyleSheet.create({
  buttonText1: {
    color: 'white'
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  centeredContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  buttonText: {
    color: 'blue',
    fontSize: 18,
    marginTop: 15, // Adjust this value to position "View all" outside the box
  },
  text1: {
    fontSize: 20,
    marginTop: 20,
  },
  text2: {
    fontSize: 20,
    marginTop: 20,
  },
  buttonWrapper: {
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 5,
    margin: 10,
    padding: 10,
  },
  update: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
  },
  button3: {
    backgroundColor: 'blue',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'grey',
  },
 
  bottomNavText: {
    fontSize: 12,
    marginTop: 5, // Adjust this value to increase the distance between icon and label
    marginRight:28
  },
});
