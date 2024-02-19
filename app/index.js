import { useState } from 'react';
import { View, ScrollView, SafeAreaView, Text } from 'react-native'
import {Stack, useRouter} from 'expo-router'
import {COLORS, icons, image, SIZES } from '../constants'
import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from '../components'


// "main": "expo-router/entry",

const Home = () => {
    //define router using 'useRouter' hook
    const router = useRouter();
    return (
        //Render a 'SafeAreaView' component w/ inline styles
        <SafeAreaView style={{flex:1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen options={{
                headerStyle: {backgroundColor: COLORS.lightWhite},
                headerShadowVisible: false,
                headerLeft: ()=> (
                    <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
                ),
                headerRight: ()=> (
                    <ScreenHeaderBtn iconUrl={icons.menu} dimension="100%" />
                ),
                headerTitle: "",
            }}

            />
            {/* render a 'ScrollView' component w/ props */}
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{flex: 1, padding: SIZES.medium}}>
            <Welcome />
            <Popularjobs />
            <Nearbyjobs/>

                
            </View>
            </ScrollView>
        </SafeAreaView>
       
    )
}

export default Home;