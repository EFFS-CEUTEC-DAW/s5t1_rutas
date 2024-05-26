import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons';
import 'react-native-gesture-handler';

// Imports Propios
import RegistroContext from './GlobalContext';
import Home from './Home';
import Agenda from './Agenda';
import ViewContact from './ViewContact';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Navegation( { navigation } ) {
  const [registros, setRegistros] = useState([]);

  return (
    <RegistroContext.Provider value={{ registros, setRegistros }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Tabs">
          <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </RegistroContext.Provider>
  )
}

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} 
        options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
            <MaterialIcons name='home' color='grey' size={20} />
          ),
        tabBarActiveTintColor: '#000000',
        }} />
      <Tab.Screen name="Formulario" component={Agenda}  
        options={{
        tabBarLabel: 'Formulario',
        tabBarIcon: ({ color, size }) => (
            <MaterialIcons name='feed' color='grey' size={20} />
          ),
        tabBarActiveTintColor: '#000000',
        }} />
      <Tab.Screen name="ViewContact" component={ViewContact} 
        options={{
        tabBarLabel: 'Contact',
        tabBarIcon: ({ color, size }) => (
            <MaterialIcons name='format-list-numbered' color='grey' size={20} />
          ),
        tabBarActiveTintColor: '#000000',
        }} />
    </Tab.Navigator>
  );
};