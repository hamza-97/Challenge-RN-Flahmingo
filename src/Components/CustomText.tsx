import React from 'react'
import { Text } from 'react-native'
import { useTheme } from '@/Hooks'
import { color } from 'react-native-reanimated'

interface Props {
  text?: string
  textStyle?: object
}

const CustomText = ({ text, textStyle }: Props) => {
  const { Fonts } = useTheme()
  return <Text style={[textStyle]}>{text}</Text>
}

CustomText.defaultProps = {
  text: 'Get Started',
  textStyle: {},
}

export default CustomText
