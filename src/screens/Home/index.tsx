import { useEffect, useState } from 'react';
import { Alert, FlatList, TextInput, TouchableOpacity, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { Header } from "../../components/Header";
import { styles } from "./styles";
import { THEME } from "../../styles/theme";
import { Countdown } from "../../components/Countdown";
import { TodoCard } from "../../components/TodoCard";
import { ListEmpty } from "../../components/ListEmpty";

interface Task {
  id: number;
  title: string;
  concluded: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskInput, setTaskInput] = useState('');

  const { COLORS } = THEME;

  const taskCreated = tasks.length;
  const taskConcluded = tasks.filter(taks => taks.concluded === true).length;

  function handleCreateNewTask() {
    if (!taskInput) {
      Alert.alert('Criar nova tarefa', 'Você precisa digitar uma tarefa!');
      return;
    }

    const newTask = {
      id: new Date().getTime(),
      title: taskInput,
      concluded: false
    };

    setTasks(prevState => [...prevState, newTask]);
    setTaskInput('');
  }

  function handleDeleteTask(id: number) {
    setTasks(prevState => prevState.filter(taks => taks.id !== id));
  }



  function handleConcludedTask(id: number) {
    const prevTasks = tasks.map(task => {
      if (task.id !== id) {
        return task;
      }

      return {
        ...task,
        concluded: !task.concluded
      }
    });

    setTasks(prevTasks);
  }

  return (
    <>
      <Header />
      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            onChangeText={setTaskInput}
            value={taskInput}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={COLORS.GRAY_300}
          />
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            onPress={handleCreateNewTask}
          >
            <AntDesign name="pluscircleo" size={16} color={COLORS.GRAY_100} />
          </TouchableOpacity>
        </View>

        <View style={styles.heading}>
          <Countdown
            title="Criadas"
            value={taskCreated}
          />
          <Countdown
            title="Concluídas"
            value={taskConcluded}
            color="PURPLE"
          />
        </View>

        <FlatList
          data={tasks}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <TodoCard
              title={item.title}
              checked={item.concluded}
              onDeleteTask={() => handleDeleteTask(item.id)}
              onConcludedTask={() => handleConcludedTask(item.id)}
            />
          )}
          ListEmptyComponent={<ListEmpty />}
          style={{
            marginTop: 20
          }}
          showsHorizontalScrollIndicator={false}
        />

      </View>
    </>
  );
}