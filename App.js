import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getItems, addItem, updateItem, deleteItem } from './Service';

import Home from './src/componentes/home';
import Add from './src/componentes/add';
import Edit from './src/componentes/edit.js';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Add" component={Add} />
        <Stack.Screen name="Edit" component={Edit} />
  

      </Stack.Navigator>
    </NavigationContainer>
  );
}
