import React from 'react';
import { Text, View } from 'react-native';
import { THEME } from '../../styles/theme';

import { styles } from './styles';

interface CountdownProps {
  title: string;
  value: number;
  color?: 'BLUE' | 'PURPLE'
}

export function Countdown({ title, value, color = 'BLUE' }: CountdownProps) {
  return (
    <View style={styles.container}>
      <Text style={{
        fontFamily: THEME.FONT.BOLD,
        fontWeight: '700',
        fontSize: 14,
        color: THEME.COLORS[`${color}_500`]
      }} >
        {title}
      </Text>
      <Text style={styles.value} >
        {value}
      </Text>
    </View>
  );
}