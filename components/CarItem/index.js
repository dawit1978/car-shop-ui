import React from 'react'
import {View, Text,ImageBackground } from 'react-native'
import styles from './styles'
import StyledButton from '../StyledButton'

 const CarItem = (props) => {
  return (
    <View style={styles.carContainer}>

    <ImageBackground 
      source={require('../../assets/images/ModelX.jpeg')}
      style={styles.image}
     />

    <View style={styles.titles}>
      <Text style={styles.title}>Model S</Text>
      <Text style={styles.subtitle}>staring at $69.000</Text>
    </View>
     <StyledButton type='primary'
       content = {"CUSTOMER ORDER"}
       onPress={() => {
         console.warn("custom order pressed")
       }}
     />
      <StyledButton type='secondary'
       content = {"existing enventory"}
       onPress={() => {
         console.warn("existing enventory pressed")
       }}
     />
  </View>

  );
}
export default CarItem;
