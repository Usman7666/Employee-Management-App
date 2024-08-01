import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {StackActions, useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {addnewemployee} from '../redux/action';
import {useDispatch} from 'react-redux';
import database from '@react-native-firebase/database';
export default function AddEmployeeForm() {
  //Form Error
  const [nameerror,setnameerror]=useState(false);
  const [iderror,setiderror]=useState(false);
  const [fathernameerror,setfathernameerror]=useState(false);
  const [phoneerror,setphoneerror]=useState(false);


  const navigation = useNavigation();
  const [name, setname] = useState('');
  const [id, setid] = useState(0);
  const [fname, setfname] = useState('');
  const [age, setage] = useState('');
  const [email, setemail] = useState('');
  const [phone, setphone] = useState(0);
  const [adress, setadress] = useState('');
  const [occupation, setoccupation] = useState('');
  const [AdCash, setAdCash] = useState(0);
  const [perdaysal, setperdaysal] = useState(0);
  const [perweeksal, setperweeksal] = useState(0);
  const [permonthsal, setpermonthsal] = useState(0);

  const handleAddNewEmp = async () => {
    try {
      if(!name){
        setnameerror(true)
      }
      else{
        setnameerror(false)
      }
      if(!id){
        setiderror(true)
      }else{
        setiderror(false)
      }
      if(!fname){
        setfathernameerror(true)
      }else{
        setfathernameerror(false)
      }
      if(!phone){
        setphoneerror(true)
      }else{
        setphoneerror(false)
      }
      
      if(!name || !id || !fname || !phone){
        return false
      }
      const response = await database().ref(`EmployeeForm/${id}`).set({
        id: id,
        name: name,
        Father_Name: fname,
        age: age,
        email: email,
        Phone_Number: phone,
        Address: adress,
        Occupation: occupation,
        Advance_Cash: AdCash,
        Per_Day_Pay: perdaysal,
        Weekly_Pay: perweeksal,
        Monthly_Pay: permonthsal,
      });

      navigation.dispatch(StackActions.replace('Employee_List'));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView style={styles.main}>
      <View>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 30,
            fontWeight: 'bold',
            color: 'white',
          }}>
          Employee_Details
        </Text>
      </View>
      <View style={styles.viewstyle}>
        <Text style={styles.text}>ID</Text>
        <TextInput
          onChangeText={text => setid(text)}
          value={id}
          style={styles.textinput}
          placeholder="Enter ID"
        /> 
         {iderror?<Text style={{color:'red' ,fontSize:20}}> *Enter a valid ID</Text>:null}
      </View>
      <View style={styles.viewstyle}>
        <Text style={styles.text}>Name</Text>
        <TextInput
          onChangeText={text => setname(text)}
          value={name}
          style={styles.textinput}
          placeholder="Enter Name"
        />
         {nameerror?<Text style={{color:'red',fontSize:20}}> *Enter a valid name</Text>:null}
      </View>
      <View style={styles.viewstyle}>
        <Text style={styles.text}>Father_Name</Text>
        <TextInput
          onChangeText={text => setfname(text)}
          value={fname}
          style={styles.textinput}
          placeholder="Enter F_Name"
        />
        {fathernameerror?<Text style={{color:'red' ,fontSize:20}}> *Enter a valid Father_Name</Text>:null}
      </View>
      <View style={styles.viewstyle}>
        <Text style={styles.text}>Age</Text>
        <TextInput
          onChangeText={text => setage(text)}
          value={age}
          style={styles.textinput}
          placeholder="Enter F_Name"
        />
       
      </View>
      <View style={styles.viewstyle}>
        <Text style={styles.text}>Email</Text>
        <TextInput
          onChangeText={text => setemail(text)}
          value={email}
          style={styles.textinput}
          placeholder="Enter Email"
        />
        
      </View>
      <View style={styles.viewstyle}>
        <Text style={styles.text}>Phone_Number</Text>
        <TextInput
          onChangeText={text => setphone(text)}
          value={phone}
          style={styles.textinput}
          placeholder="Enter Phone_Number"
        />
        {phoneerror?<Text style={{color:'red' ,fontSize:20}}> *Enter a valid Phone_Number</Text>:null}
      </View>
      <View style={styles.viewstyle}>
        <Text style={styles.text}>Address</Text>
        <TextInput
          onChangeText={text => setadress(text)}
          value={adress}
          style={styles.textinput}
          placeholder="Enter Address"
        />
      </View>

      {/*Horizontal Line */}
      <View
        style={{borderBottomColor: 'black', borderWidth: 1, margin: 8}}></View>
      {/*Horizontal Line */}
      <View>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 30,
            fontWeight: 'bold',
            color: 'white',
          }}>
          For_Company_Details
        </Text>
      </View>

      {/* Company Details */}
      <View style={styles.viewstyle}>
        <Text style={styles.text}>Occupation</Text>
        <TextInput
          onChangeText={text => setoccupation(text)}
          value={occupation}
          style={styles.textinput}
          placeholder="Enter Occupation"
        />
      </View>
      <View style={styles.viewstyle}>
        <Text style={styles.text}>Advance Cash</Text>
        <TextInput
          onChangeText={text => setAdCash(text)}
          value={AdCash}
          style={styles.textinput}
          placeholder="Enter Advance"
        />
      </View>
      <View style={styles.viewstyle}>
        <Text style={styles.text}>Per_Day_Pay</Text>
        <TextInput
          onChangeText={text => setperdaysal(text)}
          value={perdaysal}
          style={styles.textinput}
          placeholder="Enter Pay"
        />
      </View>
      <View style={styles.viewstyle}>
        <Text style={styles.text}>Weekly_Pay</Text>
        <TextInput
          onChangeText={text => setperweeksal(text)}
          value={perweeksal}
          style={styles.textinput}
          placeholder="Enter Pay"
        />
      </View>
      <View style={styles.viewstyle}>
        <Text style={styles.text}>Monthly_Pay</Text>
        <TextInput
          onChangeText={text => setpermonthsal(text)}
          value={permonthsal}
          style={styles.textinput}
          placeholder="Enter Pay"
        />
      </View>

      <View>
        <TouchableOpacity onPress={handleAddNewEmp}>
          <Text style={styles.touchable}>ADD NEW EMPLOYEE</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    margin: 5,
    backgroundColor: 'black',
  },
  text: {
    color: '#ccc',
    fontSize: 25,
    fontWeight: '500',
  },
  textinput: {
    borderWidth: 1,
    borderColor: '#ccc',
    color: 'white',
    fontSize: 25,
  },
  viewstyle: {
    padding: 5,
    margin: 5,
  },
  touchable: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    margin: 15,
    backgroundColor: '#ccc',
    borderRadius: 30,
    padding: 20,
    elevation: 1,
    opacity: 10,
  },
});
