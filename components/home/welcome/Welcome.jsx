import React from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native'
import { useState } from 'react'
import { useRouter } from 'expo-router'
import styles from './welcome.style'
import { icons, SIZES } from '../../../constants'

// Define different types of job in an array
const jobTypes = ['Full-time', 'Part-time', 'Contractor']

const Welcome = () => {
  //define router
  const router = useRouter()
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
          {/* Input field for searching */}
          <TextInput
            style={styles.searchInput}
            value=""
            onChange={() => {}}
            placeholder="What are you looking for?"
          />
        </View>
        {/* Responsive component containing an image for search button */}

        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      {/* Display job types using a FlatList */}
      {/* Each job type is a touchable element */}
      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <Text>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  )
}

export default Welcome
