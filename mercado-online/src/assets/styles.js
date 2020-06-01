import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const colorOne = "#851DE0";
const colorTwo = "#AA26DA";
const colorThree = "#C355F5";
const colorFour = "#F1FA3C";

const styles = StyleSheet.create({

  //container general
  container: {
    flex: 1,
    backgroundColor: colorOne,
    alignItems: 'center',
    justifyContent: 'center',
  },

  //text logo
  logo: {
    width: "70%",
    color: colorFour,
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center"
  },

  //login form box
  loginBox: {
    padding: 10,
    width: "70%",
    height: 220,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: colorOne,
    //shadow
    shadowOffset: { width: 10, height: 10 },
    shadowColor: 'black',
    shadowOpacity: 1,
    elevation: 3,
    // background color must be set
    // backgroundColor: "#0000" // invisible color
  },

  //login input
  inputOne: {
    width: "90%",
    height: 50,
    fontSize: 20,
    borderBottomWidth: 2,
    borderBottomColor: colorFour,
  },

  //login button
  btnOne: {
    width: "40%",
    backgroundColor: colorThree,
    borderRadius: 30,
    padding: 10,
    alignItems: "center",
  },

  //login text button
  btnTextOne: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  //login button
  btnTwo: {
    width: "60%",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    padding: 6,
    alignItems: "center",
    margin: 50
  },

  //login text button
  btnTextTwo: {
    color: "#999999",
    fontSize: 14,
    fontWeight: "bold",
  },

  //yellow bottom btn
  btnThree: {
    backgroundColor: colorFour,
    width: "100%",
    height: 80,
    position: "absolute",
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },

  //yellow text button
  btnTextThree: {
    color: "#333333",
    fontSize: 26,
  },

  //header one
  headerOne: {
    // margin: 30, 
    borderBottomLeftRadius: 100, 
    borderBottomRightRadius: 100, 
    backgroundColor: "#851DE0", 
    alignItems: "center", 
    justifyContent: "center", 
    width: "100%", 
    height: 200, 
    // position: "absolute", 
    // top: 0
  },
  
  //header one
  headerTwo: {
    borderBottomLeftRadius: 50, 
    borderBottomRightRadius: 50, 
    backgroundColor: "#851DE0", 
    alignItems: "center", 
    justifyContent: "space-around", 
    width: "100%", 
    height: 120, 
    flexDirection: "row",
    flexWrap: "nowrap",
  },

  
  //register form box
  loginBoxTwo: {
    padding: 10,
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
  },

  //register input
  inputTwo: {
    width: "100%",
    height: 50,
    fontSize: 16,
    borderBottomWidth: 2,
    borderBottomColor: colorOne,
    textDecorationColor: "blue"
  },

  
  //general box
  box: {
    padding: 10,
    margin: 10,
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    //shadow
    shadowOffset: { width: 20, height: 20 },
    shadowColor: 'black',
    shadowOpacity: 1,
    elevation: 8,
    // background color must be set
    // backgroundColor: "#0000" // invisible color
  },


});

export default styles;