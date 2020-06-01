import * as React from 'react';
import { WebView } from 'react-native-webview';

export default class App extends React.Component {
  render() {
    let url = 'http://www.ufosstudioburger.com.br/delivery';
    return <WebView source={{ uri: url }} />;
  }
}