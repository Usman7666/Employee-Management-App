import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
const TotalSalary = (props) => {

  const {item} = props.route.params
 console.log(item.Remainig_Pay)
  return (
    <ScrollView style={styles.main}>
      <Text style={styles.text}>ID : {item.id}</Text>
      <Text style={styles.text}>Name : {item.name}</Text>
      <Text style={styles.text}>Father_Name : {item.Father_Name}</Text>
      <Text style={styles.text}>Per_Day_Pay : {item.Per_Day_Pay}</Text>
      <Text style={styles.text}>Days Work : {item.Days_Work}</Text>
      <Text style={styles.text}>Pay : {item.Pay}</Text>
      <Text style={styles.text}>Over_Time_Hours : {item.OverTime_Hour}</Text>
      <Text style={styles.text}>After_Over_Time_Add : {item.After_OverTime_Add}</Text>
      <Text style={styles.text}>Late_Time_Hours : {item.Late_Time_Hours}</Text>
      <Text style={styles.text}>After_Late_Time_Deduction : {item.After_Late_Time_Deduction}</Text>
      <Text style={styles.text}>Previous_Week_Pay : {item.Previous_week_pay}</Text>
      <Text style={styles.text}>Advance : {item.Advance}</Text>
      <Text style={styles.text}>Kharcha : {item.Kharcha}</Text>
      <Text style={styles.text}>After_Deduction_Salary : {item.After_Deduction_Salary}</Text>
      <Text style={styles.text1}>Total_Salary : {item.Total_Salary}</Text>
      <Text style={styles.text1}>Hand_Employee_Pay : {item.Hand_Employee_Pay}</Text>
     {/* Advance */}
     {item.Total_Salary<item.Hand_Employee_Pay? (
          <Text style={styles.text1}>
            Advance:{item.Total_Advance}
          </Text>
        ) : (
          <Text style={styles.text1}>Advance is : 0</Text>
        )}
 {/* Remaining Pay */}
 {item.Total_Salary>item.Hand_Employee_Pay? (
          <Text style={styles.text1}>
            Remaining Pay :{item.Remainig_Pay}
          </Text>
        ) : (
          <Text style={styles.text1}>Remainig Pay : 0</Text>
        )}
       
    </ScrollView>
  )
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
  },
  text1:{
    fontSize:30,
    color:'skyblue'
  }
})

export default TotalSalary