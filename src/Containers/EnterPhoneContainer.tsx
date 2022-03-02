import { useTheme } from '@/Hooks'
import { navigateAndSimpleReset } from '@/Navigators/utils'
import React, { useEffect, useState, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
} from 'react-native'
import { useDispatch } from 'react-redux'
import { CustomButtons } from '@/Components'
import { CenterText } from '@/Components'
import OnboardingHeader from '@/Components/OnboardingHeader'

import PhoneInput from 'react-native-phone-number-input'

const EnterPhoneContainer = () => {
  const [value, setValue] = useState('')

  const phoneInput = useRef<PhoneInput>(null)
  const { t } = useTranslation()
  const { Common, Fonts, Colors, Gutters, Layout, Images } = useTheme()

  return (
    <SafeAreaView style={[Layout.fill, Common.backgroundStart]}>
      <OnboardingHeader
        prev={'Home'}
        next={'Verify'}
        text={'Next'}
        progress={0.2}
      />
      <CenterText
        textStyle={[Fonts.textExtraSmall, Gutters.extraLargeTPadding]}
        text="Step 1/7"
      />

      <CenterText
        textStyle={[
          Gutters.extraLargeHPadding,
          Gutters.regularVPadding,
          Fonts.textRegular3,
        ]}
        text="Let’s start with your mobile number"
      />
      <CenterText
        textStyle={[Gutters.tinyVPadding, Fonts.textSmall]}
        text="Number we can use to reach you"
      />
      <View style={[Layout.center, Gutters.largeVPadding]}>
        <PhoneInput
          ref={phoneInput}
          defaultValue={value}
          defaultCode="CA"
          layout="first"
          onChangeText={text => {
            setValue(text)
          }}
          withDarkTheme
          withShadow
          autoFocus
          containerStyle={[Gutters.extraLargeBMargin, { borderRadius: 10 }]}
          textContainerStyle={{
            borderRadius: 10,
            backgroundColor: Colors.white,
          }}
        />
        <CustomButtons text="Verify Now" screenName="Verify" param={value} />
      </View>
    </SafeAreaView>
  )
}

export default EnterPhoneContainer
