import React from 'react';
import { Image, Text, View } from 'react-native';

import clipboardImg from '../../assets/clipboard.png';

import { styles } from './styles';

export function ListEmpty() {
  return (
    <View style={styles.container}>
      <Image source={clipboardImg} style={styles.image} />
      <Text style={styles.title}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={styles.subtitle}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
}