import React, { Component, useState } from 'react';
import {View, Text, Image, ImageBackground, Animated, TouchableOpacity, Easing} from 'react-native';

import {styles, images} from '../assets';



const FadeInView = (props) => {
    const [fadeAnim] = useState(new Animated.Value(0))  // Initial value for opacity: 0
    React.useEffect(() => {
      Animated.timing(
        fadeAnim,
        {
          toValue: 1,
          duration: 5000,
        }
      ).start();
    }, [])
  
    return (
      <Animated.View                 // Special animatable View
        style={{
          ...props.style,
          opacity: fadeAnim,         // Bind opacity to animated value
        }}
      >
        {props.children}
      </Animated.View>
    );
}
  
export default class Splash extends Component {
    constructor () {
        super()
        this.animatedValue = new Animated.Value(0),
        this.state = { 
            stopAnimation: false,
            translateXY: new Animated.ValueXY({ x: 400, y: -200 }),
            translate: new Animated.Value(-200),
            translateXRight: new Animated.Value(200),
            translateYBottom: new Animated.Value(200),
            endValue: {x: 0, y: 0},
            duration: 1500,
        }
    }

    componentDidMount () {
        this.animateXY();
        this.animateX();
        this.animateXRight();
        this.animateYBottom();
    }
    animateXY () {
        // this.animatedValue.setValue(0)
        // Animated.timing(
        //     this.animatedValue,
        //     {
        //         toValue: 1,
        //         duration: 1000,
        //         easing: Easing.linear
        //     }
        // ).start(() =>{
        //     if(this.state.stopAnimation === true) {
        //         this.animate()
        //     }
        // })

        Animated.timing(this.state.translateXY, {
            toValue: this.state.endValue,
            duration: this.state.duration,
            useNativeDriver: true,
        }).start();


        // Animated.spring(this.moveAnimation, {
        //     toValue: {x: 250, y: 10},
        // }).start()
    }

    animateX(){
        Animated.timing(this.state.translate, {
            toValue: this.state.endValue,
            duration: this.state.duration,
            useNativeDriver: true,
        }).start();
    }
    animateYBottom(){
        Animated.timing(this.state.translateYBottom, {
            toValue: this.state.endValue,
            duration: this.state.duration,
            useNativeDriver: true,
        }).start();
    }
    animateXRight(){
        Animated.timing(this.state.translateXRight, {
            toValue: this.state.endValue,
            duration: this.state.duration,
            useNativeDriver: true,
        }).start();
    }


    render() {
        // const marginLeft = this.animatedValue.interpolate({
        //     inputRange: [0, 1],
        //     outputRange: [0, -500]
        // });


        return (
            <ImageBackground source={images.bgSplash} style={styles.containerSplash}>
                <View style={styles.wrapperCSTop}>
                    <Animated.View style={[
                        styles.styleAnim,
                        {
                        transform: [
                            {
                            translateX: this.state.translateXY.x,
                            translateY: this.state.translateXY.y,
                            },
                        ],
                        },
                    ]}>
                        <Image style={styles.csTop3} source={images.csTop3}/>
                    </Animated.View>
                    <Animated.View style={[
                        styles.styleAnim,
                        {
                        transform: [
                            {
                            translateX: this.state.translate,
                            },
                        ],
                        },
                    ]}>
                        <Image style={styles.csTop2} source={images.csTop2}/>
                    </Animated.View>
                    <Animated.View style={[
                        styles.styleAnim,
                        {
                        transform: [
                            {
                            translateY: this.state.translate,
                            },
                        ],
                        },
                    ]}>
                        <Image style={styles.csTop1} source={images.csTop1}/>
                    </Animated.View>
                    <FadeInView style={{alignItems:'center'}}>
                        <ImageBackground style={styles.bgLogoApp} source={images.shadowLogo}>
                            <Image style={styles.logoApp} source={images.logoApp}/>
                        </ImageBackground>
                    </FadeInView>
                </View>
                <View style={styles.wrapperCSCenter}>
                    <Animated.View style={[
                        styles.cloud1,
                        {
                        transform: [
                            {
                            translateX: this.state.translateXRight,
                            },
                        ],
                        },
                    ]}>
                        <Image style={styles.csCenter1} source={images.csCenter1}/>
                    </Animated.View>
                    <Animated.View style={[
                        styles.cloud1,
                        {
                        transform: [
                            {
                            translateX: this.state.translate,
                            },
                        ],
                        },
                    ]}>
                        <Image style={styles.csCenter2} source={images.csCenter2}/>
                    </Animated.View>
                </View>
                <Animated.View style={[
                        styles.animBottom,
                        {
                        transform: [
                            {
                            translateY: this.state.translateYBottom,
                            },
                        ],
                        },
                    ]}>
                    <Image style={styles.csBottom} source={images.csBottom}/>
                </Animated.View>
            </ImageBackground>
        );
    }
}

