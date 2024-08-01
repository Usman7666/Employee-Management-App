import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  ScrollView,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import database from '@react-native-firebase/database';

const Salarycalculator = props => {
  const [dayswork, setdayswork] = useState(0);
  const [Overtimehours, setOvertimehours] = useState(0);
  const [Latetimehours, setLatetimehours] = useState(0);
  const [previousweekpay, setpreviousweekpay] = useState(0);
  const [Advance, setAdvance] = useState(0);
  const [Kharcha, setKharcha] = useState(0);
  const [Totalsalary, setTotalsalary] = useState(0);
  const [handemployee, sethandemployee] = useState(0);
  const [display, setdisplay] = useState(false);
  const {item} = props.route.params;

  
  const Pay = item.Per_Day_Pay * dayswork;
  const OverTime = 0.1 * Overtimehours * item.Per_Day_Pay;
  const After_Over_Time_Add = Pay + OverTime;
  const LateTime = Pay - 0.1 * item.Per_Day_Pay * Latetimehours + OverTime;
  const After_Deduction_Salary = previousweekpay - Kharcha - Advance;
  const Salary = LateTime + After_Deduction_Salary;
  const Total_Advance = handemployee - Totalsalary;
  const Remainig_Pay = Totalsalary - handemployee;

  const UploadEmployeeSalary = async () => {
    try {
      const response = await database().ref(`EmployeeForm/${item.id}`).update({
        Days_Work: dayswork,
        Pay: Pay,
        OverTime_Hour: Overtimehours,
        OverTime_Pay: OverTime,
        After_OverTime_Add: After_Over_Time_Add,
        Late_Time_Hours: Latetimehours,
        After_Late_Time_Deduction: LateTime,
        Previous_week_pay: previousweekpay,
        Advance: Advance,
        Kharcha: Kharcha,
        After_Deduction_Salary: Salary,
        Hand_Employee_Pay: handemployee,
        Total_Salary: Totalsalary,
        Total_Advance: Total_Advance,
        Remainig_Pay: Remainig_Pay,
      });
      props.navigation.navigate('Salary_List');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView>
      <View style={style.main}>
        <Text style={{fontSize: 30,color:'yellow'}}>Name : {item.name} </Text>
        <Text style={{fontSize: 30,color:'yellow'}}>F_Name : {item.Father_Name}</Text>
        <Text style={{fontSize: 25,color:'#ccc'}}>Calculate Pay</Text>
        <TextInput
          placeholder="Days Work"
          value={dayswork}
          onChangeText={text => setdayswork(text)}
          style={{borderWidth: 1, borderColor: '#ccc', fontSize: 25,color:'white'}}
        />
       <Button title='Generate Salary' color={'green'} onPress={()=>setdisplay(true)}/>
        {display ? (
          <Text style={{fontSize: 30,color:'#ccc'}}>Pay :{Pay}</Text>
        ) : (
          <Text style={{fontSize: 30,color:'#ccc'}}>Pay : {item.Per_Day_Pay}</Text>
        )}

        {/* Calculate OverTime */}
        <Text style={{fontSize: 25,color:'#ccc'}}>Calculate Overtime</Text>
        <TextInput
          placeholder="OverTime Hours"
          value={Overtimehours}
          onChangeText={text => setOvertimehours(text)}
          style={{borderWidth: 1, borderColor: '#ccc', fontSize: 25,color:'white'}}
        />
        {display ? (
          <Text style={{fontSize: 25,color:'#ccc'}}>OverTime Pay:{OverTime}</Text>
        ) : (
          <Text style={{fontSize: 25,color:'#ccc'}}>OverTime Pay : 0</Text>
        )}

        {/* Calculate LateTime */}
        <Text style={{fontSize: 25,color:'#ccc'}}>Calculate LateTime</Text>
        <TextInput
          placeholder="LateTime Hours"
          value={Latetimehours}
          onChangeText={text => setLatetimehours(text)}
          style={{borderWidth: 1, borderColor: '#ccc', fontSize: 25,color:'white'}}
        />
        {display ? (
          <Text style={{fontSize: 30,color:'#ccc'}}>
            After_LateTime Deduction:{LateTime}
          </Text>
        ) : (
          <Text style={{fontSize: 25,color:'#ccc'}}>
            After_LateTime Deduction : 0
          </Text>
        )}
        {/* Previous Week Pay */}
        <Text style={{fontSize: 25,color:'#ccc'}}>Previous_Week_Pay</Text>
        <TextInput
          placeholder="Enter Previous_Week_Pay"
          value={previousweekpay}
          onChangeText={text => setpreviousweekpay(text)}
          style={{borderWidth: 1, borderColor: '#ccc', fontSize: 25,color:'white'}}
        />

        {/*Advance*/}
        <Text style={{fontSize: 25,color:'#ccc'}}>Advance</Text>
        <TextInput
          placeholder="Enter Advance"
          value={Advance}
          onChangeText={text => setAdvance(text)}
          style={{borderWidth: 1, borderColor: '#ccc', fontSize: 25,color:'white'}}
        />
        {/*Kharcha*/}
        <Text style={{fontSize: 25,color:'#ccc'}}>Kharcha</Text>
        <TextInput
          placeholder="Enter Advance"
          value={Kharcha}
          onChangeText={text => setKharcha(text)}
          style={{borderWidth: 1, borderColor: '#ccc', fontSize: 25,color:'white'}}
        />

        {/* After Deductions Total Salary */}
        {display ? (
          <Text style={{fontSize: 25,color:'#ccc'}}>After_Deduction_Salary:{Salary}</Text>
        ) : (
          <Text style={{fontSize: 25,color:'#ccc'}}>After_Deduction_Salary : 0</Text>
        )}
        <Button
        color={'green'}
          title="Calculate Total Salary"
          onPress={() => setTotalsalary(Salary)}
        />
        {Totalsalary > 0 && display ? (
          <Text style={{fontSize: 30,color:'#ccc'}}>Total_Salary:{Salary}</Text>
        ) : (
          <Text style={{fontSize: 30,color:'#ccc'}}>Total_Salary : Salary is -</Text>
        )}

        {/* Hand Employee Pay */}
        <Text style={{fontSize: 25,color:'#ccc'}}>Hand Employee pay :</Text>
        <TextInput
          placeholder="Hand Employee"
          value={handemployee}
          onChangeText={text => sethandemployee(text)}
          style={{borderWidth: 1, borderColor: '#ccc', fontSize: 25,color:'white'}}
        />
        {/* Advance */}
        {Totalsalary < handemployee && display ? (
          <Text style={{fontSize: 30,color:'#ccc'}}>Advance:{Total_Advance}</Text>
        ) : (
          <Text style={{fontSize: 30,color:'#ccc'}}>Advance is : 0</Text>
        )}

        {/* Remainig Pay */}
        {Totalsalary > handemployee && display ? (
          <Text style={{fontSize: 30,color:'#ccc'}}>Remaining Pay:{Remainig_Pay}</Text>
        ) : (
          <Text style={{fontSize: 30,color:'#ccc'}}>Remainig Pay : 0</Text>
        )}

        <Button title="upload data" onPress={UploadEmployeeSalary} />
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  main:{
    backgroundColor:'black',
    flex:1
  },

})
export default Salarycalculator;
