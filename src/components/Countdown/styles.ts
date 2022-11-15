import { StyleSheet } from 'react-native';
import { THEME } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  value: {
    fontFamily: THEME.FONT.BOLD,
    fontWeight: '700',
    fontSize: 12,
    color: THEME.COLORS.GRAY_200,
    backgroundColor: THEME.COLORS.GRAY_400,
    width: 25,
    height: 19,
    textAlign: 'center',
    borderRadius: 999,
    marginLeft: 8
  }
});