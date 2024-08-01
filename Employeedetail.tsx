import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import database from '@react-native-firebase/database';
import React, {useEffect, useState} from 'react';
import {useRoute, useNavigation, StackActions} from '@react-navigation/native';

export default function Employeedetail(props) {
  const route = useRoute();
  const {item} = props.route.params;

  const handledeleteemployee = async () => {
    try {
      const response = await database().ref(`EmployeeForm/${item.id}`).remove();

      props.navigation.navigate('Employee_List');
    } catch (error) {
      console.log(error);
    }
  };
const handleupdatedata= async(item)=>{
  props.navigation.navigate('Employee_Update',{item})
}


  return (
    <ScrollView style={styles.main}>
      <Text style={styles.text}>ID : {item.id}</Text>
      <Text style={styles.text}>Name : {item.name}</Text>
      <Text style={styles.text}>Father_Name : {item.Father_Name}</Text>
      <Text style={styles.text}>Age : {item.age}</Text>
      <Text style={styles.text}>Email : {item.email}</Text>
      <Text style={styles.text}>Phone_Number : {item.Phone_Number}</Text>
      <Text style={styles.text}>Address : {item.Address}</Text>
      <Text style={styles.text}>Destination : {item.Occupation}</Text>
      <Text style={styles.text}>Advance_Cash : {item.Advance_Cash}</Text>
      <Text style={styles.text}>Per_Day_Pay : {item.Per_Day_Pay}</Text>
      <Text style={styles.text}>Weekly_Pay : {item.Weekly_Pay}</Text>
      <Text style={styles.text}>Monthly_Pay : {item.Monthly_Pay}</Text>
      <View style={styles.buttonview}>
        <TouchableOpacity
          onPress={() => handleupdatedata(item)}>
          <Text style={styles.button}>Update</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handledeleteemployee()}>
          <Text style={styles.button}>Delete</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'black',
    margin: 10,
    padding: 20,
  },
  text: {
    color: '#ccc',
    fontSize: 25,
    borderBottomColor: '#ccc',
    borderBottomWidth: 2,
    margin: 8,
  },
  button: {
    color: '#fff',
    backgroundColor: 'blue',
    fontSize: 30,
    padding: 20,
    marginTop: 10,
    borderRadius: 30,
    elevation: 10,
    opacity: 1,
  },
  buttonview: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
});
