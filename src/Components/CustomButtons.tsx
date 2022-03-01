import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { useTheme } from '@/Hooks'
import { color } from 'react-native-reanimated'
import { navigateAndSimpleReset } from '@/Navigators/utils'

interface Props {
  text?: string
  screenName?: string
}

const CustomButtons = ({ text, screenName }: Props) => {
  const { Common, Gutters, Fonts } = useTheme()
  return (
    <TouchableOpacity
      style={[
        Common.button.rounded,
        Gutters.extraLargeHPadding,
        Gutters.regularVPadding,
        Gutters.largeTMargin,
      ]}
      onPress={() => navigateAndSimpleReset(`${screenName}`)}
    >
      <Text style={[Fonts.buttonsText]}>{text}</Text>
    </TouchableOpacity>
  )
}

CustomButtons.defaultProps = {
  text: 'Get Started',
}

export default CustomButtons
