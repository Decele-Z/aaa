/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
var my = '再错我就不学了';
var Main = require("./component/Main");//引入外部自定义组件

export default class DouBanDemo extends Component {
  render() {
    return (
      <Main/>
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('DouBanDemo', () => DouBanDemo);
