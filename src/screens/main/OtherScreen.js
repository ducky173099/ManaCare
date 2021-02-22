
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
  FlatList
} from 'react-native';
import Modal, {
  ModalTitle,
  ModalContent,
  ModalFooter,
  ModalButton,
  SlideAnimation,
  ScaleAnimation,

} from 'react-native-modals';

import { Button } from 'react-native-elements';
import images from '../../assets/images/images';
import {hScale, vScale, width, height} from '../../commons/PerfectPixel';

import InjectDetailScreen from '../detail/InjectDetailScreen';
import { color } from 'react-native-reanimated';

const DataOther = [
  {
    id:1,
    title: 'Reset Ứng Dụng',
    imgOther: images.icReset
  },
  {
    id:2,
    title: 'Cài Đặt Thông Báo',
    imgOther: images.icLotify
  },
  {
    id:3,
    title: 'Thông Tin Lưu Ý',
    imgOther: images.icNote
  },
  {
    id:4,
    title: 'Đánh Giá Ứng Dụng',
    imgOther: images.icLike
  },
  {
    id:5,
    title: 'Chia Sẻ Ứng Dụng',
    imgOther: images.icShare
  },
  {
    id:6,
    title: 'Góp Ý Ứng Dụng',
    imgOther: images.icMessage
  },
  {
    id:7,
    title: 'Ứng Dụng Khác',
    imgOther: images.icAppOther
  },
  {
    id:8,
    title: 'Ngôn Ngữ',
    imgOther: images.icLanguage
  },

 
];

export default class OtherScreen extends Component {
  constructor(props){
    super(props);
    this.state = { 
      styleIndex: 0,
      modalVisible: false,
      swipeableModal: false,
    };
  }

  onPressModal = () => {
      this.setState({
        swipeableModal: true,
      })
  }


 _onActionOther = (id) => {
   if(id == 1){
      this.onPressModal();
   } else if(id == 2){
    this.props.navigation.navigate ('SettingLotifyScreen');
   }
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
            <Text style={styles.txtHeader}>Thông Tin Khác</Text>
          </View>
          <View style={styles.wrapperMain}>
          <FlatList
                  contentContainerStyle={{paddingBottom: hScale(500)}}
                  showsVerticalScrollIndicator={false}
                  horizontal={false}
                  data={DataOther}
                  renderItem={({item}) => 
                    <View style={styles.sectionItem}>
                      <Image style={styles.numInject} source={item.imgOther}/>
                      <View style={styles.viewInject}>
                        <View style={styles.nameVacxin}>
                          <Text style={styles.txtSectionItem}>
                            {item.title}
                          </Text>
                        </View>
                        <TouchableOpacity onPress={() => this._onActionOther(item.id)}>
                          <Image style={styles.arrowList} source={images.arrowList}/>
                        </TouchableOpacity>
                      </View>
                    </View>
                  }
                  keyExtractor={item => item.id}
                />
            <Modal
              containerStyle={{backgroundColor: '#C03869', borderRadius: hScale(58)}}
              modalStyle={{backgroundColor: '#C03869', marginBottom: vScale(35),borderRadius: hScale(38)}}
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
              modalTitle={<ModalTitle textStyle={styles.modalTitle} style={styles.bgModalTitle} title="Xóa thông tin"/>}
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
                <Text style={styles.txtContent}>Tất cả mọi thông tin về bé, sổ tiêm chủng và thống kê sẽ bị xóa khỏi ứng dụng. Bạn chắc chắn muốn reset ứng dụng?</Text>
              </ModalContent>
            </Modal>
            </View>
          <Image style={styles.bgBottom} source={images.bgBotInject}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  titleModdalBtn:{
    fontSize: hScale(25),
    color: '#fff',

  },
  initModalFooter:{
    height: hScale(98),
    alignItems:'center',
    justifyContent:'center'
  },
  txtContent:{
    fontSize: hScale(26),
    color:'#fff',
    textAlign:'center'
  },
  bgModalTitle:{
    backgroundColor: '#C03869',
    height: vScale(98),
    borderWidth: 0, 
    borderTopWidth: 0,
    borderBottomColor: 'rgba(0,0,0,0)',
    alignItems:'center',
    justifyContent:'center'
  },
  modalTitle:{
    color: '#fff',
    fontSize: hScale(36),
    fontWeight: 'bold'
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
    paddingTop: hScale(20)
    // marginBottom: hScale(340)
  },
  viewInject:{
    width: '82%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderBottomColor: '#C03869',
    alignItems:'center',
  },
  sectionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width,
    paddingHorizontal: hScale(38),
    // marginTop: vScale(40)
  },

  txtSectionItem: {
    fontSize: hScale(29),
    fontWeight:'bold',
    color:'#C03869'
  },
  numInject:{
    width: hScale(64),
    height: hScale(66),
    alignItems:'center',
    justifyContent:'center',
    marginVertical: vScale(25)
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
