import Task from './components/Task';
import {useState} from 'react'
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [task , setTask] = useState();
  const [taskItems , setTaskItems] = useState([]);

  const handleAddTask = () => {
    setTaskItems([...taskItems,task])
    setTask(null);
  }

  return (
    <View style={styles.container}>
      <View style={styles.taskWreapper}>
        <Text style={styles.sectionTitle}>taken voor vandaag</Text>

          <View style={styles.items}>
            {
              taskItems.map((item,idx) => )
            }
            
          </View>
      </View>

      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.writeTaskWrapper}
      >
        <TextInput placeholder='write a task' style={styles.input} value={task} onChange={text => setTask(text)}/>
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>

      </KeyboardAvoidingView>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  taskWreapper:{
    padding:80,
    paddingHorizontal:20
  },
  sectionTitle:{
    fontWeight:'bold',
    fontSize:24

  },
  items:{
    marginTop:30,
  },
  writeTaskWrapper:{
   position:'absolute',
   bottom:60,
   width:'100%',
   flexDirection:'row',
   justifyContent:'space-around',
   alignItems:'center'
   
  },
  input:{
    paddingVertical:15,
    paddingHorizontal:15,
    backgroundColor:"#FFF",
    borderRadius:60,
    borderColor:"#C0C0C0",
    borderWidth:1,
    width:250
    
    
  },
  addWrapper:{
    width:60,
    height:60,
    backgroundColor:'#FFF',
    borderRadius:60,
    justifyContent:'center',
    alignContent:'center',
    borderColor:"#C0C0C0",
    borderWidth:1,
    
  },
  addText:{
    marginLeft:24
  },

});
