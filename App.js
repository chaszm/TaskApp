
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View, Keyboard, ScrollView } from 'react-native';
import Task from './Components/Task';
import { AntDesign } from '@expo/vector-icons';


export default function App() {
    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);

    const handleAddTask = () => {
        Keyboard.dismiss();
        setTaskItems([...taskItems, task])
        setTask(null);
    }

    const completeTask = (index) => {
        let itemsCopy = [...taskItems];
        itemsCopy.splice(index, 1);
        setTaskItems(itemsCopy)
    }

  return (
    <View style={styles.container}>

          <View style={styles.taskWrap}>
              <Text style={styles.sectionTitle}>
                  Today's Tasks:

              </Text>



              <View style={styles.items}>
                  {
                      taskItems.map((item, index) => {
                          return (
                              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                                  <Task text={item} />
                              </TouchableOpacity>
                          )
                      })

                  }
                
              </View>

                 



          </View>

          <KeyboardAvoidingView behavior={Platform === "ios" ? "padding" : "height"}
              style={styles.taskWrapper}>

              <TextInput style={styles.input} placeholder={"Enter Task"} value={task } onChangeText={text => setTask(text)} />

              <TouchableOpacity onPress={() => handleAddTask() }>

                  <View >
                      <Text style={styles.addText}>

                          <AntDesign name="pluscircleo" size={30} color="black" />

                      </Text>
                  </View>


              </TouchableOpacity>


              </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    },


    taskWrap: {
        paddingTop: 80,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    items: {
        marginTop: 30,
    },
    taskWrapper: {
        position: 'absolute',
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',

    },
    input: {
        paddingVertical: 15,
        width: 250,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth:1,


    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,


    },
    addText: {

    },
});
