import { Stack } from 'expo-router'
import { useCallback } from 'react'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

//Prevent splash screen from hiding automatically
SplashScreen.preventAutoHideAsync()

const Layout = () => {
  //Load fonts using useFonts hook
  const [fontsLoaded] = useFonts({
    DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
    DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
    DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
  })
  //define callback fx to be invoked when layout changes
  const onLayoutRootView = useCallback(async () => {
    //if fonts are loaded, hide them behind the splash screen
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) return null
  return <Stack onLayout={onLayoutRootView} />
}

export default Layout
