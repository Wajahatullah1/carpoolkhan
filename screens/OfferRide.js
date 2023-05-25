import {
    StyleSheet, Text, View,
    TouchableOpacity, Image, TextInput, Pressable
  } from 'react-native'
  import React from 'react'
  import { useNavigation } from '@react-navigation/native';
  import HomeSliderDetail from '../commponents/HomeSliderDetail';
  const OfferRide = () => {
  
    const navigation = useNavigation();
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row", justifyContent: "center", height: 80, borderBottomRightRadius: 15, borderBottomLeftRadius: 15, backgroundColor: "#A794CC" }}>
          <TouchableOpacity style={{ width: "20%", alignSelf: "flex-start", paddingHorizontal: 20, marginHorizontal: 50, marginTop: 30, }} onPress={navigation.goBack}>
            <Image style={{ width: 30, height: 30, borderRadius: 50 }}
              source={{ uri: "data:image/png;base64,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" }} />
          </TouchableOpacity>
          <View style={{ width: "60%", justifyContent: "center" }}>
            <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}> Offer A RIDE</Text>
          </View>
          <View style={{ width: "20%" }}>
          </View>
        </View>
        <Text style={styles.loginTxt}>Here is my Routine</Text>
  
        <View style={styles.formContainer}>
  
          <View style={styles.inputContainer}>
            <View style={{ width: "20%", alignSelf: "flex-start", paddingHorizontal: 20, marginHorizontal: 5, borderColor: "#A794CC", borderRadius: 10, }}>
              <Image style={{ alignSelf: "center", width: 50, height: 50 }} source={require("../assets/Images/profile3.png")}></Image>
            </View>
            <TextInput
              style={styles.inp1}
              // value={password}
              placeholder="Phone Number (e.g 0312 12121212)"
              autoCorrect={false}
            // onChangeText={(actualData) => {
            //     setpassword(actualData);
            // }}
            />
          </View>
          <View style={styles.inputContainer}>
            <View style={{ width: "20%", alignSelf: "flex-start", paddingHorizontal: 20, marginHorizontal: 5, borderColor: "#A794CC", borderRadius: 10, }}>
              <Image style={{ alignSelf: "center", width: 60, height: 60 }} source={require("../assets/Images/location2.png")}></Image>
            </View>
            <TextInput
              style={styles.inp1}
              // value={password}
              placeholder="Start your Location"
              autoCorrect={false}
            // onChangeText={(actualData) => {
            //     setpassword(actualData);
            // }}
            />
          </View>
          <View style={styles.inputContainer}>
            <View style={{ width: "20%", alignSelf: "flex-start", paddingHorizontal: 20, marginHorizontal: 5, borderColor: "#A794CC", borderRadius: 10, }}>
              <Image style={{ alignSelf: "center", width: 60, height: 60 }} source={require("../assets/Images/location2.png")}></Image>
            </View>
            <TextInput
              style={styles.inp1}
              // value={password}
              placeholder="Choose Your Location"
              autoCorrect={false}
            // onChangeText={(actualData) => {
            //     setpassword(actualData);
            // }}
            />
          </View>
          <View style={styles.inputContainer}>
            <View style={{ width: "20%", alignSelf: "flex-start", paddingHorizontal: 20, borderColor: "#A794CC", borderRadius: 10, }}>
              <Image style={{ alignSelf: "center", width: 50, height: 50 }} source={require("../assets/Images/clock.png")}></Image>
            </View>
            <TextInput
              style={styles.inp1}
              // value={password}
              placeholder="Start Time"
              autoCorrect={false}
            // onChangeText={(actualData) => {
            //     setpassword(actualData);
            // }}
            />
          </View>
          <View style={styles.inputContainer}>
            <View style={{ width: "20%", alignSelf: "flex-start", paddingHorizontal: 20, borderColor: "#A794CC", borderRadius: 10, }}>
              <Image style={{ alignSelf: "center", width: 50, height: 50 }} source={require("../assets/Images/calender2.png")}></Image>
            </View>
            <TextInput
              style={styles.inp1}
              // value={password}
              placeholder="Start Time"
              autoCorrect={false}
            // onChangeText={(actualData) => {
            //     setpassword(actualData);
            // }}
            />
          </View>
        </View>
  
        <HomeSliderDetail/>
        <TouchableOpacity style={styles.btn2} 
        >
          <Text style={{ color: "white", textAlign: "center", letterSpacing: 1, fontWeight: "bold" }}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    )
  }
  
  export default OfferRide
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "white",
      alignSelf: "center",
      justifyContent:"space-between",
      width: "100%",
      height: "100%"
    },
    loginTxt: {
      textAlign:"center",
      marginHorizontal:10,
      alignSelf: "center",
      borderRadius: 10,
      paddingHorizontal: 20,
      paddingVertical: 8,
      borderdColor: "#C5D8E1",
      borderWidth: 1,
      marginTop: 10,
      letterSpacing: 1,
      fontSize: 20,
      fontWeight: "bold",
      width:"100%"
    },
    p: {
      letterSpacing: 0.5,
      fontSize: 15,
      paddingHorizontal: 20,
      marginVertical: 5,
    },
    formContainer: {
      marginTop: 20,
      height: "50%",
      justifyContent: "space-evenly"
    },
    inputContainer: {
      paddingHorizontal: 20,
      justifyContent: "center",
      flexDirection: "row",
      width: "100%",
    },
    inp1: {
  
      backgroundColor: "white",
      borderWidth: 1,
      borderColor: "black",
      borderRadius: 10,
      width: "100%",
      marginVertical: 5,
      height: 50,
      alignSelf: "center",
      paddingHorizontal: 20,
      borderWidth: 2,
      borderColor: "black"
  
    },
    btn2: {
      backgroundColor: "black",
      padding: 10,
      borderColor: "black",
      borderWidth: 1,
      borderRadius: 10,
      marginVertical: 10,
      marginHorizontal:10,
  
    }
  })