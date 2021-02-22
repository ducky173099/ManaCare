import React, { Component } from 'react';
import {
  View, 
  Text, 
  TouchableOpacity, 
  SectionList, 
  StyleSheet, 
  Image, 
  ImageBackground,
  TouchableHighlight
} from 'react-native';

import Modal, {
  ModalTitle,
  ModalContent,
  ModalFooter,
  ModalButton,
  SlideAnimation,
  ScaleAnimation,

} from 'react-native-modals';

import SegmentedControlTab from "react-native-segmented-control-tab";

import { Button, ButtonGroup } from 'react-native-elements';
import images from '../../assets/images/images';
import {hScale, vScale, width, height} from '../../commons/PerfectPixel';


import InjectDetailScreen from '../detail/InjectDetailScreen';
import { color } from 'react-native-reanimated';
import { ScrollView, FlatList } from 'react-native-gesture-handler';


const component = () => <Image style={styles.tabInject} source={images.inject}/>
const componentActive = () => <Image style={styles.tabInject} source={images.isInject}/>

const DataInjectVacxin = [
  {
    titleResult: 'Tuberculosis',
    bolo: images.bolo,
  },
  {
    titleResult: 'Hepatitis B',
    datiem: images.datiem,
    bolo: images.bolo,
    saptiem:images.saptiem,
    saptiem2:images.saptiem,
    saptiem3:images.saptiem,
  },
  {
    titleResult: 'Gastritis',
    saptiem:images.saptiem,
    saptiem2:images.saptiem,
  },
  {
    titleResult: 'Diphtheria, Whooping Cough,Tetanus, Poli...',
    saptiem:images.saptiem,
    saptiem2:images.saptiem,
    saptiem3:images.saptiem,
    saptiem4:images.saptiem,
    saptiem5:images.saptiem,
  },
  {
    titleResult: 'Gastritis',
    bolo: images.bolo,
    saptiem:images.saptiem,
    saptiem2:images.saptiem,
   
  },
  {
    titleResult: 'Meningtitis Meningococcuso',
    saptiem:images.saptiem,
    saptiem2:images.saptiem,
   
  },
  {
    titleResult: 'Streptococcus Pneumoniae',
    datiem: images.datiem,
    bolo: images.bolo,
    saptiem:null,
   
  },
  {
    titleResult: 'Typhoid',
    saptiem:images.saptiem,
    saptiem2:images.saptiem,
    saptiem3:images.saptiem,
    saptiem4:images.saptiem,
    saptiem5:images.saptiem,
  },

  
];

 
export default class StatisticalScreen extends Component{

  constructor() {
    super();
    this.state = {
      selected: 0,
      index: 0,
      selectedIndex: 0,
      modalVisible: false,
      swipeableModal: false,
      titleModal: '',
      isChangeInfo: 0

    };
    this.updateIndex = this.updateIndex.bind(this)
  }


  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }


  onPressModal = (titleResult) => {
    // if(this.state.isChangeInfo === 0){
    //   this.setState({
    //     isChangeInfo: 1,
    //     swipeableModal: false,
    //     // modalVisible: true,
    //   })
    // } else{
      this.setState({
 
        swipeableModal: true,
        titleModal: titleResult

      })
    // }
    // console.log('isBaby :', this.state.isBaby);
  }

  updateIndex (selectedIndex) {
    this.setState({
      selectedIndex,
    })
  }


  _onChangeInject = () => {
    console.log('okk ky');
    this.setState({
      swipeableModal: false,
    })
    this.props.navigation.navigate('ChangeInjectScreen');
  };



  render() {
    const { navigation } = this.props;
    const { selectedIndex, titleModal  } = this.state;
    // const {buttons } = this.state;
    const buttons1 = [{ element: componentActive }, { element: component }, { element: component }]
    const buttons2 = [{ element: component }, { element: componentActive }, { element: component }]
    const buttons3 = [{ element: component }, { element: component }, { element: componentActive }]

  
    return (
        <View style={styles.container} >
          <View style={styles.wrapperBg}>
            <Image style={styles.bgStar} source={images.bgStarInject}/>
          </View>
          <View style={styles.header}>
            <TouchableOpacity style={styles.btnBack}>
              <Image style={styles.babyCloud} source={images.babyCloud}/>
            </TouchableOpacity>
            <Text style={styles.txtHeader}>Thống kê</Text>
          </View>
          <View style={styles.wrapperMain}>
            <ButtonGroup
            selectedButtonStyle={{backgroundColor:'rgba(0,0,0,0)'}}
            buttonStyle={styles.buttonTabStyle}
            containerStyle={styles.containerTab}
            innerBorderStyle={styles.innerBorderStyle}
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={selectedIndex === 0 ? buttons1 : selectedIndex === 1 ? buttons2 :buttons3} />
            <View style={styles.viewTitleTab}>
              <View style={styles.initTitletab}>
                <Text style={styles.txtTitleTab}>Đã Tiêm</Text>
              </View>
              <View style={styles.initTitletab}>
                <Text style={styles.txtTitleTab}>Bỏ Lỡ</Text>
              </View>
              <View style={styles.initTitletab}>
                <Text style={styles.txtTitleTab}>Sắp Tiêm</Text>
              </View>
            </View>
              
           
            {selectedIndex === 0 && (
              <View style={styles.bgListInject}>
                <FlatList
                    contentContainerStyle={{paddingBottom: hScale(300)}}
                    showsVerticalScrollIndicator={false}
                    horizontal={false}
                    data={DataInjectVacxin}
                    renderItem={({item}) => 
                      <View style={styles.vItemInject}>
                        <View style={styles.bgTxtInit}>
                          <Text style={styles.txtItemInject}>{item.titleResult}</Text>
                        </View>
                        <TouchableOpacity onPress={()=>this.onPressModal(item.titleResult)} style={styles.bgImgInjectInit}>
                          <Image style={item.bolo != null ? styles.imgItemInject : null} source={item.bolo}/>
                          <Image style={item.datiem != null ? styles.imgItemInject : null} source={item.datiem}/>
                          <Image style={item.saptiem != null ? styles.imgItemInject : null} source={item.saptiem}/>
                          <Image style={item.saptiem != null ? styles.imgItemInject : null} source={item.saptiem2}/>
                          <Image style={item.saptiem != null ? styles.imgItemInject : null} source={item.saptiem3}/>
                          <Image style={item.saptiem != null ? styles.imgItemInject : null} source={item.saptiem4}/>
                          <Image style={item.saptiem != null ? styles.imgItemInject : null} source={item.saptiem5}/>
                        </TouchableOpacity>
                      </View>
                    }
                    keyExtractor={item => item.id}
                />
      
              </View>
            )}
            {selectedIndex === 1 && (
              <View style={styles.bgListInject}>
                <FlatList
                    contentContainerStyle={{paddingBottom: hScale(300)}}
                    showsVerticalScrollIndicator={false}
                    horizontal={false}
                    data={DataInjectVacxin}
                    renderItem={({item}) => 
                      <View style={styles.vItemInject}>
                        <View style={styles.bgTxtInit}>
                          <Text style={styles.txtItemInject}>{item.titleResult}</Text>
                        </View>
                        <View onPress={() => this.onPressModal(item.titleResult)} style={styles.bgImgInjectInit}>
                          <Image style={item.bolo != null ? styles.imgItemInject : null} source={item.bolo}/>
                          <Image style={item.datiem != null ? styles.imgItemInject : null} source={item.datiem}/>
                          <Image style={item.saptiem != null ? styles.imgItemInject : null} source={item.saptiem}/>
                          <Image style={item.saptiem != null ? styles.imgItemInject : null} source={item.saptiem2}/>
                          <Image style={item.saptiem != null ? styles.imgItemInject : null} source={item.saptiem3}/>
                          <Image style={item.saptiem != null ? styles.imgItemInject : null} source={item.saptiem4}/>
                          <Image style={item.saptiem != null ? styles.imgItemInject : null} source={item.saptiem5}/>
                        </View>
                      </View>
                    }
                    keyExtractor={item => item.id}
                />
      
              </View>
            )}
            {selectedIndex === 2 && (
              <View style={styles.bgListInject}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    horizontal={false}
                    data={DataInjectVacxin}
                    contentContainerStyle={{paddingBottom: hScale(300)}}
                    renderItem={({item}) => 
                      <View style={styles.vItemInject}>
                        <View style={styles.bgTxtInit}>
                          <Text style={styles.txtItemInject}>{item.titleResult}</Text>
                        </View>
                        <View onPress={() => this.onPressModal(item.titleResult)} style={styles.bgImgInjectInit}>
                          <Image style={item.bolo != null ? styles.imgItemInject : null} source={item.bolo}/>
                          <Image style={item.datiem != null ? styles.imgItemInject : null} source={item.datiem}/>
                          <Image style={item.saptiem != null ? styles.imgItemInject : null} source={item.saptiem}/>
                          <Image style={item.saptiem != null ? styles.imgItemInject : null} source={item.saptiem2}/>
                          <Image style={item.saptiem != null ? styles.imgItemInject : null} source={item.saptiem3}/>
                          <Image style={item.saptiem != null ? styles.imgItemInject : null} source={item.saptiem4}/>
                          <Image style={item.saptiem != null ? styles.imgItemInject : null} source={item.saptiem5}/>
                        </View>
                      </View>
                    }
                    keyExtractor={item => item.id}
                />
      
              </View>
            )}

            <Modal
              containerStyle={{backgroundColor: '#C03869', borderRadius: hScale(29)}}
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
              modalTitle={<ModalTitle textStyle={styles.modalTitle} style={styles.bgModalTitle} title= {titleModal}/>}
              footer={
              <ModalFooter style={styles.modalFooter}>
                  <ModalButton
                    style={styles.initModalFooter}
                    overlayOpacity={0}
                    activeOpacity={0}
                    textStyle={styles.titleModdalBtn}
                    text="Đóng"
                    bordered
                    onPress={() => {
                      this.setState({ swipeableModal: false });
                    }}
                    key="button-1"
                  />
                  <ModalButton
                    onPress={this._onChangeInject}
                    style={styles.initModalFooter}
                    overlayOpacity={0}
                    activeOpacity={0}
                    textStyle={styles.titleModdalBtn}
                    text="Sửa thông tin"
                    bordered
                    key="button-2"
                  />
              </ModalFooter>
            }
            >
              <ModalContent style={styles.bgModalContent}>
                <View style={styles.bgModalContentInit}>
                  <View style={styles.bgTitleModalMain}>
                    <Text style={styles.txtItemTitleModal}>Injection :</Text>
                    <Text style={styles.txtItemTitleModal}>Medicine :</Text>
                    <Text style={styles.txtItemTitleModal}>Date :</Text>
                    <Text style={styles.txtItemTitleModal}>Status :</Text>
                    <Text style={styles.txtItemTitleModal}>Note :</Text>
                  </View>
                  <View style={styles.bgResultTitleModal}>
                    <Text style={styles.txtItemTitleModal}>1/1</Text>
                    <Text style={styles.txtItemTitleModal}></Text>
                    <Text style={styles.txtItemTitleModal}>28/10/2019</Text>
                    <Text style={styles.txtItemTitleModal}>Đã tiêm</Text>
                    <Text style={styles.txtItemTitleModal}>Ok Ban oi</Text>
                  </View>
                </View>
              </ModalContent>
            </Modal>
          </View>
          <Image style={styles.bgBottom} source={images.bgBotInject}/>

         
        </View>
    );
  }
}

const styles = StyleSheet.create({
  txtItemTitleModal:{
    fontSize: hScale(21),
    color: '#fff',
    marginBottom: vScale(15)
  },
  bgTitleModalMain:{
    width: hScale(162)
  },  
  bgModalContentInit:{
    flexDirection: 'row'
  },  
  initModalFooter:{
    height: hScale(70),
    alignItems:'center',
    justifyContent:'center'
  },  
  bgModalContent:{
    backgroundColor: '#C03869', 
    borderWidth: 0,
    paddingHorizontal: hScale(38),
    paddingVertical: vScale(15)
 
  },  
  modalFooter:{
    height: hScale(70),
    alignItems:'center',
    justifyContent:'center'
  },
  titleModdalBtn:{
    fontSize: hScale(25),
    color: '#fff',

  },
  modalTitle:{
    color: '#fff',
    fontSize: hScale(31),
    fontWeight: 'bold'
  },
  bgModalTitle:{
    backgroundColor: '#C03869',
    height: vScale(65),
    borderWidth: 0, 
    borderTopWidth: 0,
    borderBottomColor: 'rgba(0,0,0,0)',
    alignItems:'center',
    justifyContent:'center'
  },
  titleDetailBB:{
    fontSize: hScale(20),
    color: '#fff'
  },
  bgTxtInit:{
    width: hScale(210)
  },
  bgImgInjectInit:{
    // marginLeft: hScale(40)
    flexDirection:'row',
    width: hScale(277),
  },
  txtItemInject:{
    fontSize: hScale(21),
    fontWeight: 'bold',
    color: '#C03869',
    width: hScale(150)
  },
  vItemInject:{
    flexDirection: 'row',
    width: hScale(525),
    marginTop: hScale(22),
    marginBottom: vScale(100),
    alignItems:'center',

  },
  imgItemInject:{
    width: hScale(39),
    height: hScale(39),

  },  
  bgListInject:{
    width: hScale(628),
    height: hScale(863),
    backgroundColor: '#fff',
    borderRadius: hScale(74),
    marginTop: hScale(16),
    alignItems:'center',
    marginBottom: hScale(350),

  },
  initTitletab:{
    width: width/3,
    alignItems:'center'
  },  
  viewTitleTab:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'space-around',
    paddingHorizontal: hScale(50),
    width: width,
  },
  txtTitleTab:{
   fontSize: hScale(29),
   color: '#fff'
  },
  tabInject:{
    width: hScale(61),
    height: hScale(61)
  },  
  innerBorderStyle:{
    width: 0
  },  
  buttonTabStyle:{
    // width: hScale(61),
    // height: hScale(61),
    alignItems:'center',
    marginHorizontal:hScale(75),
    // backgroundColor:'green'
    
  },
  containerTab:{
    borderWidth: 0, 
    backgroundColor:'rgba(0,0,0,0)',
    height: hScale(61),
    alignItems:'center',
    // backgroundColor:'blue',
    width: width,
    paddingHorizontal: hScale(50)
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
    height: vScale(510),
    alignItems:'center',
    backgroundColor:'#C03869'

  },
  txtHeader:{
    color: '#fff',
    fontSize: hScale(35),
    marginTop: vScale(29)
  },
  wrapperMain:{
    width: width,
    height: height,
    alignItems:'center',
    position:'absolute',
    marginTop:vScale(145),
  },
  btnBack:{
    borderRadius: 50,
    position: 'absolute',
    left: vScale(20)
  },
  babyCloud:{
    width: hScale(120),
    height: hScale(87),
    marginTop: vScale(22)
  }

})
