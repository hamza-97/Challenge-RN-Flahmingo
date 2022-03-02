import React from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import { useTheme } from '@/Hooks'
import { color } from 'react-native-reanimated'

import { navigate, navigateGoBack } from '@/Navigators/utils'

import ProgressBar from 'react-native-progress/Bar'

interface Props {
  text?: string
  prev?: string
  next?: string
  progress?: number
}

const OnboardingHeader = ({ text, prev, next, progress }: Props) => {
  const { Fonts, Layout, Gutters, Colors, Images } = useTheme()
  return (
    <View
      style={[
        Layout.row,
        Layout.justifyContentBetween,
        Layout.alignItemsCenter,
        Gutters.smallHMargin,
      ]}
    >
      <TouchableOpacity onPress={() => navigateGoBack(`${prev}`)}>
        <Image source={Images.backArrow} />
      </TouchableOpacity>

      <ProgressBar
        progress={progress}
        width={200}
        color={Colors.pink}
        borderWidth={0}
        unfilledColor={Colors.lightPurple}
        style={{ borderRadius: 20 }}
      />
      <TouchableOpacity onPress={() => navigate(`${next}`)}>
        <Text style={[Fonts.textSmallBold]}>{text}</Text>
      </TouchableOpacity>
    </View>
  )
}

OnboardingHeader.defaultProps = {
  text: 'Get Started',
  textStyle: {},
  next: '',
  prev: '',
  prgress: 0,
}

export default OnboardingHeader
