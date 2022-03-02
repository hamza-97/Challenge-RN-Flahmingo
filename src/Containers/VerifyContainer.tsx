import { useTheme } from '@/Hooks'
import { navigateAndSimpleReset } from '@/Navigators/utils'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { SafeAreaView, StyleSheet, View, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'
import { CustomButtons } from '@/Components'
import { CenterText } from '@/Components'
import OnboardingHeader from '@/Components/OnboardingHeader'

import OTPInputView from '@twotalltotems/react-native-otp-input'

const VerifyContainer = props => {
  const [code, setCode] = useState('')

  const { t } = useTranslation()
  const { Common, Fonts, Colors, Gutters, Layout, Images } = useTheme()
  useEffect(() => {
    console.log(props)
  }, [])
  return (
    <SafeAreaView style={[Layout.fill, Common.backgroundStart]}>
      <OnboardingHeader
        prev={'EnterPhone'}
        next={'EnterPassword'}
        text={'Next'}
        progress={0.4}
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
        text="Verify your number"
      />
      <CenterText
        textStyle={[Gutters.tinyVPadding, Fonts.textSmall]}
        text={`Wel’ll text you on ${props.route.params}.`}
      />
      <OTPInputView
        style={{ width: '80%', height: 100, alignSelf: 'center' }}
        pinCount={4}
        code={code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
        onCodeChanged={code => {
          setCode(code)
        }}
        autoFocusOnLoad
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
      />
      <TouchableOpacity>
        <CenterText
          textStyle={[
            Gutters.largeVPadding,
            Fonts.textSmallBold,
            { color: Colors.purple },
          ]}
          text="Send me a new code"
        />
      </TouchableOpacity>
      <View style={[Layout.center]}>
        <CustomButtons text="Verify Now" screenName="EnterPassword" />
      </View>
    </SafeAreaView>
  )
}

export default VerifyContainer
const styles = StyleSheet.create({
  underlineStyleBase: {
    width: 40,
    height: 40,
    borderRadius: 200,
    borderWidth: 0,
    color: 'black',
    fontSize: 36,
    fontWeight: '500',
    borderBottomColor: 'black',
    backgroundColor: '#E1DDF5',
  },

  underlineStyleHighLighted: {
    borderColor: 'black',
    color: 'black',
  },
})
