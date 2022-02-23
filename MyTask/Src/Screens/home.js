import React, { Component } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity, StyleSheet, StatusBar, FlatList } from 'react-native';
import CharecterList from '../Component/character';
import axios from "axios"
const Devicewidth = Dimensions.get('window').width;
const Deviceheight = Dimensions.get('window').height;


export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      AllCharacters: [],
    }
  }
  state = this.state;
  componentDidMount() {

    axios.get(`http://50.116.13.170/darfi/api/advertisement/latest`)
      .then(response => {
        console.log("my user Details response", response);
        if (response.status == 200) {
          this.setState({
            AllCharacters: response.data.data
          })
        }

      })
      .catch(error => {
        console.error(error.data)
      })
  }


  render() {
    return (
      <>
        <View style={styles.Container}>
          <StatusBar backgroundColor="#070707" barStyle="light-content" />

          {/* Header Section */}
          <View style={styles.HeaderMainCOntainer}>
            <Text style={styles.Headding}>Infoicon Technologies</Text>
          </View>

          {/* Scroll Section */}
          <View style={styles.FlatlistContainer}>
            <FlatList
              data={this.state.AllCharacters}
              showsVerticalScrollIndicator={false}
              horizontal={false}
              numColumns={2}
              renderItem={({ item }) => (
                <View>
                  <CharecterList
                    AddTitle={item.add_title}
                    CountryName={item.country_name_de}
                    ItemDesc={item.item_description}
                    ItemImage={item.mutimage[0].photo_name}
                    PostalCode={item.postalcode}
                    navigation={this.props.navigation}
                  />
                </View>
              )}
              keyExtractor={item => item.char_id}
            />
          </View>
        </View>
      </>
    )
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
  },
  HeaderMainCOntainer: {
    height: Deviceheight / 12,
    width: Devicewidth,
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'flex-start',
    backgroundColor: "#070707",
    flexDirection: "row",
    paddingHorizontal: 20
  },
  Headding: {
    fontSize: 24,
    color: "#ffffff",
    fontWeight: '600',
    textAlign: "left",
    fontFamily: "Roboto-Bold"
  },
  FlatlistContainer: {
    padding: 5,
    width: Devicewidth,
    height: Deviceheight / 1.09,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#070707'
  },
})