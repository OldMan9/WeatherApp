import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements'
import { Search } from './src/screens/Search'

import Navigator from './src/Navigator'


export default class App extends React.Component {
  state = {
    fontLoaded: false,
  };

  async componentWillMount() {
    

    this.setState({ fontLoaded: true })
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {
          this.state.fontLoaded ? <Navigator /> : null
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
