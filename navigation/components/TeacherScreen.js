
import React, {useState, useEffect} from "react";
import axios from 'axios'
import { Button, View, Text,StyleSheet, TextInput } from "react-native";

export default function HomeScreen({ navigation }) {
  const [data, setData] = useState([]);
  const [update, setUpdate] = useState([])
  const fetch = () => {
    console.log('sami')
    axios.get('http://127.0.0.1:8000/teacher/lsit-create')
    .then((res) => setData(res.data))
    .catch(err => console.log(err))
  }
  useEffect(() => {
    fetch()
  },[])
  const des = (id) => {
    axios.delete(`http://127.0.0.1:8000/teacher/update-delete/${id}`)
    fetch()
  }
  const add=(Id)=>{ 
    axios.post('http://127.0.0.1:8000/teacher/lsit-create',{name:fName})  
    .then((res)=> {alert('New Teacher is added Successfully');fetchData();}) 
     
    .catch((err)=>alert('Failed')) 
  } 
  const updateData=(Id)=>{ 
    axios.post(`http://127.0.0.1:8000/teacher/update-delete/${Id}`,{name:fName})  
    .then((res)=> {alert('Updated Successfully');
    fetchData();}) 
    .catch((err)=>alert('Failed')) 
  }
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" , backgroundColor: '#CBE4F9'}}>
      <Text>Teacher Screen</Text>
      {data.map((item) => { 
        return (
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" , backgroundColor: '#CBE4F9'}}>
            <Text>{item.id}</Text>
            <Text>{item.fName}</Text>
            <Text>{item.dept}</Text>
            <Text>{item.salary}</Text>
            <Button 
            title="Delete"
             onPress={() => des(item.id)}
            />
            <View>
                  <input  onChange={(e)=>setUpdate(e.target.value)} type='text'/>
                  <button onClick={()=>(updateData)}>update</button>
            </View>
          </View>

        )
      })}
      <Button
        title="Go to Employee"
        onPress={() => navigation.navigate("Employee")}
      />
      
      <Button
        title="Go to Student"
        onPress={() => navigation.navigate("Student")}
      />
    
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: '#CBE4F9',
    alignItems: 'center',
    justifyContent: 'center',
  },
})