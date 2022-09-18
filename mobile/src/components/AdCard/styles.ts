import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: 220,
    backgroundColor: THEME.COLORS.SHAPE,
    borderRadius: 8,
    padding: 24,
    marginRight: 16,
    alignItems: 'center'
  },
  button: {
    width: '100%',
    height: 36,
    borderRadius: 6,
    backgroundColor: THEME.COLORS.PRIMARY,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonLabel: {
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    fontsize: THEME.FONT_SIZE.SM,
    marginLeft: 8
  }
});