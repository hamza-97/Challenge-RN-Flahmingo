import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { WelcomeContainer } from '@/Containers'

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
    </Stack.Navigator>
  )
}

export default OnboardingNavigator
