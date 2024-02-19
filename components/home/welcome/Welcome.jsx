import React from 'react'
import { 
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
  } from 'react-native'
import { useState } from 'react'
import {useRouter} from 'expo-router'
import styles from './welcome.style'
import {icons, SIZES} from "../../../constants"

const Welcome = () => {
  //define router
  const router = useRouter();
  return (
    <View>
    {/* First inner View component */}
    <View style={styles.container}>
    <Text style={styles.userName}>Hello Juwan</Text>
    <Text style={styles.welcomeMessage}>Find your perfect job</Text>
    </View>
    {/* Second inner View component */}
    <View style={styles.searchContainer}>
    <View style={styles.searchWrapper}>
      <TextInput style={styles.searchInput}/>
    </View>

    </View>
    </View>
  )
}

export default Welcome