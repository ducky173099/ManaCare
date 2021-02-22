
import React, { Component,useState } from 'react';
import {
  View, 
  Text, 
  TouchableOpacity, 
  SectionList, 
  StyleSheet, 
  Image, 
  ImageBackground,
  TouchableHighlight,
  FlatList
} from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

import { Button, ButtonGroup } from 'react-native-elements';
import images from '../../assets/images/images';
import {hScale, vScale, width, height} from '../../commons/PerfectPixel';

import InjectDetailScreen from '../detail/InjectDetailScreen';
import { color } from 'react-native-reanimated';
import Toast from '../../component/Toast';
// import TimePicker from 'react-native-simple-time-picker'; 
// import DatePicker from '@react-native-community/datetimepicker';
import TimePicker from "react-native-24h-timepicker";

var radio_props = [
    {label: 'param1', value: 0 },
    {label: 'param2', value: 1 }
  ];

const component1 = () => <Image style={{width:hScale(38), height: hScale(34)}} source={images.cbNotify}/>
const component2 = () => <Image style={{width:hScale(38), height: hScale(34)}} source={images.cbNotifyActive}/>

export default class SettingLotifyScreen extends Component {
    constructor(props){
        super(props);
        this.state = { 
            text: '',
            types3: [{label: 'On Time', value: 0}, {label: 'Before 1 day', value: 1},],
            value3: 0,
            value3Index: 0,
            isDateTimePickerVisible: false,
            time: "",
            selectedIndex: 2
        };
        this.updateIndex = this.updateIndex.bind(this)
    }

    updateIndex (selectedIndex) {
        console.log("selectedIndex :",selectedIndex);
        this.setState({selectedIndex})
    }

      
    onCancel() {
        this.TimePicker.close();
      }
     
      onConfirm(hour, minute) {
        this.setState({ time: `${hour} / ${minute}` });
        this.TimePicker.close();
      }


    _onPressDialog = () => {
        this.refs.toast.show(
            <View style={styles.viewDialog}>
                <Image style={styles.group83} source={images.group83}/>
                <Text style={styles.txtDialog}>Lưu Thành Công</Text>
            </View>
        ,2000);

        this.firstAsync();
    }

    async firstAsync() {
        let promise = new Promise((res, rej) => {
            setTimeout(() => res("Now it's done!"), 1000)
        });

        let result = await promise; 
        this.props.navigation.navigate("OtherScreen");

    };

    _onPopPress =() =>{
        this.props.navigation.navigate ('OtherScreen');
    };



    render() {
        
        const { navigation } = this.props;
        const {styleIndex} = this.state;
        const { selectedHours, selectedMinutes } = this.state;
        const buttons = [{ element: component1 }, { element: component2 }]
        const buttons2 = [{ element: component2 }, { element: component1 }]
        const { selectedIndex } = this.state;
        return (
            <View style={styles.container} >
                <Toast
                    ref="toast"
                    style={styles.containerDialog}
                    position='center'
                />
                <View style={styles.wrapperBg}>
                    <Image style={styles.bgStar} source={images.bgStarInject}/>
                </View>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.btnBack} onPress={this._onPopPress}>
                        <Image style={styles.arrowBack} source={images.arrowBack}/>
                    </TouchableOpacity>
                    <Text style={styles.txtHeader}>Cài Đặt Thông Báo</Text>
                    <TouchableOpacity style={styles.btnBack} onPress={this._onPressDialog}>
                        <Image style={styles.imgChangeInfo} source={images.group800}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.wrapperMain}>
                    <View style={styles.bgItem}>
                        <View style={styles.viewTextItem}>
                            <Text style={styles.txtItem}>Status :</Text>
                        </View>
                        <ImageBackground style={{width:hScale(157), height:hScale(100), alignItems:'center', justifyContent:'center'}} source={images.group133}>
                            <ButtonGroup
                                onPress={this.updateIndex}
                                selectedIndex={selectedIndex}
                                buttons={selectedIndex == 1 ? buttons : buttons2}
                                selectedButtonStyle={{backgroundColor:'rgba(0,0,0,0)', borderWidth:0}}
                                buttonStyle={{borderWidth:0}}
                                innerBorderStyle={{width: 0, color: 'white'}}
                                containerStyle={{backgroundColor:'rgba(0,0,0,0)', borderWidth:0, borderRadius: 0}} />
                        </ImageBackground>
                    </View>
                    <View style={styles.bgItem}>
                        <View style={styles.viewTextItem}>
                            <Text style={styles.txtItem}>Time :</Text>
                        </View>
                        <ImageBackground style={{width:hScale(157), height:hScale(100), alignItems:'center', justifyContent:'center'}} source={images.group133}>
                            <TouchableOpacity
                                onPress={() => this.TimePicker.open()}
                                style={{backgroundColor: '#FEDFE4', width: hScale(110), height:hScale(27),borderRadius: hScale(27), alignItems:'center', justifyContent:'center'}}
                            >
                                <Text style={{color:'#C03869', fontSize:hScale(20), fontWeight:'bold'}}>{this.state.time}</Text>
                            </TouchableOpacity>
                            <TimePicker
                                ref={ref => {
                                    this.TimePicker = ref;
                                }}
                                onCancel={() => this.onCancel()}
                                onConfirm={(hour, minute) => this.onConfirm(hour, minute)}
                            />
                        </ImageBackground>
                    </View>
                    <View style={styles.bgItem}>
                        <View style={styles.viewTextItem}>
                            <Text style={styles.txtItem}>Cài Đặt :</Text>
                        </View>
                        <RadioForm formHorizontal={true} animation={true} >
                            {this.state.types3.map((obj, i) => {
                                var onPress = (value, index) => {
                                    this.setState({
                                    value3: value,
                                    value3Index: index
                                    })
                                }
                                return (
                                <RadioButton labelHorizontal={true} key={i} style={{marginRight: hScale(75)}}>
                                    {/*  You can set RadioButtonLabel before RadioButtonInput */}
                                    <RadioButtonInput
                                    
                                        obj={obj}
                                        index={i}
                                        isSelected={this.state.value3Index === i}
                                        onPress={onPress}
                                        buttonInnerColor={this.state.value3Index === i ? '#075456' : '#C03869'}
                                        buttonOuterColor={this.state.value3Index === i ?  '#BFE5DB' : '#FFBACD'}
                                        buttonSize={hScale(29)}
                                        buttonOuterSize={hScale(45)}
                                        buttonWrapStyle={this.state.value3Index === i ? { backgroundColor:'#BFE5DB', borderRadius: 50} : {backgroundColor:'#C03869',borderRadius: 50,}}
                                    />
                                    <RadioButtonLabel
                                        obj={obj}
                                        index={i}
                                        onPress={onPress}
                                        labelStyle={styles.rbGT}
                                        labelWrapStyle={{}}
                                    />
                                </RadioButton>
                                )
                            })}
                        </RadioForm>
                    </View>
                    
                </View>
            <Image style={styles.bgBottom} source={images.bgBotInject}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    rbGT:{
        fontSize: hScale(28),
        color: '#C03869',
        marginLeft: hScale(9)
    },
    viewTextItem:{
        width:hScale(150),
        marginRight: hScale(10)
    },
    txtItem:{
        fontSize: hScale(35),
        fontWeight: 'bold',
        color:'#C03869'
    },
    bgItem:{
        flexDirection:'row',
        alignItems:'center',
        width:width,
        paddingHorizontal:hScale(50),
        marginTop: hScale(20),
        marginBottom: hScale(20)
    },
    arrowBack:{
        width: vScale(74),
        height: vScale(75)
    },
    imgChangeInfo:{
        width: vScale(74),
        height: vScale(75)
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
        height: vScale(104),
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection: 'row',
        paddingHorizontal: hScale(24), 
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
    viewDialog:{
        alignItems:'center',
        justifyContent:'center',
    },  
    txtDialog:{
        fontSize: hScale(30),
        color: '#fff',
        marginTop: vScale(20)
    },  
    group83:{
        width: hScale(74),
        height: hScale(75),
    },
    containerDialog:{
        width: hScale(550),
        height: vScale(180),
        backgroundColor: '#C03869',
        borderRadius: hScale(90),
        alignItems:'center',
        justifyContent:'center',
    },


})
