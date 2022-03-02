import React from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import { useTheme } from '@/Hooks'
import { color } from 'react-native-reanimated'

import { CustomText } from '@/Components'

interface Props {
  text1?: string
  text2?: string
}

const PasswordGuideLineCard = ({ text1, text2 }: Props) => {
  const { Fonts, Layout, Gutters, Colors, Images } = useTheme()
  return (
    <View style={[Gutters.largeHPadding, Gutters.largeVPadding]}>
      <CustomText
        textStyle={[
          Fonts.CustomTextSmall,
          Gutters.smallVPadding,
          { color: Colors.subHeadingText },
        ]}
        text={text1}
      />
      <CustomText
        textStyle={[
          Fonts.textSmall,
          Gutters.tinyVPadding,
          { color: Colors.subHeadingText },
        ]}
        text={text2}
      />
    </View>
  )
}

PasswordGuideLineCard.defaultProps = {
  text1: '',
  text2: '',
}

export default PasswordGuideLineCard
