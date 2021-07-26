
import React from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <>
    
    <View style={styles.container}>
  
      <View style={styles.meio}>
        <TextInput></TextInput>

      </View>
  
    </View>
    
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    width: '100%',
    height: 50
    
    
  },
  meio:{
  
    width: '90%',
    minHeight: '90%',
    backgroundColor: 'grey',
  
    borderRadius: 10,
    marginTop: 10

  }
});
