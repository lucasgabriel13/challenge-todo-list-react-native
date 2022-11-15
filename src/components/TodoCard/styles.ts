import { THEME } from './../../styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 64,
    backgroundColor: THEME.COLORS.GRAY_500,
    borderWidth: 1,
    borderColor: THEME.COLORS.GRAY_400,
    borderRadius: 8,
    paddingLeft: 12,
    paddingRight: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8
  },
  title: {
    maxWidth: 220,
    overflow: 'hidden',
    fontFamily: THEME.FONT.REGULAR,
    fontSize: 14,
    fontWeight: '400',
    color: THEME.COLORS.GRAY_100,
    marginHorizontal: 8
  },
  delete: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  }
});