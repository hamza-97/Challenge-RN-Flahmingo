import { useTheme } from '@/Hooks'
import { navigateAndSimpleReset } from '@/Navigators/utils'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Text, Image, ScrollView, View, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'
import { CustomButtons } from '@/Components'
import { CenterText } from '@/Components'

const WelcomeContainer = () => {
  const { t } = useTranslation()
  const { Common, Fonts, Colors, Gutters, Layout, Images } = useTheme()

  return (
    <ScrollView
      style={[Layout.fill, Common.backgroundStart]}
      contentContainerStyle={[Layout.colVCenter, Gutters.extraLargeVPadding]}
    >
      <Image source={Images.smallIcon} />
      <View style={[Gutters.largeVPadding]}>
        <CenterText textStyle={Fonts.textRegular3} text="Welcome to" />
        <CenterText
          textStyle={[Fonts.textRegular3, { color: Colors.purple }]}
          text="Flahmingo"
        />
      </View>
      <CenterText
        textStyle={[
          Gutters.extraLargeHPadding,
          Fonts.textRegular,
          { color: Colors.subHeadingText },
        ]}
        text="The best UI Kit for your next health and fitness project!"
      />
      <Image source={Images.welcomeImage} />
      <CustomButtons text="Get Started" screenName={'Main'} />
      <TouchableOpacity style={[Layout.rowCenter, Gutters.largeTMargin]}>
        <CenterText
          textStyle={Fonts.textSmall}
          text="Already have an account? "
        />
        <CenterText
          textStyle={[Fonts.textSmall, { color: Colors.purple }]}
          text="Sign in"
        />
      </TouchableOpacity>
    </ScrollView>
  )
}

export default WelcomeContainer
