import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {CreateAppNavigation} from 'react-navigation';
import {CreateBottomNavigator} from 'react-navigation-tabs';
import {ReadStoryScreen} from './screens/ReadStoryScreen';
import {WriteStoryScreen} from './screens/WriteStoryScreen';


export default function App() {
  return ("hi"
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
