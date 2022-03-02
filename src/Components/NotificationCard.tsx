import React from 'react'
import { View, Image, ImageSourcePropType } from 'react-native'
import { useTheme } from '@/Hooks'
import { CustomText } from '@/Components'

interface Props {
  icon?: ImageSourcePropType | undefined
  text?: string
}

const NotificationCard = ({ icon, text }: Props) => {
  const { Fonts, Layout, Gutters, Colors, Images } = useTheme()
  return (
    <View
      style={[
        Layout.row,
        Layout.alignItemsCenter,
        Gutters.largeLMargin,
        Gutters.largeTMargin,
      ]}
    >
      <Image source={icon} />
      <CustomText
        textStyle={[
          Fonts.CustomTextSmall,
          Gutters.regularLMargin,
          { color: Colors.text },
        ]}
        text={text}
      />
    </View>
  )
}

NotificationCard.defaultProps = {
  text: '',
}

export default NotificationCard
