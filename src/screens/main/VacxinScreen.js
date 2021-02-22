import React, { Component } from 'react';
import {
  View, 
  Text, 
  TouchableOpacity, 
  SectionList, 
  StyleSheet, 
  Image, 
  ImageBackground,
  TouchableHighlight} from 'react-native';

import { Button } from 'react-native-elements';
import images from '../../assets/images/images';
import {hScale, vScale, width, height} from '../../commons/PerfectPixel';

import InjectDetailScreen from '../detail/InjectDetailScreen';
import { color } from 'react-native-reanimated';

const DataInitItemResult = [
  {
    titleResult: 'IFANT',
    data: [
      ['Mũi 1/1','Tuberculosis'],
      ['Mũi 1/5','Hepatitis B'],
    ],
  },
  {
    titleResult: '2 Month',
    data: [
      ['Mũi 3/5','Hepatitis B'],
      ['Mũi 2/2','Gastritis'],
      ['Mũi 2/5','Diphtheria, Whooping Cough,Tetanus, Poliomyelitis... D0 HIB'],
    ],
  },
  {
    titleResult: '2 Month',
    data: [
      ['Mũi 3/5','Hepatitis B'],
      ['Mũi 2/2','Gastritis'],
      ['Mũi 2/5','Diphtheria, Whooping Cough,Tetanus, Poliomyelitis... D0 HIB'],
    ],
  },
  {
    titleResult: '2 Month',
    data: [
      ['Mũi 3/5','Hepatitis B'],
      ['Mũi 2/2','Gastritis'],
      ['Mũi 2/5','Diphtheria, Whooping Cough,Tetanus, Poliomyelitis... D0 HIB'],
    ],
  },
  {
    titleResult: '2 Month',
    data: [
      ['Mũi 3/5','Hepatitis B'],
      ['Mũi 2/2','Gastritis'],
      ['Mũi 2/5','Diphtheria, Whooping Cough,Tetanus, Poliomyelitis... D0 HIB'],
    ],
  }, 
  {
    titleResult: '2 Month',
    data: [
      ['Mũi 3/5','Hepatitis B'],
      ['Mũi 2/2','Gastritis'],
      ['Mũi 2/5','Diphtheria, Whooping Cough,Tetanus, Poliomyelitis... D0 HIB'],
    ],
  },
  {
    titleResult: '2 Month',
    data: [
      ['Mũi 3/5','Hepatitis B'],
      ['Mũi 2/2','Gastritis'],
      ['Mũi 2/5','Diphtheria, Whooping Cough,Tetanus, Poliomyelitis... D0 HIB'],
    ],
  }, 
];

export default class VacxinScreen extends Component {
  constructor(props){
    super(props);
    this.state = { 
      styleIndex: 0
    };
  }

  press() { 
    if (this.state.styleIndex === 0) { 
      this.setState({styleIndex: 1}) 
    } else { 
      this.setState({styleIndex: 0}) 
    }
  }

  _onNextPress = (item) => {
    this.props.navigation.navigate ('InjectDetailScreen',
      {name: item[1]}
    );
  };
  buttonPressed = () => {
    console.log('TouchableHighlight pressed...');
 }

  render() {
    const { navigation } = this.props;
    const {styleIndex} = this.state;
    return (
        <View style={styles.container} >
          <View style={styles.wrapperBg}>
            <Image style={styles.bgStar} source={images.bgStarInject}/>
          </View>
          <View style={styles.header}>
            <Text style={styles.txtHeader}>Vắc xin</Text>
          </View>
          <View style={styles.wrapperMain}>
            <SectionList
                contentContainerStyle={{paddingBottom: hScale(450)}}
                showsVerticalScrollIndicator={false}
                style={{marginBottom: 25}}
                sections={DataInitItemResult}
                renderItem={({item, index}) => {
                  return (
                    <TouchableHighlight 
                      underlayColor = {'#FADEE8'} 
                      activeOpacity={0.7} 
                      onPress={() => navigation.navigate("InjectDetailScreen",{name: item[1]})}
                      >
                      <View style={styles.sectionItem}>
                        <ImageBackground ImageBackground style={styles.numInject} source={images.numInject}>
                          <Text style={styles.txtNumInject}>{item[0]}</Text>
                        </ImageBackground>
                        <View style={styles.viewInject}>
                          <View style={styles.nameVacxin}>
                            <Text style={styles.txtSectionItem}>
                              {item[1]}
                            </Text>
                          </View>
                          <Image style={styles.arrowList} source={images.arrowList}/>
                        </View>
                      </View>
             
                    </TouchableHighlight>
                  );
                }}
                renderSectionHeader={({section}) => (
                  <View style={styles.viewDate}>
                    <ImageBackground style={styles.cloudDate} source={images.cloudDate}>
                      <Text style={styles.txtTitleResults}>
                        {section.titleResult}
                      </Text>
                    </ImageBackground>
                  </View>
                )}
                keyExtractor={(item, index) => index}
              />
            </View>
          <Image style={styles.bgBottom} source={images.bgBotInject}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    borderColor: "#000066",
    borderWidth: 1,
    borderRadius: 10
},
  buttonPress: {
    borderColor: "#000066",
    backgroundColor: "red",
    borderWidth: 1,
    borderRadius: 10
  },
  container:{
    width: width,
    height: height,
  },
  bgBottom:{
    width: hScale(871),
    height: vScale(400),
    position:'absolute',
    bottom:0,
    left: -20

  },
  ellip:{
    width: hScale(1033),
    height: hScale(1033),
    position:'absolute',
    bottom: vScale(920)
  },
  bgStar:{
    width: width,
    position:'absolute',
    height: vScale(863),
    marginTop: vScale(103),
  },
  wrapperBg:{
    position:'absolute', 
    width: width, 
    height: height, 
    alignItems:'center',
  }, 
  header:{
    width:width, 
    height: vScale(103),
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#C03869'

  },
  txtHeader:{
    color: '#fff',
    fontSize: hScale(35)
  },
  wrapperMain:{
    width: width,
    height: height,
    alignItems:'center',
    // marginBottom: hScale(340)
  },
  imgAdd:{
    width: hScale(148),
    height: hScale(148)
  },
  btnAdd:{
    borderRadius: 50,
    marginTop: vScale(27)
  },
  containerBaby:{
    marginTop: vScale(103),
  },
  buttonStyle:{
    backgroundColor: '#AF2B5B',
    borderRadius: 43,
    width: vScale(259),
    height: vScale(85),
    marginTop: vScale(403)
  },
  titleStyle:{
    fontSize: hScale(35)
  },
  imgBaby:{
    width: vScale(259),
    height: vScale(416),
    position:'absolute'

  },
  viewInject:{
    width: '82%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderBottomColor: '#C03869',
    alignItems:'center'
  },
  txtTitleResults: {
    marginBottom: hScale (14),
    color:'#C03869',
    fontSize:hScale(30),
    fontWeight:'bold'
  },
  sectionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width,
    paddingHorizontal: hScale(38),
    // marginTop: vScale(40)
  },
  sectionItemLast: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: hScale (14),
    marginRight: hScale (18),
    marginBottom: hScale (48),
  },
  txtSectionItem: {
    fontSize: hScale(22),
    fontWeight:'bold',
    color:'#C03869'
  },

  sectionTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    opacity: 0.8,
    marginBottom: vScale (5),
    paddingHorizontal: hScale (24),
    paddingVertical: hScale (9),
  },
  cloudDate:{
    width: hScale(157),
    height: hScale(100),
    alignItems:'center',
    justifyContent:'center',
    paddingTop: vScale(15)
  },
  numInject:{
    width: hScale(82),
    height: hScale(84),
    alignItems:'center',
    justifyContent:'center',
    marginVertical: vScale(15)
  },
  arrowList:{
    width: hScale(53),
    height: hScale(56)
  },
  nameVacxin:{
    width: hScale(440),
  },
  viewDate:{
    flex:1,
    paddingHorizontal: hScale(38),
    marginTop: vScale(30),
    marginBottom: vScale(25)
  },
  txtNumInject:{
    color:'#C03869',
    fontSize: hScale(23),
    fontWeight:'bold',
    width:hScale(40),
    height: hScale(53),
  }
})
