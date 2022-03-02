import { useTheme } from '@/Hooks'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
} from 'react-native'
import { useDispatch } from 'react-redux'
import { CustomButtons } from '@/Components'
import { CenterText } from '@/Components'
import OnboardingHeader from '@/Components/OnboardingHeader'
import PasswordGuideLineCard from '@/Components/PasswordGuideLineCard'

import ProgressBar from 'react-native-progress/Bar'

const EnterPasswordContainer = () => {
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(true)
  const [strength, setStrength] = useState(0)
  const guideLines = 4
  const { t } = useTranslation()
  const { Common, Fonts, Colors, Gutters, Layout, Images } = useTheme()

  return (
    <SafeAreaView style={[Layout.fill, Common.backgroundStart]}>
      <OnboardingHeader
        prev={'Verify'}
        next={'Fingerprint'}
        text={'Next'}
        progress={0.6}
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
        text="Set your password"
      />
      <TextInput
        style={styles.inputStyle}
        keyboardType="default"
        secureTextEntry={showPassword}
        returnKeyType="next"
        onChangeText={text => setPassword(text)}
      />
      <TouchableOpacity
        style={{ position: 'absolute', right: 40, top: 175 }}
        onPress={() => setShowPassword(!showPassword)}
      >
        <Image source={Images.eye} />
      </TouchableOpacity>
      <View style={[Layout.row, Gutters.largeHMargin, Gutters.smallVPadding]}>
        {[...Array(guideLines)].map((elem, index) => (
          <ProgressBar
            progress={0}
            width={80}
            color={Colors.passwordStrength}
            borderWidth={0}
            unfilledColor={Colors.lightPurple}
            style={{ borderRadius: 20 }}
          />
        ))}
      </View>

      <View style={[Layout.row, Layout.justifyContentBetween]}>
        <PasswordGuideLineCard text1="• 8+ characters" text2="• 1 symbol" />
        <PasswordGuideLineCard text1="• 1 upercase" text2="• 1 number" />
      </View>
      <View style={[Layout.center]}>
        <CustomButtons text="Continue" screenName="Fingerprint" />
      </View>
    </SafeAreaView>
  )
}

export default EnterPasswordContainer
const styles = StyleSheet.create({
  inputStyle: {
    marginHorizontal: 30,
    paddingHorizontal: 10,
    borderRadius: 16,
    color: 'black',
    fontSize: 30,
    backgroundColor: 'white',
    shadowColor: 'gray',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.6,
    shadowRadius: 1,
    elevation: 8,
    height: 60,
    textAlign: 'center',
  },
})
