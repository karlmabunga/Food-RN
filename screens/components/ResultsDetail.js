import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ResultsDetail = ({ result }) => {
  return (
  <View>
    <Text>{result.name}</Text>
  </View>
  );
};

export default ResultsDetail;