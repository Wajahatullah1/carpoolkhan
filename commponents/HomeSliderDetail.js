import { StyleSheet, Text, View,FlatList,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import HomeSliderApi from '../API/HomeSliderApi'
import {  useNavigation } from '@react-navigation/native'

 
const HomeSliderDetail = () => {
  const navigation=useNavigation();
  // const onpressButton=()=>{
  //   navigation.navigate("Student")
  // }
  const CardData=({item})=>{
return(
  <View style={styles.mainContainer}> 
 <View style={styles.courseContainer}>
<Image  style={styles.img} source={item.image} resizeMode="contain" />
<View style={{position:"absolute",}}>

</View>
</View>
  </View>
)
  }
  return (
    <View>
      <FlatList data={HomeSliderApi} showsHorizontalScrollIndicator={false} horizontal keyExtractor={(item)=>item.id} renderItem={CardData} />
    </View>
  )
}

export default HomeSliderDetail

const styles = StyleSheet.create({
  mainContainer:{
   
  },
  courseContainer:{
    marginVertical:10,
    marginHorizontal:5,
    borderWidth:1.5,
    borderColor:"purple",
    borderRadius:15,
 alignItems:"center",
 overflow:"hidden",
 width:300,
 height:200,
    position:"relative",
    shadowColor:"purple",
shadowOffset:{width:2,height:2},
shadowOpacity:0,
shadowRadius:0.9,
elevation:8
  },
  img:{
  width:"100%",
  height:"100%",

  },
  cardTitle:{
    color:"white",
    fontSize:30,
    fontWeight: '500',
    textAlign:"center",


  },
  cardDescription:{
    color:"white",
    textAlign:"justify",
  },
  cardprice:{
    marginTop:10,
    color:"white",
    alignSelf:"flex-end",
    backgroundColor:"black",
    fontWeight:"bold",
borderRadius:10,
paddingHorizontal:15,
paddingVertical:10
  }

})