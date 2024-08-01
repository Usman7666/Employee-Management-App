import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ImageBackground,
  Button,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import database, {firebase} from '@react-native-firebase/database';
const SalaryList = (props) => {
  const [list, setlist] = useState(null);
  useEffect(() => {
    EmployeeList();
  }, []);
  const EmployeeList = async () => {
    try {
      const data = await database()
        .ref('EmployeeForm')
        .on('value', tempdata => {
          setlist(tempdata.val());
        });
      console.log(data);
    } catch (error) {
      console.warn(error);
    }
  };

  const handlecalculator = (item)=>{
    props.navigation.navigate('Salary_Calculator',{item})
  }

  const handleSalary = (item)=>{
    props.navigation.navigate('Total_Salary',{item})
  }
  return (
    <ImageBackground
      source={require('../Salary/assets/Salaryback.png')}
      resizeMode="cover"
      style={styles.backimg}>
      <View style={{flex: 1}}>
        <Text style={{fontSize: 30}}> Total No of Employee : </Text>
        <FlatList
          data={list}
          renderItem={item => {
            if (item.item !== null) {
              return (
                <View style={styles.items}>
                  <Text style={styles.itemtext}>{item.item.name}</Text>
                  <TouchableOpacity style={styles.button} onPress={()=>handlecalculator(item.item)}>
                    <Text style={styles.buttontext1}>Calculate Salary</Text>
                  </TouchableOpacity >
                  <TouchableOpacity style={styles.button} onPress={()=>handleSalary(item.item)}>
                    <Text style={styles.buttontext}>Salary</Text>
                  </TouchableOpacity>
                </View>
              );
            }
          }}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  items: {
    backgroundColor: '#000000c0',
    height: 70,
    margin: 5,
    borderRadius: 10,
    elevation: 1,
    opacity: 10,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  itemtext: {
    marginVertical: 10,
    alignItems: 'center',
    fontSize: 30,
    color: '#fff',
    margin: 10,
  },
  backimg: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    borderWidth: 3,
    borderColor: 'green',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 10,
  },
  buttontext: {
    color: '#fff',
    fontSize: 30,
  },
  buttontext1: {
    fontSize: 20,
    color: '#fff',
  },
});

export default SalaryList;
