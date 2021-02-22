import {Dimensions} from 'react-native';

export const {height, width} = Dimensions.get('window');
export const isTablet = width / height > 0.6;
export const guidelineBaseWidth = 720;
export const guidelineBaseHeight = 1280;
export const hScale = (size) => (width / guidelineBaseWidth) * size;
export const vScale = (size) => (height / guidelineBaseHeight) * size;
export const radius = hScale(5);
