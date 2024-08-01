import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';

export default function MainPage(props) {
  return (
    <ImageBackground
      style={styles.backimg}
      source={require('../assets/Backgroundimg.png')}
      resizeMode="cover">
      <View style={styles.main}>
        <StatusBar hidden={true} />
        <Text style={styles.entname}>Enterprises</Text>
        <View style={styles.listview}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Employee_List')}>
            <Text style={styles.touchable}>Employee List</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.listview}>
          <TouchableOpacity
          onPress={()=>props.navigation.navigate('Salary_List')}>
            <Text style={styles.touchable}>Employee Salary List</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.addview}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Employee_Form')}>
            <Text style={styles.touchable}>Add New Employee</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  main: {
    marginVertical: 0,
    flex: 1,
  },
  backimg: {
    flex: 1,
    justifyContent: 'center',
  },
  entname: {
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#ccc',
    borderBottomWidth: 5,
    borderColor: '#ccc',
    backgroundColor: '#000000c0',
  },
  touchable: {
    fontSize: 35,
    color: '#fff',
    textAlign: 'center',
    margin: 15,
    backgroundColor: '#000000c0',
    borderRadius: 30,
    padding: 20,
    elevation: 1,
    opacity: 10,
  },
  listview: {
    flex: 1,
    justifyContent: 'center',
  },
  addview: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
