import Task from './components/Task';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.taskWreapper}>
        <Text style={styles.sectionTitle}>taken voor vandaag</Text>

          <View style={styles.items}>
            <Task  opdrachtText={"Task 1"}/>
            <Task opdrachtText={"Task 2"}/>
            <Task opdrachtText={"Task 3"}/>
          </View>
      </View>

      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.writeTaskWrapper}
      >
        <TextInput placeholder='write a task' style={styles.input} />
        <TouchableOpacity >
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
