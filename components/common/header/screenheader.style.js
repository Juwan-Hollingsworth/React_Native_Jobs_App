import { StyleSheet } from 'react-native'

import { COLORS, SIZES } from '../../../constants'

const styles = StyleSheet.create({
  btnContainer: {
    width: 60,
    height: 50,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small / 1.25,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 16,
  },
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
    borderRadius: SIZES.small / 1.25,
  }),
})

export default styles
