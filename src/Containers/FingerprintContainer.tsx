import { useTheme } from '@/Hooks'
import { navigateAndSimpleReset } from '@/Navigators/utils'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native'
import { useDispatch } from 'react-redux'
import { CustomButtons } from '@/Components'
import { CenterText } from '@/Components'
import OnboardingHeader from '@/Components/OnboardingHeader'

const FingerprintContainer = () => {
  const { t } = useTranslation()
  const { Common, Fonts, Colors, Gutters, Layout, Images } = useTheme()

  return (
    <SafeAreaView style={[Layout.fill, Common.backgroundStart]}>
      <OnboardingHeader
        prev={'EnterPassword'}
        next={'ProfilePicture'}
        text={'Skip'}
        progress={0.8}
      />
      <Image
        style={[Layout.selfCenter, Gutters.extraLargeTMargin]}
        source={Images.fingerprint}
      />

      <CenterText
        textStyle={[
          Fonts.textExtraSmall,
          Gutters.extraLargeTPadding,
          { color: Colors.purple },
        ]}
        text="Step 1/7"
      />
      <CenterText
        textStyle={[
          Gutters.extraLargeHPadding,
          Gutters.regularVPadding,
          Fonts.textRegular3,
        ]}
        text="Enable Fingerprint"
      />

      <CenterText
        textStyle={[
          Gutters.extraLargeHPadding,
          Fonts.textSmall,
          { color: Colors.subHeadingText },
        ]}
        text="If you enable touch ID, you don’t need to enter your password when you login. "
      />
      <View style={[Layout.center, Gutters.extraLargeTMargin]}>
        <CustomButtons text="Activate" screenName="Fingerprint" />
      </View>
    </SafeAreaView>
  )
}

export default FingerprintContainer
