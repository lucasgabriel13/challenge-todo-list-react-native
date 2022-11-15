import { ActivityIndicator, View } from 'react-native';
import { THEME } from '../../styles/theme';

import { styles } from './styles';

export function Loading() {

  const { COLORS } = THEME;

  return (
    <View style={styles.container}>
      <ActivityIndicator color={COLORS.BLUE_700} />
    </View>
  );
}