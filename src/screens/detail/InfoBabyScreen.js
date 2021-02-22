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
import commons from '../../commons/comons';

import InjectDetailScreen from '../detail/InjectDetailScreen';
import { color } from 'react-native-reanimated';



export default class InfoBabyScreen extends Component {
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

  _onNextPress = (nameBB) => {
    this.props.navigation.navigate ('ChangeInfoBabyScreen',{nameBB: nameBB});
  };

  _onPopPress = () => {
      this.props.navigation.navigate("BabyScreen");
  }

  buttonPressed = () => {
    console.log('TouchableHighlight pressed...');
 }

  render() {
    const { navigation } = this.props;
    const {styleIndex} = this.state;

    const { params } = this.props.navigation.state;

    console.log("ok name :", params.nameBB);
    return (
        <View style={commons.container} >
            <View style={commons.wrapperBg}>
                <Image style={commons.bgStar} source={images.bgStarInject}/>
            </View>
            <View style={styles.header}>
                <TouchableOpacity style={styles.btnBack} onPress={this._onPopPress}>
                    <Image style={styles.arrowBack} source={images.arrowBackBB}/>
                </TouchableOpacity>
                <Text style={styles.txtHeader}>Vắc xin</Text>
                <TouchableOpacity style={styles.btnBack} onPress={() => this._onNextPress(params.nameBB)}>
                    <Image style={styles.imgChangeInfo} source={images.btnChangeInfo}/>
                </TouchableOpacity>
            </View>
            <Image style={commons.bgBottom} source={images.bgBotInject}/>

            <View style={commons.wrapperMain}>
                <View style={styles.bgInfoBB}> 
                    <View style={styles.containerBabyDetail}>
                        <Image style={styles.ellip113} source={images.ellip113}/>
                        <Image style={styles.imgBabyActive} source={images.girl1}/>
                    </View>
                    <View style={styles.bgInfo}>
                        <Image style={styles.group156} source={images.group156}/>
                        <Text style={styles.txtNameBB}>{params.nameBB}</Text>
                        <View style={styles.birdthDayBB}>
                            <Image style={styles.nu} source={images.nu}/>
                            <Text style={styles.txtBirdthDayBB}>02-02-2019</Text>
                        </View>
                        <Text style={styles.txtNote}>
                            "Ghi chú Ghi chú {'\n'} Ghi chú Ghi chú Ghi {'\n'} chú Ghi chú Ghi chú"
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    // wrapperMain:{
    //     width: width,
    //     height: height,
    //     alignItems:'center',
    //     backgroundColor:'blue',
    //     paddingHorizontal: hScale(49)
    // },
    txtNameBB:{
        fontSize: hScale(32),
        color: '#fff',
        marginTop: vScale(19)
    },  
    txtNote:{
        fontSize: hScale(23),
        color: '#fff',
        textAlign:'center',
    },
    birdthDayBB:{
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
    },  
    txtBirdthDayBB:{
        fontSize: hScale(32),
        color: '#fff',
        marginLeft: hScale(15)
    },
    nu:{
        width: hScale(14),
        height: hScale(25),
    },
    group156:{
        width: hScale(79),
        height: hScale(79),
    },
    bgInfo:{
        width: hScale(316),
        height: hScale(354),
        backgroundColor:'#C03869',
        borderRadius: hScale(45),
        marginLeft: hScale(23),
        alignItems: 'center',
        justifyContent:'center'
    },
    ellip113:{
        width: hScale(184),
        height: hScale(51),
        top: hScale(305),
        position: 'absolute',
    },  
    imgBabyActive:{
        width: hScale(206),
        height: hScale(330),
    },
    containerBabyDetail:{
        // marginTop: vScale(70),
        // alignItems:'center',
        // backgroundColor:'blue'
    },
    bgInfoBB:{
        width: hScale(628),
        height: vScale(901),
        borderWidth: 1.5,
        borderColor: '#C03869',
        borderRadius: hScale(45),
        flexDirection: 'row',
        justifyContent:'center',
        paddingTop: vScale(262)
        // position: 'absolute',
    },
    header:{
        width:width, 
        height: vScale(153),
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection: 'row',
        paddingHorizontal: hScale(35), 
    },
    txtHeader:{
        color: '#C03869',
        fontSize: hScale(35)
    },
    arrowBack:{
        width: hScale(74),
        height: hScale(75)
    },
    btnBack:{

    },
    imgChangeInfo:{
        width: hScale(74),
        height: hScale(75)
    }
})
