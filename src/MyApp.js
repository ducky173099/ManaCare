import React from 'react';
import Splash from '../src/screens/Splash';
import {View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
//import all the required component
import AppIntroSlider from 'react-native-app-intro-slider';
//import AppIntroSlider to use it


// import images from './src/assets/images/images';
import {styles, images, colors} from '../src/assets';

const slides = [
  {
    key: 's1',
    text: 'Best Recharge offers',
    title: 'Mobile Recharge',
    image: images.imgIntro1,
    backGround: images.bgIntro1
  },
  {
    key: 's2',
    title: 'Flight Booking',
    text: 'Upto 25% off on Domestic Flights',
    image: images.imgIntro2,
    backGround: images.bgIntro2
  },
  {
    key: 's3',
    title: 'Great Offers',
    text: 'Enjoy Great offers on our all services',
    image: images.imgIntro3,
    backGround: images.bgIntro1
  },

];


export default class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      showRealApp: false,
      showAction: false,
      //To show the main page of the app
    };
  }

  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        5000
      )
    );
  }

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();
    if (data !== null) {
      this.setState({ isLoading: false });
    }
  }

  _onAction = () => {
    this.setState({
      showAction: true
    })
  };
  _onDone = () => {
    this.setState({ showRealApp: true });
  };
  _onSkip = () => {
    this.setState({ showRealApp: true });
  };
  _renderItem = ({ item }) => {
    return (
      <ImageBackground
        source={item.backGround}
        style={styles.containerIntro}>
        {/* <Text style={styles.titleIntro}>{item.title}</Text> */}
        <Image style={styles.imgIntro} source={item.image} />
        {/* <Text style={styles.txtIntro}>{item.text}</Text> */}
        <TouchableOpacity style={styles.btnSkipIntro} onPress={() => this._onSkip()}>
          <Text>Skip</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  };

  renderPrevButton = () => {
    return (
      <Image style={styles.btnPrevIntro} source={images.introBack}/>
    );
  };
  renderNextButton = () => {
    return (
      <Image style={styles.btnNextIntro} source={images.introNext}/>
    );
  };
  renderDoneButton = () => {
    return (
      <TouchableOpacity onPress={() => this._onSkip()}>
        <Image style={styles.btnNextIntro} source={images.introNext}/>
      </TouchableOpacity>
    );
  };

  render() {
    if (this.state.isLoading) {
      return <Splash />;
    }
    
    //If false show the Intro Slides
    console.log('showRealApp :', this.state.showRealApp);

    if (this.state.showRealApp && !this.state.showAction) {
      //Real Application
      return (
        <ImageBackground style={styles.containerIntro} source={images.bgIntro1}>
          <Image style={styles.imgIntro} source={images.imgIntro3} />
          <TouchableOpacity style={styles.btnActionIntro} onPress={() => this._onAction()}> 
            <Image style={styles.txtAction} source={images.txtAction}/>
          </TouchableOpacity>
        </ImageBackground>
      );
    } else if(!this.state.showRealApp){
      //Intro slides
      return (
        <AppIntroSlider
          slides={slides}
          renderItem={this._renderItem}
          // onDone={this._onDone}
          // showSkipButton={true}
          renderDoneButton={this.renderDoneButton}
          renderPrevButton={this.renderPrevButton}
          renderNextButton={this.renderNextButton}
          showPrevButton={true}
          showNextButton={true}
          onSkip={this._onSkip}
        />
      );
    } 
    else if(this.state.showAction && this.state.showRealApp){
      return (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 50,
          }}>
          <Text>
            This will be your screen when you click Skip from any slide or Done
            button at last
          </Text>
        </View>
      );
    }

  }
}


