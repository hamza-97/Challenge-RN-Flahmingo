import { StyleSheet } from 'react-native'
import { ThemeCommonParams } from '@/Theme/theme.type'

export default function ({ Colors, Gutters, Layout }: ThemeCommonParams) {
  const base = {
    ...Layout.center,
    width: 250,
    height: 56,
    backgroundColor: Colors.pink,
  }
  const rounded = {
    ...base,
    borderRadius: 16,
  }

  return StyleSheet.create({
    base,
    rounded,
    outline: {
      ...base,
      backgroundColor: Colors.pink,
      borderWidth: 2,
      borderColor: Colors.primary,
    },
    outlineRounded: {
      ...rounded,
      backgroundColor: Colors.pink,
      borderWidth: 2,
      borderColor: Colors.primary,
    },
  })
}
