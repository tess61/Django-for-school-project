import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import TeacherScreen from './components/TeacherScreen';
import StudentScreen from './components/StudentScreen';
import EmployeeScreen from './components/EmployeeScreen'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Teacher' component={TeacherScreen}></Stack.Screen>
        <Stack.Screen name='Student' component={StudentScreen}></Stack.Screen>
        <Stack.Screen name='Employee' component={EmployeeScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CBE4F9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
