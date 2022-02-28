import React from 'react'
import { Text } from 'react-native'
import { useTheme } from '@/Hooks'
import { color } from 'react-native-reanimated'

interface Props {
  text?: string
  textStyle?: object
}

const CenterText = ({ text, textStyle }: Props) => {
  const { Fonts } = useTheme()
  return <Text style={[Fonts.textCenter, textStyle]}>{text}</Text>
}

CenterText.defaultProps = {
  text: 'Get Started',
  textStyle: {},
}

export default CenterText
