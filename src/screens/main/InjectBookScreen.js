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

import DatePicker from 'react-native-datepicker';

import DateTimePicker from '@react-native-community/datetimepicker';

import SegmentedControlTab from "react-native-segmented-control-tab";

import { Button, ButtonGroup } from 'react-native-elements';
import images from '../../assets/images/images';
import {hScale, vScale, width, height} from '../../commons/PerfectPixel';
import { color } from 'react-native-reanimated';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

const DataBookInject = [
  {
    mau: 1,
    titleResult: 'Tuberculosis',
    date: '02/02/2019',
    dateMiss: 'Đã lỡ: 1 ngày',
    color: '#C81414'
  },
  {
    mau: 2,
    titleResult: 'Tuberculosis',
    date: '02/02/2019',
    dateMiss: 'Sắp tiêm: 1 ngày 3 tháng',
    color: '#B7B7B7'
  },
  {
    mau: 3,
    titleResult: 'Tuberculosis',
    date: '02/02/2019',
    dateMiss: 'Đã tiêm: 05/02/2019',
    color: '#075456'
  },
  {
    mau: 1,
    titleResult: 'Tuberculosis',
    date: '02/02/2019',
    dateMiss: 'Đã lỡ: 1 ngày',
    color: '#C81414'
  },
  {
    mau: 1,
    titleResult: 'Tuberculosis',
    date: '02/02/2019',
    dateMiss: 'Đã lỡ: 1 ngày',
    color: '#C81414'
  },
  {
    mau: 1,
    titleResult: 'Tuberculosis',
    date: '02/02/2019',
    dateMiss: 'Đã lỡ: 1 ngày',
    color: '#C81414'
  },
  {
    mau: 1,
    titleResult: 'Tuberculosis',
    date: '02/02/2019',
    dateMiss: 'Đã lỡ: 1 ngày',
    color: '#C81414'
  },
  {
    mau: 1,
    titleResult: 'Tuberculosis',
    date: '02/02/2019',
    dateMiss: 'Đã lỡ: 1 ngày',
    color: '#C81414'
  },
  {
    mau: 1,
    titleResult: 'Tuberculosis',
    date: '02/02/2019',
    dateMiss: 'Đã lỡ: 1 ngày',
    color: '#C81414'
  },
  {
    mau: 1,
    titleResult: 'Tuberculosis',
    date: '02/02/2019',
    dateMiss: 'Đã lỡ: 1 ngày',
    color: '#C81414'
  },
  {
    mau: 1,
    titleResult: 'Tuberculosis',
    date: '02/02/2019',
    dateMiss: 'Đã lỡ: 1 ngày',
    color: '#C81414'
  },
  {
    mau: 1,
    titleResult: 'Tuberculosis',
    date: '02/02/2019',
    dateMiss: 'Đã lỡ: 1 ngày',
    color: '#C81414'
  },
  {
    mau: 1,
    titleResult: 'Tuberculosis',
    date: '02/02/2019',
    dateMiss: 'Đã lỡ: 1 ngày',
    color: '#C81414'
  },
  
];

const dataTab = ['Tất cả', 'Đã tiêm', 'Sắp tiêm', 'Bỏ lỡ'];

 
export default class InjectBookScreen extends Component{

  constructor() {
    super();
    this.state = {
      selectedIndex: 0,
      selectedIndices: [0],
      customStyleIndex: 0,
      dateSelected: ''
    };
  }
  handleIndexChange = index => {
    this.setState({
      ...this.state,
      selectedIndex: index
    });
  };

  handleSingleIndexSelect = (index) => {
    this.setState(prevState => ({ ...prevState, selectedIndex: index }))
  }

  handleMultipleIndexSelect = (index) => {
    const { selectedIndices } = this.state

    if (selectedIndices.includes(index)) {
      this.setState(prevState => ({
        ...prevState,
        selectedIndices: selectedIndices.filter((i) => i !== index),
      }))
    } else {
      this.setState(prevState => ({
        ...prevState,
        selectedIndices: [
          ...selectedIndices,
          index,
        ],
      }))
    }
  }

  handleCustomIndexSelect = (index) => {
    this.setState(prevState => ({ ...prevState, customStyleIndex: index }))
  }





  render() {
    const { selectedIndex, selectedIndices, customStyleIndex } = this.state
  
    return (
        <View style={styles.container} >
          <View style={styles.wrapperBg}>
            <Image style={styles.bgStar} source={images.bgStarInject}/>
          </View>
          <View style={styles.header}>
            <Text style={styles.txtHeader}>Sổ Tiêm Chủng</Text>
            <ImageBackground style={{width: hScale(570), height:hScale(315)}} source={images.bgDateInject}>
            
            </ImageBackground>
            
          </View>
          <View style={{position:'absolute', zIndex: 20, width:width}}>
            <Image style={{width: hScale(100), height: vScale(402)}} source={images.b1}/>
            <Image style={{width: hScale(134), height: vScale(175), position:'absolute', left:hScale(67)}} source={images.b2}/>
            <Image style={{width: hScale(100), height: vScale(131), position:'absolute', right:hScale(87)}} source={images.b3}/>
            <Image style={{width: hScale(100), height: vScale(227), position:'absolute',right:0}} source={images.b4}/>
          </View>
          <View style={{width:width, height:height, position:'absolute', alignItems:'center'}}>
            <Calendar
                onDayPress={(day) => {
                  this.setState({
                    dateSelected:{[day.dateString]:{selected: true,  dotColor: '#075456', marginTop:hScale(15),}}
                  },() => {
                    console.log(this.state.dateSelected);
                    console.log('selected day', day);
                  })
                }}
                markedDates={this.state.dateSelected}
                onDayLongPress={(day) => {console.log('selected day', day)}}
                style={{
                  height: hScale(300),
                  position:'absolute',
                  zIndex: 10000,
                  top:hScale(100),
                  width:hScale(350)
                }}
                theme={{
                  backgroundColor: 'rgba(0,0,0,0)',
                  calendarBackground: 'rgba(0,0,0,0)',
                  textSectionTitleColor: '#C03869',
                  selectedDayBackgroundColor: '#075456',
                  selectedDayTextColor: '#ffffff',
                  todayTextColor: '#C03869',
                  // dayTextColor: '#2d4150',
                  // textDisabledColor: '#d9e1e8',
                  dotColor: '#075456',
                  selectedDotColor: '#075456',
                  arrowColor: '#C03869',
                  disabledArrowColor: '#d9e1e8',
                  monthTextColor: '#C03869',
                  indicatorColor: '#075456',
                  textDayFontFamily: 'monospace',
                  textMonthFontFamily: 'monospace',
                  textDayHeaderFontFamily: 'monospace',
                  textDayFontWeight: 'bold',
                  textMonthFontWeight: '300',
                  textDayHeaderFontWeight: '300',
                  textDayFontSize: hScale(17),
                  textMonthFontSize: hScale(20),
                  textDayHeaderFontSize: hScale(17)
                }}
              />
              <View style={{position:'absolute', top: hScale(160), right:hScale(125)}}>
                <Image style={{width: hScale(57), height: hScale(59)}} source={images.bebo2}/>
                <Text style={{color:'#C03869', fontSize:hScale(20)}}>Be Bo</Text>
              </View>
          </View>
          <View style={styles.wrapperMain}>
          
            <View style={styles.bgListBookInject}>
              <SegmentedControlTab

                values={dataTab}
                selectedIndex={customStyleIndex}
                onTabPress={this.handleCustomIndexSelect}
                borderRadius={0}
                tabsContainerStyle={{ borderRadius:hScale(74) }}
                tabStyle={styles.tabStyle}
                activeTabStyle={styles.activeTabStyle}
                tabTextStyle={styles.tabTextStyle}
                activeTabTextStyle={{color:'#C03869'}}
              />
                
              {customStyleIndex === 0 && 
                <FlatList
                  contentContainerStyle={{paddingBottom: hScale(500)}}
                  showsVerticalScrollIndicator={false}
                  horizontal={false}
                  data={DataBookInject}
                  renderItem={({item}) => 
                  <View style={{ marginBottom: vScale(40)}}>
                      <Text style={styles.txtDate}>Tháng 1 năm 2019</Text>
                      <View style={styles.bgInject}>
                          <Text style={styles.txtDate}>Mũi 1/1</Text>
                          <View style={styles.lineColor}/>
                          <View style={styles.bgContent}>
                            <Text style={styles.nameVacxin}>Tubeculosis</Text>
                            <View style={styles.bgDateVacxin}>
                              <Text style={styles.txtDateInject}>Ngày tiêm: {item.date}</Text>
                              <View style={{width: hScale(167)}}>
                                <Text style={{fontSize: hScale(15),color:item.color}}>{item.dateMiss}</Text>
                              </View>
                              <View style={{width: hScale(15), height:hScale(15), backgroundColor:item.color, borderRadius:50}}/>
                            </View>
                          </View>
                      </View>
                  </View>
                    
                  }
                  keyExtractor={item => item.id}
                />
              }
              {customStyleIndex === 1 && 
                <FlatList
                  contentContainerStyle={{paddingBottom: hScale(500)}}
                  showsVerticalScrollIndicator={false}
                  horizontal={false}
                  data={DataBookInject}
                  renderItem={({item}) => 
                  (item.mau === 3 ? 
                    <View style={{ marginBottom: vScale(40)}}>
                      <Text style={styles.txtDate}>Tháng 1 năm 2019</Text>
                      <View style={styles.bgInject}>
                          <Text style={styles.txtDate}>Mũi 1/1</Text>
                          <View style={styles.lineColor}/>
                          <View style={styles.bgContent}>
                            <Text style={styles.nameVacxin}>Tubeculosis</Text>
                            <View style={styles.bgDateVacxin}>
                              <Text style={styles.txtDateInject}>Ngày tiêm: {item.date}</Text>
                              <View style={{width: hScale(167)}}>
                                <Text style={{fontSize: hScale(15),color:item.color}}>{item.dateMiss}</Text>
                              </View>
                              <View style={{width: hScale(15), height:hScale(15), backgroundColor:item.color, borderRadius:50}}/>
                            </View>
                          </View>
                      </View>
                    </View> : null
                  )
                  }
                  keyExtractor={item => item.id}
                />
              }
              {customStyleIndex === 2 && 
                <FlatList
                  contentContainerStyle={{paddingBottom: hScale(500)}}
                  showsVerticalScrollIndicator={false}
                  horizontal={false}
                  data={DataBookInject}
                  renderItem={({item}) => 
                  (item.mau === 2 ? 
                    <View style={{ marginBottom: vScale(40)}}>
                      <Text style={styles.txtDate}>Tháng 1 năm 2019</Text>
                      <View style={styles.bgInject}>
                          <Text style={styles.txtDate}>Mũi 1/1</Text>
                          <View style={styles.lineColor}/>
                          <View style={styles.bgContent}>
                            <Text style={styles.nameVacxin}>Tubeculosis</Text>
                            <View style={styles.bgDateVacxin}>
                              <Text style={styles.txtDateInject}>Ngày tiêm: {item.date}</Text>
                              <View style={{width: hScale(167)}}>
                                <Text style={{fontSize: hScale(15),color:item.color}}>{item.dateMiss}</Text>
                              </View>
                              <View style={{width: hScale(15), height:hScale(15), backgroundColor:item.color, borderRadius:50}}/>
                            </View>
                          </View>
                      </View>
                    </View> : null
                  )
                  }
                  keyExtractor={item => item.id}
                />
              }
              {customStyleIndex === 3 && 
                <FlatList
                  contentContainerStyle={{paddingBottom: hScale(500)}}
                  showsVerticalScrollIndicator={false}
                  horizontal={false}
                  data={DataBookInject}
                  renderItem={({item}) => 
                  (item.mau === 1 ? 
                    <View style={{ marginBottom: vScale(40)}}>
                      <Text style={styles.txtDate}>Tháng 1 năm 2019</Text>
                      <View style={styles.bgInject}>
                          <Text style={styles.txtDate}>Mũi 1/1</Text>
                          <View style={styles.lineColor}/>
                          <View style={styles.bgContent}>
                            <Text style={styles.nameVacxin}>Tubeculosis</Text>
                            <View style={styles.bgDateVacxin}>
                              <Text style={styles.txtDateInject}>Ngày tiêm: {item.date}</Text>
                              <View style={{width: hScale(167)}}>
                                <Text style={{fontSize: hScale(15),color:item.color}}>{item.dateMiss}</Text>
                              </View>
                              <View style={{width: hScale(15), height:hScale(15), backgroundColor:item.color, borderRadius:50}}/>
                            </View>
                          </View>
                      </View>
                    </View> : null
                  )
                  }
                  keyExtractor={item => item.id}
                />
              }
       
                
            </View>
          </View>
          <Image style={styles.bgBottom} source={images.bgBotInject}/>

         
        </View>
    );
  }
}

const styles = StyleSheet.create({
  viewCircle:{
    
  },
  bgContent:{
    width: hScale(430),
    paddingRight:hScale(10)
  },
  txtDateMiss:{
    
  },
  txtDateInject:{
    fontSize: hScale(15),
    color:'#B7B7B7'
  },
  nameVacxin:{
    fontSize: hScale(17),
    fontWeight: 'bold',
    color:'#C03869'
  },
  bgDateVacxin:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    textAlign: "left"
  },
  lineColor:{
    width: hScale(1),
    height: hScale(38),
    backgroundColor:'#C03869'
  },
  txtDate:{
    fontSize: hScale(20),
    fontWeight: 'bold',
    color:'#C03869'
  },
  bgInject:{
    backgroundColor:'#fff', 
    width:hScale(560), 
    height: hScale(70), 
    borderRadius: hScale(19), 
    paddingHorizontal: hScale(15), 
    paddingVertical:hScale(10),
    alignItems:'center',
    marginTop: vScale(17),
    justifyContent:'space-between',
    flexDirection:'row',
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: hScale(19),
    elevation: 5,
  },
  tabTextStyle:{
    color: '#C03869', 
    fontWeight: 'bold'
  },
  activeTabStyle:{
    backgroundColor: 'rgba(0,0,0,0)', 
    borderBottomWidth:1, 
    borderBottomColor:'#C03869'
  },  
  tabStyle:{
    backgroundColor: 'rgba(0,0,0,0)', 
    borderWidth: 0, 
    borderColor: 'transparent',
    marginBottom: hScale(28)
  },
  bgListBookInject:{
    width: hScale(628),
    height: hScale(863),
    backgroundColor: '#fff',
    borderRadius: hScale(74),
    marginTop: vScale(150),
    alignItems:'center',
    marginBottom: hScale(350),
    paddingHorizontal: hScale(30),
    paddingTop: vScale(25)
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
    marginTop:vScale(300),
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
