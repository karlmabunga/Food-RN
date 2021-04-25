import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResultsShowScreen = ({ navigation }) => {
  const id = navigation.getParam('id');

  return (
    <>
      <Text>Results Show Screen</Text>
    </>
  );
};

const styles = StyleSheet.create({});

export default ResultsShowScreen;