import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

import { styles } from './styles';
import { THEME } from '../../styles/theme';
import { CheckBox } from '../CheckBox';

interface TodoCardProps {
  title: string;
  checked?: boolean;
  onDeleteTask: () => void;
  onConcludedTask: () => void;
}

export function TodoCard({ title, checked = false, onDeleteTask, onConcludedTask }: TodoCardProps) {
  return (
    <View style={styles.container}>
      <CheckBox
        checked={checked}
        onPress={onConcludedTask}
      />
      <Text style={[styles.title, checked && {
        textDecorationLine: 'line-through'
      }]}>
        {title}
      </Text>
      <TouchableOpacity style={styles.delete} onPress={onDeleteTask}>
        <Feather name="trash-2" color={THEME.COLORS.GRAY_300} size={16} />
      </TouchableOpacity>
    </View>
  );
}