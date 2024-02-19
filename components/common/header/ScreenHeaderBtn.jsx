import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity, Image } from 'react-native'
import styles from './screenheader.style'

//define functional component w/ props
const ScreenHeaderBtn = ({iconUrl, dimension, handlePress}) => {
  return (
    //render 'TouchableOpacity' w/ onPress handler 
   <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
    <Image source={iconUrl} resizeMode='cover' style={styles.btnImg(dimension)}/>
   </TouchableOpacity>
  )
}

export default ScreenHeaderBtn