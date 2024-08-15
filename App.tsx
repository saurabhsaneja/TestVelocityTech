import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Welcome from './src/screens/Welcome';
import Categories from './src/screens/Categories';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { getFont } from './src/helpers';

const Tab = createBottomTabNavigator();


export default function App() {
  const screenOptions = {
    showLabel: false,
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: styles.navigatorStyle,
  };
  return (
    <NavigationContainer>
      <Tab.Navigator backBehavior="history" screenOptions={screenOptions}>
        <Tab.Screen name="Categories" component={Categories} options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabStyle}>
              <Text style={[styles.text, focused ? { color: 'orange' } : null]}>Categories</Text>
            </View>
          ),
        }} />
        <Tab.Screen name="Welcome" component={Welcome} options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabStyle}>
              <Text style={[styles.text, focused ? { color: 'orange' } : null]}>Welcome</Text>
            </View>
          ),
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  navigatorStyle: {
    height: Platform.OS === 'android' ? 70 : 50,
    alignItems: 'center',
  },
  tabStyle: {
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'black',
    fontFamily: getFont('Regular')
  }
});

