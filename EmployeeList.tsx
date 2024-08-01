import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ImageBackground
} from 'react-native';
import React, {useEffect, useState} from 'react';

import database  from '@react-native-firebase/database';


export default function EmployeeList(props) {


  
  const handleemployeedetail = item => {
    props.navigation.navigate('Employee_Details', {item});
  };
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
  return (
    <ImageBackground source={require('../assets/HR-Tech-startups.png')}
    resizeMode='cover'
      style={styles.backimg}>

    <View style={{flex:1,flexWrap:'wrap'}}>
      <Text style={{fontSize: 30}}> Total No of Employee : </Text>
      <FlatList
        data={list}
        renderItem={item => {
    
          if (item.item !== null) {
            return (
              <TouchableOpacity
                style={styles.items}
                onPress={() => handleemployeedetail(item.item)}
                >
                <Text style={styles.itemtext}>{item.item.name}</Text>
              </TouchableOpacity>
            );
          }
        }}
  
      />
    </View>
    </ImageBackground>
  );
}


const styles = StyleSheet.create({
  items: {
    backgroundColor: 'white',
    height: 60,
    margin: 10,
    borderRadius: 40,
    elevation: 1,
    opacity: 10,
    flex:1,
    alignItems:'center',
  },
  itemtext: {
    marginLeft: 20,
    fontSize: 40,
    color:'black'
  },
  backimg: {
    flex:1,
    justifyContent: 'center',
  },
});
