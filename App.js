import React, {Component} from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import {PersistGate} from "redux-persist/integration/react";
import { Provider } from 'react-redux';
import { store, persistor } from './src/redux/store';
import AppNavigator from "./src/navigation/AppNavigator";

type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props);
    console.disableYellowBox = true;
    console.ignoredYellowBox = ['Require cycle:'];

  }

  renderLoading = () => {
    return (
        <View style={styles.container}>
          <ActivityIndicator size="large" />
        </View>
    );
  };

  render() {

    return (
        <Provider store={store}>
          <PersistGate persistor={persistor} loading={this.renderLoading()}>
            <AppNavigator/>
          </PersistGate>
        </Provider>
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#10a66f",
    alignItems: 'center',
    justifyContent: 'center',
  }
});

