import {StyleSheet} from 'react-native';
import {hScale, vScale, width, height} from './PerfectPixel';
import colors from '../assets/colors/colors';

const commons = StyleSheet.create({
  container:{
    width: width,
    height: height,
  },
  bgBottom:{
    width: hScale(871),
    height: vScale(400),
    position:'absolute',
    bottom:0,
    left: -20,

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
  },
})


export default commons;