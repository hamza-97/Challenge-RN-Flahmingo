import { useTheme } from '@/Hooks'
import { navigateAndSimpleReset } from '@/Navigators/utils'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { SafeAreaView, View, Image } from 'react-native'
import { useDispatch } from 'react-redux'
import {
  CustomButtons,
  CenterText,
  NotificationCard,
  HorizontalLine,
} from '@/Components'
import OnboardingHeader from '@/Components/OnboardingHeader'

const EnableNotificationContainer = () => {
  const { t } = useTranslation()
  const { Common, Fonts, Colors, Gutters, Layout, Images } = useTheme()

  return (
    <SafeAreaView style={[Layout.fill, Common.backgroundStart]}>
      <OnboardingHeader
        prev={'Fingerprint'}
        next={'SetWeight'}
        text={'Skip'}
        progress={0.8}
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
        text="Do you want to turn on notification?"
      />
      <Image
        style={[Layout.selfCenter, Gutters.largeTMargin]}
        source={Images.notification}
      />
      <NotificationCard icon={Images.reminderIcon} text="New weekly reminder" />
      <HorizontalLine />
      <NotificationCard
        icon={Images.stockReminderIcon}
        text="Stocks reminder"
      />
      <HorizontalLine />
      <NotificationCard
        icon={Images.personalisedIcon}
        text="Personalised program"
      />
      <View style={[Layout.center, Gutters.LargeTMargin]}>
        <CustomButtons text="Allow" screenName="EnableNotification" />
      </View>
    </SafeAreaView>
  )
}

export default EnableNotificationContainer
