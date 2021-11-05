import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, TextInput, FlatList, Alert } from 'react-native';

export default function App() {



const [item, setItem] = useState('');
const [data, setData] = useState([]);


const addHandler = () => {
  setData([...data, { key: item}]);
  setItem('')
}

const deleteAll = () => {
  setData([]);
}

  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <Text style={styles.whiteTxt}> Shopping list </Text>
      </View>

      <View style={styles.body}>
        <TextInput 
          onChangeText={item => setItem(item)}
          style={styles.input} 
          placeholder="Add item"
          value={item}
          >
        </TextInput>

        {/* <View style={styles.add}>
          <Pressable onPress={add}> 
            <Text style={styles.add}>Add</Text>
          </Pressable>
        </View> */}

        <View style={styles.clear}>
        <Pressable onPress={addHandler}>
            <Text style={styles.add}>Add</Text>
          </Pressable>

          <Pressable onPress={deleteAll}>
            <Text style={styles.clearTxt}>Clear all</Text>
          </Pressable>
          {/* <Button title="Clear all" color="black" onPress={clear}>Clear</Button> */}
        </View>

        <FlatList style={styles.list}
          keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={{justifyContent: 'center', alignItems:"center", marginTop: 20,}}
            data={data}
            renderItem={({ item }) =>
              <Text>{item.key}</Text>
            }
            />

      </View>

      <View style={styles.footer}>
        <Text style={{ color: 'white', fontStyle:"italic"}}> by Sami Niskanen </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  
  },

  header:{
    flex: 0.2,
    width:"100%",
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },

  body:{
    flex: 1,
    padding:20,  
    justifyContent: 'center',  
  },

  footer:{
    flex: 0.2,
    backgroundColor:"black", 
    width:"100%",
    height:"auto",
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    minWidth: "50%",
  },

  whiteTxt: {
    color: '#fff',
    marginTop: 20,
  
  },

  buttonStyle:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 40,
  },

  clear: {
    alignItems: 'center',
    marginTop: 40,
    justifyContent: 'center',
  },

  clearTxt:{
    backgroundColor: '#E69EAB',
    color: 'black',
    width: 200,
    padding: 20,
    textAlign: 'center',
    fontWeight: "bold",
  },

  add:{
    backgroundColor: '#C4E9C9',
    color: 'black',
    width: 200,
    padding: 20,
    textAlign: 'center',
    fontWeight: "bold",
  }


});
