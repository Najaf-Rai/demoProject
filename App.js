import React, { Component } from 'react';
import { SafeAreaView, Text, View, Image, TextInput, TouchableWithoutFeedback, FlatList, Keyboard, StyleSheet } from 'react-native';

import icon from './source/Asserts/hi.png'

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    customerName: '',
    listItems: [],
  }

  validaton = async () => {
    if (this.state.customerName == '') alert('Please enter costumer name');
    else await this.setState({ listItems: [...this.state.listItems, this.state.customerName], customerName: '' })
    Keyboard.dismiss();
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>

        {/* MainView */}
        <View style={styles.container}>

          {/* header view */}
          <View style={styles.headerContainer}>
            <Image source={icon} style={styles.headerIcon} />
            <Text style={styles.headerText}>Costumer List</Text>
          </View>


          <FlatList
            data={this.state.listItems}
            renderItem={({ item }) => (
              <View style={styles.listItemContainer} >
                <Text style={styles.listItem}>{item}</Text>
              </View>
            )}
          />

          {/* bottom view container */}
          <View style={styles.bottomViewContainer}>
            <TextInput
              value={this.state.customerName}
              style={styles.bottomTextField}
              placeholder='Write costumer name'
              placeholderTextColor='grey'
              onChangeText={(text) => this.setState({ customerName: text })} />

            <TouchableWithoutFeedback onPress={this.validaton}>
              <View style={styles.bottomButton}>
                <Text style={styles.bottomButtonTitle}>Add</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>

        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  headerContainer: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#303744',
    flexDirection: 'row'
  },
  headerIcon: {
    width: 25,
    height: 25,
    marginRight: 10,
    marginTop: 5
  },
  headerText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#2FC042'
  },
  listItemContainer: {
    justifyContent: 'center',
    padding: 20,
  },
  listItem: {
    fontSize: 16,
    color: '#000'
  },
  bottomViewContainer: {
    width: '100%',
    height: 60,
    position: 'absolute',
    bottom: 0, right: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  bottomTextField: {
    width: '80%',
    padding: 15,
    backgroundColor: 'white',
    fontSize: 16,
    color: '#000'
  },
  bottomButton: {
    width: '20%',
    height: 60,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 10,
  },
  bottomButtonTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#fff',
  },

});
