import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddEmployeeForm from './screens/AddEmployeeForm';
import MainPage from './screens/MainPage';
import EmployeeList from './screens/EmployeeList';
import Employeedetail from './screens/Employeedetail';
import UpdateForm from './screens/UpdateForm';
import SalaryList from './screens/Salary/Salary';
import Salarycalculator from './screens/Salary/Salarycalculator';
import TotalSalary from './screens/Salary/TotalSalary';

export default function Navigation() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name=" "
          component={MainPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Employee_Form" component={AddEmployeeForm} />
        <Stack.Screen name="Employee_List" component={EmployeeList} />
        <Stack.Screen name="Employee_Details" component={Employeedetail} />
        <Stack.Screen name="Employee_Update" component={UpdateForm} />
        <Stack.Screen name="Salary_List" component={SalaryList} />
        <Stack.Screen name="Salary_Calculator" component={Salarycalculator} />
        <Stack.Screen name="Total_Salary" component={TotalSalary} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
