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

import { Button, Input  } from 'react-native-elements';
import images from '../../assets/images/images';
import {hScale, vScale, width, height} from '../../commons/PerfectPixel';
import commons from '../../commons/comons';
import Textarea from 'react-native-textarea';

// import Toast, {DURATION} from 'react-native-easy-toast'
import Toast from '../../component/Toast';

import InjectDetailScreen from '../detail/InjectDetailScreen';
import { color } from 'react-native-reanimated';


var radio_props = [
    {label: 'param1', value: 0 },
    {label: 'param2', value: 1 }
  ];

export default class ChangeInfoBabyScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
        text: '',
        txtName: '',
        types3: [{label: 'Nam', value: 0}, {label: 'Nữ', value: 1},],
        value3: 0,
        value3Index: 0,

    };
  }

    componentDidMount(){
        const { params } = this.props.navigation.state;
        console.log('params :', params);
          this.setState({
              txtName: params.nameBB
          })
    }

    _onPressDialog = (txtName) => {
        this.refs.toast.show(
            <View style={styles.viewDialog}>
                <Image style={styles.group83} source={images.group83}/>
                <Text style={styles.txtDialog}>Lưu Thành Công</Text>
            </View>
        ,2000);

        this.firstAsync(txtName);
        
    }

    async firstAsync(txtName) {
        let promise = new Promise((res, rej) => {
            setTimeout(() => res("Now it's done!"), 1000)
        });
    
        // wait until the promise returns us a value
        let result = await promise; 
        // console.log('txtName :', txtName);
      
        // "Now it's done!"
        // alert(result); 
        this.props.navigation.navigate("BabyScreen",{txtName: txtName});
    };

    _onPopPress = () => {
        this.props.navigation.navigate("InfoBabyScreen");
    }


  render() {
    const { navigation } = this.props;
    const {styleIndex,txtName} = this.state;

    // const { params } = this.props.navigation.state;
    
    
    // console.log("change info :", params);
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
                    <Image style={styles.arrowBack} source={images.arrowBackBB}/>
                </TouchableOpacity>
                <Text style={styles.txtHeader}>Sửa thông tin</Text>
                <TouchableOpacity style={styles.btnBack} onPress={() => this._onPressDialog(txtName)}>
                    <Image style={styles.imgChangeInfo} source={images.group80}/>
                </TouchableOpacity>
            </View>
            <Image style={commons.bgBottom} source={images.bgBotInject}/>

            <View style={commons.wrapperMain}>
            
                <View style={styles.bgInfoBB}> 
                    <Image style={styles.group253} source={images.group253}/>
                    <View style={styles.bgUpdateInfo}>
                        <View style={styles.viewInitChange}>
                            <View style={styles.viewTextItem}>
                                <Text style={styles.txtItemChange}>Tên Bé :</Text>
                            </View>
                            <View style={styles.viewActionChange}>
                                <TextInput
                                    style={styles.inputChange}
                                    onChangeText={(txtName) => this.setState({txtName})}
                                    value={txtName}
                                />
                            </View>
                        </View>
                        <View style={styles.viewInitChange}>
                            <View style={styles.viewTextItem}>
                                <Text style={styles.txtItemChange}>Giới Tính :</Text>
                            </View>
                            <View style={styles.viewActionChange}>
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
                                {/* <Text>selected: {this.state.types3[this.state.value3Index].label}</Text> */}
                            </View>
                        </View>
                        <View style={styles.viewInitChange}>
                            <View style={styles.viewTextItem}>
                                <Text style={styles.txtItemChange}>Số Điện Thoại :</Text>
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
                                <Text style={styles.txtItemChange}>Sinh Nhật :</Text>
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
                                <Text style={styles.txtItemChange}>Ghi Chú :</Text>
                            </View>
                            <View style={styles.viewActionChange}>
                            <Textarea
                                containerStyle={styles.textareaContainer}
                                style={styles.textarea}
                                onChangeText={this.onChange}
                                defaultValue={this.state.text}
                                maxLength={120}
                                underlineColorAndroid={'transparent'}
                            />
                            </View>
                        </View>
                        
                    </View>
                </View>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
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
        width: hScale(296),
    },
    viewTextItem:{
        width: hScale(220),
    },
    inputChange:{
        backgroundColor: '#FFBACD',
        height: hScale(40),
        borderRadius: hScale(13),
        padding: 0,
        fontSize: hScale(25),
        paddingHorizontal: hScale(25),
        width: hScale(296),
        color: '#000',
    },
    txtItemChange:{
        fontSize: hScale(30),
        color: '#C03869'
    },
    viewInitChange:{
        flexDirection: 'row',
        marginBottom: vScale(42)
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
        width: hScale(628),
        height: vScale(901),
        borderWidth: 1.5,
        borderColor: '#C03869',
        borderRadius: hScale(45),
        paddingTop: vScale(65),
        alignItems:'center'
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
    imgChangeInfo:{
        width: hScale(74),
        height: hScale(79)
    }
})
