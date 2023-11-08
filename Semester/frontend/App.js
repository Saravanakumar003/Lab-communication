import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createNativeStackNavigator();
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Firstpage from './screens/firstpage';
import Signup from './screens/Signup/Signup';
import Verification from './screens/Signup/Verification';
import Login from './screens/Login';
import Homepage from './screens/Homepage';
import MyInquiry from './screens/MyInquiry';
import DailyUpdates from './screens/DailyUpdates';
import Inquiries from './screens/InquiryList';


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="firstpage">
      <Stack.Screen 
          name="Firstpage"
          component={Firstpage}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Signup"
          component={Signup}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Verification"
          component={Verification}
          options={{headerShown: false}}
        />
         <Stack.Screen 
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
         <Stack.Screen 
          name="Homepage"
          component={Homepage}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="MyInquiry"
          component={MyInquiry}
          options={{headerShown: false}}
        />
         <Stack.Screen 
          name="DailyUpdates"
          component={DailyUpdates}
          options={{headerShown: false}}
        />
         <Stack.Screen 
          name="InquiryList"
          component={Inquiries}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
     
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
