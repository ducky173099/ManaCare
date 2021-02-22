import React, { Component } from 'react';
import {View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, ScrollView} from 'react-native';
import {hScale, vScale, width, height} from '../../commons/PerfectPixel';
import images from '../../assets/images/images';



export default class InjectDetailScreen extends Component {

  _onNextPress = () => {
    this.props.navigation.pop();
  };


  render() {
    const { route } = this.props;
    const { params } = this.props.navigation.state;
    
    console.log("route ", params.name);
    return (
      <View style={styles.container} >
        <View style={styles.header}>
          <TouchableOpacity style={styles.btnBack} onPress={this._onNextPress}>
            <Image style={styles.arrowBack} source={images.arrowBack}/>
          </TouchableOpacity>
          <Text style={styles.txtHeader}>Thống kê</Text>
        </View>
        <ScrollView>
          <View style={styles.bgMain}>
            <ImageBackground style={styles.cloudVacxin} source={images.cloudVacxin}>
              <Text numberOfLines={1}>{params.name}</Text>
            </ImageBackground>
            <View style={styles.viewDetailInject}>

              <Text style={styles.txtSchedule}>Immunization schedule:</Text>
              <Text style={styles.newBorn}>- 1: Newborn</Text>
              <Text style={styles.txtSchedule}>Description Information:</Text>
              <Text style={styles.txtMainInject}>
                Tuberculosis (TB) is an infectious disease usually caused by Mycobacterium tuberculosis (MTB) bacteria.[1] Tuberculosis generally affects the lungs, but can also affect other parts of the body.[1] Most infections do not have symptoms, in which case it is known as latent tuberculosis.[1] About 10% of latent infections progress to active disease which, if left untreated, kills about half of those affected.[1] The classic symptoms of active TB are a chronic cough with blood-containing mucus, fever, night sweats, and weight loss.[1] It was historically called "consumption" due to the weight loss.[8] Infection of other organs can cause a wide range of symptoms.[9] {'\n \n'}Tuberculosis is spread through the air when people who have active TB in their lungs cough, spit, speak, or sneeze.[1][10] People with latent TB do not spread the disease.[1] Active infection occurs more often in people with HIV/AIDS and in those who smoke.[1] Diagnosis of active TB is based on chest X-rays, as well as microscopic examination and culture of body fluids.[11] Diagnosis of latent TB relies on the tuberculin skin test (TST) or blood tests.[11]
              </Text>
            </View>
            <View style={styles.bgBotDetail}>
              <Image style={styles.l5} source={images.l5}/>
              <Image style={styles.l4} source={images.l4}/>
              <Image style={styles.l3} source={images.l3}/>
              <Image style={styles.l2} source={images.l2}/>
              <Image style={styles.l1} source={images.l1}/>
            </View> 
          </View>
        </ScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    width: width,
    height: height,
    backgroundColor: '#fff'
  },
  header:{
    width:width, 
    height: vScale(103),
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#C03869',
    flexDirection:'row'
  },
  txtHeader:{
    color: '#fff',
    fontSize: hScale(35)
  },
  arrowBack:{
    width: vScale(74), 
    height: vScale(75), 
  },
  btnBack:{
    borderRadius: 50,
    position: 'absolute',
    left: vScale(20)
  },
  bgMain:{
    width: width,
    // height: height,
    alignItems:'center',
  },
  cloudVacxin:{
    width: hScale(298),
    height: hScale(190),
    alignItems:'center',
    justifyContent:'center',
    marginTop: vScale(25),
    paddingHorizontal:hScale(20)
  },
  viewDetailInject:{
    width: width,
    paddingHorizontal: hScale(52),
    paddingTop: vScale(65),
    marginBottom: vScale(125)
  },
  txtSchedule:{
    color:'#C03869',
    fontSize:hScale(30),
    fontWeight:'bold'
  },
  newBorn:{
    color: '#9F9F9F',
    fontSize:hScale(30),
    fontWeight:'bold',
    marginVertical: vScale(30)
  },
  txtMainInject:{
    color:'#787878',
    fontSize: hScale(25),
    textAlign:'left'
  },
  l5:{
    width: hScale(870),
    height:hScale(380)
  },
  scrollView:{
    width: width,
    height: height,
  },
  bgBotDetail:{
    width: width,
    // position: 'absolute', 
    bottom: 0
  },
  l4:{
    width: hScale(437),
    height:hScale(261),
    position:'absolute',
    left: vScale(180),
    bottom:0
  },
  l3:{
    width: hScale(140),
    height:hScale(99),
    position:'absolute',
    left: vScale(36),
    bottom: vScale(81)
  },
  l2:{
    width: hScale(79),
    height:hScale(43),
    position:'absolute',
    left: vScale(133),
    top: vScale(-15)

  },
  l1:{
    width: hScale(87),
    height:hScale(74),
    position:'absolute',
    right: vScale(82),
    top: vScale(15)

  }


 


})
