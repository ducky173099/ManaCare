import React, { Component } from 'react';
import {View, Text, TouchableOpacity, ImageBackground, StyleSheet, Image, Alert} from 'react-native';


import { Button } from 'react-native-elements';
import images from '../../assets/images/images';
import {hScale, vScale, width, height} from '../../commons/PerfectPixel';

import Modal, {
  ModalTitle,
  ModalContent,
  ModalFooter,
  ModalButton,
  SlideAnimation,
  ScaleAnimation,

} from 'react-native-modals';

export default class BabyScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      isBaby: 0,
      modalVisible: false,
      swipeableModal: false,
      nameBB:'Bo',
    }
  }

  // componentDidMount(){
  //   const { params } = this.props.navigation.state;
  //   this.setState({
  //     nameBB: params.txtName
  //   });
  // }

  setModalVisible(visible) {
      this.setState({modalVisible: visible});
  }

  onPressBaby = () => {
    if(this.state.isBaby === 0){
      this.setState({
        isBaby: 1,
        swipeableModal: false,
        // modalVisible: true,
      })
    } else{
      this.setState({
        // isBaby: 0,
        swipeableModal: true,

      })
    }
    // console.log('isBaby :', this.state.isBaby);
  }

  _onInfoPress = (nameBB) => {
    this.props.navigation.navigate("InfoBabyScreen",{nameBB: nameBB});

    this.setState({
      isBaby: 0,
    })
  }


  render() {
    const { isBaby } = this.state;
    const { nameBB} = this.state;

    const { params } = this.props.navigation.state;


    console.log('BabyScreen :', params.txtName);

    const currentJSX = (
      <View style={styles.containerBaby}>
        <Button
          onPress={this.onPressBaby}
          title={nameBB}
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.titleStyle}
        />
        <Image style={styles.imgBaby} source={images.girl1}/>
      </View>
    );

    const onPressJSX = (
      <View style={styles.containerBabyDetail}>
        <View style={styles.viewBabyDetail}>
          <Image style={styles.ellip113} source={images.ellip113}/>
          <Image style={styles.imgBabyActive} source={images.girl1}/>
        </View>
        <View style={styles.bgBtnDetailBB}>
          <TouchableOpacity style={styles.btnInfoBB} onPress={() => this._onInfoPress(nameBB)}>
            <Text style={styles.titleDetailBB}>Xem thông tin bé</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnInjectBB}>
            <Text style={styles.titleDetailBB}>Xem thông tin sổ tiêm</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onPressBaby} style={styles.btnDelBB}>
            <Text style={styles.titleDetailBB}>Xóa</Text>
          </TouchableOpacity>
        </View>
      </View>
    );


    const mainJSX = this.state.isBaby === 0 ? currentJSX : onPressJSX;

    return (
      <ImageBackground style={styles.container} source={images.bgBaby}>
        <View style={styles.wrapperBg}>
          <Image style={styles.ellip} source={images.elip79}/>
          <Image style={styles.bgStar} source={images.bgStar}/>
        </View>
        <View style={styles.header}>
          <Text style={styles.txtHeader}>Danh sách các bé</Text>
        </View>
        <View style={styles.wrapperMain}>
            <TouchableOpacity style={styles.btnAdd}>
              <Image style={styles.imgAdd} source={images.btnAddBaby}/>
            </TouchableOpacity>
            {mainJSX}
            <Modal
            containerStyle={{backgroundColor: '#C03869'}}
            modalStyle={{backgroundColor: '#C03869', marginBottom: vScale(35)}}
            onDismiss={() => {this.setState({ swipeableModal: false });}}
            width={0.7}
            overlayOpacity={0}
            visible={this.state.swipeableModal}
            rounded
            actionsBordered
            onSwipeOut={() => {this.setState({ swipeableModal: false });}}
            onTouchOutside={() => {this.setState({ swipeableModal: false });}}
            swipeDirection={['down', 'up']}
            modalAnimation={new SlideAnimation({ slideFrom: 'bottom' })}
            modalTitle={<ModalTitle textStyle={styles.modalTitle} style={styles.bgModalTitle} title= 'Xóa thông tin bé'/>}
            footer={
              <ModalFooter style={styles.modalFooter}>
                  <ModalButton
                  overlayOpacity={0}
                    activeOpacity={0}
                    textStyle={styles.titleModdalBtn}
                    text="Không"
                    bordered
                    onPress={() => {
                      this.setState({ swipeableModal: false });
                    }}
                    key="button-1"
                  />
                  <ModalButton
                  overlayOpacity={0}
                    activeOpacity={0}
                    textStyle={styles.titleModdalBtn}
                    text="Đồng ý"
                    bordered
                    onPress={() => {
                      this.setState({ swipeableModal: false, isBaby: 0});
                    }}
                    key="button-2"
                  />
              </ModalFooter>
            }
            >
            {/* <ModalContent style={{ backgroundColor: '#fff', paddingTop: 24, alignItems:'center' }}>
                <Text style={{fontSize:20}}>Đã thêm vào gói</Text>
            </ModalContent> */}
          </Modal>
        </View>
      <Image style={styles.bgBottom} source={images.bgBottomBar}/>
    </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  modalFooter:{
    height: vScale(95),
    paddingTop: vScale(10)
  },
  titleModdalBtn:{
    fontSize: hScale(29),
    color: '#fff',
  },
  modalTitle:{
    color: '#fff',
    fontSize: hScale(34),
    fontWeight: 'bold'
  },
  bgModalTitle:{
    backgroundColor: '#C03869',
    height: vScale(110)
  },
  titleDetailBB:{
    fontSize: hScale(20),
    color: '#fff'
  },
  btnInfoBB:{
    borderBottomWidth: 0.5,
    borderBottomColor: '#fff',
    alignItems:'center',
    justifyContent:'center',
    paddingVertical: vScale(15)
  },
  btnInjectBB:{
    borderBottomWidth: 0.5,
    borderBottomColor: '#fff',
    alignItems:'center',
    justifyContent:'center',
    paddingVertical: vScale(15)
  },
  btnDelBB:{
    alignItems:'center',
    justifyContent:'center',
    paddingVertical: vScale(15)
  },  
  bgBtnDetailBB:{
    backgroundColor: '#AF2B5B',
    borderRadius: hScale(25),
    paddingHorizontal: hScale(42),
    width: hScale(340),
    marginTop: vScale(42),
  },  
  viewBabyDetail:{
    alignItems:'center',
  },
  containerBabyDetail:{
    marginTop: vScale(70),
    // backgroundColor:'red', 
    alignItems:'center'
  },
  ellip113:{
    width: vScale(184),
    height: vScale(51),
    top: vScale(262),
    position: 'absolute',

  },  
  imgBabyActive:{
    width: vScale(176),
    height: vScale(282),
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
    alignItems:'center'
  }, 
  header:{
    width:width, 
    height: vScale(103),
    alignItems:'center',
    justifyContent:'center',
    // backgroundColor:'#C03869'

  },
  txtHeader:{
    color: '#fff',
    fontSize: hScale(35)
  },
  wrapperMain:{
    width: width,
    height: height,
    alignItems:'center',
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
    alignItems:'center'
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

})
