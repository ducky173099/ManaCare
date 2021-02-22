
import React, { Component } from 'react';
import MyApp from './src/MyApp';
import Splash from './src/screens/Splash';

export default class App extends Component {
  constructor(props) {
    super(props);
    // this.state = { isLoading: true }
  }

  // performTimeConsumingTask = async() => {
  //   return new Promise((resolve) =>
  //     setTimeout(
  //       () => { resolve('result') },
  //       5000
  //     )
  //   );
  // }

  // async componentDidMount() {
  //   // Preload data from an external API
  //   // Preload data using AsyncStorage
  //   const data = await this.performTimeConsumingTask();
  //   if (data !== null) {
  //     this.setState({ isLoading: false });
  //   }
  // }
  render() {
    // if (this.state.isLoading) {
    //   return <Splash />;
    // }
  
    return (
      <MyApp/>
    );
  }
}
