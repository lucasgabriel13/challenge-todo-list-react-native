import { THEME } from './../../styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: THEME.COLORS.GRAY_400,
    paddingTop: 68,
  },
  image: {
    width: 56,
    height: 56
  },
  title: {
    marginTop: 16,
    fontFamily: THEME.FONT.BOLD,
    fontWeight: '700',
    fontSize: 14,
    color: THEME.COLORS.GRAY_300
  },
  subtitle: {
    fontFamily: THEME.FONT.REGULAR,
    fontWeight: '400',
    fontSize: 14,
    color: THEME.COLORS.GRAY_300
  },

});