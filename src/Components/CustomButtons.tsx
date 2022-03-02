import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { useTheme } from '@/Hooks'
import { color } from 'react-native-reanimated'
import { navigate } from '@/Navigators/utils'

interface Props {
  text?: string
  screenName?: string
  param?: string
}

const CustomButtons = ({ text, screenName, param }: Props) => {
  const { Common, Gutters, Fonts } = useTheme()
  return (
    <TouchableOpacity
      style={[
        Common.button.rounded,
        Gutters.extraLargeHPadding,
        Gutters.regularVPadding,
        Gutters.largeTMargin,
      ]}
      onPress={() => navigate(`${screenName}`, param)}
    >
      <Text style={[Fonts.buttonsText]}>{text}</Text>
    </TouchableOpacity>
  )
}

CustomButtons.defaultProps = {
  text: 'Get Started',
  screeName: '',
  param: '',
}

export default CustomButtons
