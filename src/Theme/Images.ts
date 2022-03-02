import { ThemeImages, ThemeVariables } from '@/Theme/theme.type'

/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */
export default function ({}: ThemeVariables): ThemeImages {
  return {
    logo: require('@/Assets/Images/TOM.png'),
    smallIcon: require('@/Assets/Images/ICON.png'),
    welcomeImage: require('@/Assets/Images/WELCOME.png'),
    backArrow: require('@/Assets/Images/DOWN.png'),
    eye: require('@/Assets/Images/EYE.png'),
    fingerprint: require('@/Assets/Images/FINGERPRINT.png'),
  }
}
