import { StyleSheet } from 'react-native';
import { THEME } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.GRAY_600,
    paddingHorizontal: 24,
  },
  form: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: -27,
  },
  input: {
    width: 271,
    height: 54,
    backgroundColor: THEME.COLORS.GRAY_500,
    borderRadius: 6,
    padding: 16,
    color: THEME.COLORS.GRAY_100,
    fontFamily: THEME.FONT.REGULAR,
    fontSize: 16,
  },
  button: {
    width: 52,
    height: 52,
    backgroundColor: THEME.COLORS.BLUE_700,
    borderRadius: 6,
    marginLeft: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    flexDirection: 'row',
    marginTop: 32,
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});