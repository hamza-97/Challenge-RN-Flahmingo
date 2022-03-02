import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import WelcomeContainer from '@/Containers/WelcomeContainer'
import EnterPhoneContainer from '@/Containers/EnterPhoneContainer'
import VerifyContainer from '@/Containers/VerifyContainer'
import EnterPasswordContainer from '@/Containers/EnterPasswordContainer'
import FingerprintContainer from '@/Containers/FingerprintContainer'

const Stack = createStackNavigator()

// @refresh reset
const OnboardingNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={WelcomeContainer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EnterPhone"
        component={EnterPhoneContainer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Verify"
        component={VerifyContainer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EnterPassword"
        component={EnterPasswordContainer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Fingerprint"
        component={FingerprintContainer}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default OnboardingNavigator
