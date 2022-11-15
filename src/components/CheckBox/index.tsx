import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';

import { styles } from './styles';
import { THEME } from '../../styles/theme';

interface CheckBoxProps extends TouchableOpacityProps {
  checked?: boolean;
}

export function CheckBox({ checked = false, ...rest }: CheckBoxProps) {

  const { COLORS } = THEME;

  return (
    <TouchableOpacity style={styles.container} {...rest}>
      {checked ? (
        <AntDesign name="checkcircle" size={18} color={COLORS.PURPLE_500} style={{
          backgroundColor: COLORS.GRAY_100,
          borderRadius: 999
        }} />
      ) : (
        <Feather name="circle" size={18} color={COLORS.BLUE_500} />
      )}
    </TouchableOpacity>
  );
}