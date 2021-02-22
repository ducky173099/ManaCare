import React, { Component } from 'react';
import {
  View, 
  Text, 
  TouchableOpacity, 
  SectionList, 
  StyleSheet, 
  Image, 
  ImageBackground,
  TouchableHighlight,
  TextInput
} from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import DatePicker from 'react-native-datepicker';
import { Button, Input  } from 'react-native-elements';
import images from '../../assets/images/images';
import {hScale, vScale, width, height} from '../../commons/PerfectPixel';
import commons from '../../commons/comons';
import Textarea from 'react-native-textarea';

// import Toast, {DURATION} from 'react-native-easy-toast'
import Toast from '../../component/Toast';

import InjectDetailScreen from '../detail/InjectDetailScreen';
import { color } from 'react-native-reanimated';



export default class ChangeInjectScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
        text: '',
        types3: [{label: 'Nam', value: 0}, {label: 'Nữ', value: 1},],
        value3Index: 0,
        date:""

    };
  }


    _onPressDialog = () => {
        // this.setState({
        //     dialogVisible: true,
        // })

        this.refs.toast.show(
            <View style={styles.viewDialog}>
                <Image style={styles.group83} source={images.group83}/>
                <Text style={styles.txtDialog}>Lưu Thành Công</Text>
            </View>
        ,2000);

        this.firstAsync();


        // this.firstAsync().then(res => {
        //     if( res){
        //          this.props.navigation.navigate("BabyScreen");

        //     }
        // })

        
    }

    async firstAsync() {
        let promise = new Promise((res, rej) => {
            setTimeout(() => res("Now it's done!"), 1000)
        });
    
        // wait until the promise returns us a value
        let result = await promise; 
      
        // "Now it's done!"
        // alert(result); 
        this.props.navigation.navigate("StatisticalScreen");

    };

    _onPopPress = () => {
        this.props.navigation.navigate("StatisticalScreen");
    }


  render() {
    const { navigation } = this.props;
    const {styleIndex} = this.state;
    return (
        <View style={commons.container} >
            <Toast
                ref="toast"
                style={styles.containerDialog}
                position='center'
            />
            <View style={commons.wrapperBg}>
                <Image style={commons.bgStar} source={images.bgStarInject}/>
            </View>
            <View style={styles.header}>
                <TouchableOpacity style={styles.btnBack} onPress={this._onPopPress}>
                    <Image style={styles.arrowBack} source={images.arrowBack}/>
                </TouchableOpacity>
                <Text style={styles.txtHeader}>Sửa Thông Tin</Text>
                <TouchableOpacity style={styles.btnBack} onPress={this._onPressDialog}>
                    <Image style={styles.imgChangeInfo} source={images.group800}/>
                </TouchableOpacity>
            </View>
            <Image style={commons.bgBottom} source={images.bgBotInject}/>

            <View style={commons.wrapperMain}>
                <View style={styles.bgInfoBB}> 
                    <View style={styles.viewInitChange}>
                        <View style={styles.viewTextItem}>
                            <ImageBackground style={styles.numInject} source={images.numInject}>
                                <Text style={styles.txtNumInject}>Mũi 1/5</Text>
                            </ImageBackground>
                        </View>
                        <View style={styles.viewActionChange}>
                            <Text style={{fontSize: hScale(42), fontWeight: 'bold', color: '#C03869'}}>Tuberculosis</Text>
                        </View>
                    </View>
                    <View style={styles.viewInitChange}>
                        <View style={styles.viewTextItem}>
                            <Text style={styles.txtItemChange}>Medicine :</Text>
                        </View>
                        <View style={styles.viewActionChange}>
                            <TextInput
                                style={styles.inputChange}
                                // onChangeText={(text) => this.setState({text})}
                                // value={this.state.text}
                            />
                        </View>
                    </View>
                    <View style={styles.viewInitChange}>
                        <View style={styles.viewTextItem}>
                            <Text style={styles.txtItemChange}>Note :</Text>
                        </View>
                        <View style={styles.viewActionChange}>
                            <TextInput
                                style={styles.inputChange}
                                // onChangeText={(text) => this.setState({text})}
                                // value={this.state.text}
                            />
                        </View>
                    </View>
                    <View style={styles.viewInitChange}>
                        <View style={styles.viewTextItem}>
                            <Text style={styles.txtItemChange}>Injected :</Text>
                        </View>
                        <View style={styles.viewActionChange}>
                            <TextInput
                                style={styles.inputChangeInject}
                                // onChangeText={(text) => this.setState({text})}
                                // value={this.state.text}
                            />
                        </View>
                    </View>
                    <View style={styles.viewInitChange}>
                        <View style={styles.viewTextItem}>
                            <Text style={styles.txtItemChange}>Date :</Text>
                        </View>
                        <View style={styles.viewActionChange}>
                            {/* <TextInput
                                style={styles.inputChangeDate}
                                // onChangeText={(text) => this.setState({text})}
                                // value={this.state.text}
                            /> */}
                            <DatePicker
                                // style={{backgroundColor:'green'}}
                                locale = "vi"
                                date={this.state.date}
                                mode="date"
                                placeholder="   "
                                format="DD-MM-YYYY"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                showIcon={false}
                                androidMode="spinner"
                                // disabled={true}
                                customStyles={{
                                    dateInput: {
                                        backgroundColor: '#FFBACD',
                                        height: hScale(40),
                                        borderRadius: hScale(13),
                                        padding: 0,
                                        fontSize: hScale(25),
                                        paddingHorizontal: hScale(25),
                                        width: hScale(276),
                                        color: '#000',
                                        borderWidth:0,

                                    },
                                    datePicker:{
                                        backgroundColor:'#C03869',
                                        height:hScale(50)
                                    },
                                    datePickerCon:{
                                        backgroundColor:'#C03869',
                                        height:hScale(50)
                                    },
                                    dateTouchBody:{
                                        // backgroundColor:'#C03869',
                                    },
                                    btnCancel:{
                                        backgroundColor:'#C03869'
                                    },
                
                                // ... You can check the source to find the other keys.
                                }}
                                onDateChange={(date) => {this.setState({date: date})}}
                            />
                        </View>
                    </View>
       

                        
                    </View>
                </View>
            </View>
    );
  }
}

const styles = StyleSheet.create({
    inputChangeDate:{
        backgroundColor: '#FFBACD',
        height: hScale(40),
        borderRadius: hScale(13),
        padding: 0,
        fontSize: hScale(25),
        paddingHorizontal: hScale(25),
        width: hScale(276),
        color: '#000',
        
    },
    inputChangeInject:{
        backgroundColor: '#FFBACD',
        height: hScale(40),
        borderRadius: hScale(13),
        padding: 0,
        fontSize: hScale(25),
        paddingHorizontal: hScale(25),
        width: hScale(52),
        color: '#000',
    },
    txtNumInject:{
        color:'#C03869',
        fontSize: hScale(23),
        fontWeight:'bold',
        width:hScale(50),
        height: hScale(53),
        textAlign: 'center'
    },
    numInject:{
        width: hScale(88),
        height: hScale(91),
        alignItems:'center',
        justifyContent:'center',
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
    textareaContainer:{
        width: hScale(296),
        height: vScale(178),
        backgroundColor: '#FFBACD',
        borderRadius: hScale(30),
        paddingHorizontal: hScale(20)
    },
    rbGT:{
        fontSize: hScale(33),
        color: '#C03869',
        marginLeft: hScale(9)
    },
    viewActionChange:{
        width: hScale(429),
    },
    viewTextItem:{
        width: hScale(192),
    },
    inputChange:{
        backgroundColor: '#FFBACD',
        height: hScale(40),
        borderRadius: hScale(13),
        padding: 0,
        fontSize: hScale(25),
        paddingHorizontal: hScale(25),
        width: hScale(429),
        color: '#000',
    },
    txtItemChange:{
        fontSize: hScale(30),
        color: '#C03869'
    },
    viewInitChange:{
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#C03869',
        height: hScale(143),
        alignItems:'center'
    },  
    bgUpdateInfo:{
        // backgroundColor: 'blue',
        width: hScale(628),
        alignItems: 'center'
    },
    group253:{
        width: vScale(174),
        height: vScale(174),
        marginBottom: vScale(80)
    },  
    bgInfoBB:{
        width: width,
        paddingHorizontal: hScale(32),
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
    arrowBack:{
        width: hScale(74),
        height: hScale(75)
    },
    imgChangeInfo:{
        width: hScale(74),
        height: hScale(75)
    }
})
