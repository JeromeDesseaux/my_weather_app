import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Weather from "./components/weather";

export default class App extends React.Component {

  state = {
    isLoading: true,
    temperature: 0,
    condition: null,
    error: null
  };

  componentDidMount(){
    this.fetch();
  }

  fetch(city) {
    let url = "https://www.prevision-meteo.ch/services/json/rouen";

    fetch(
      url
    ).then(res => res.json())
    .then(json => {
      this.setState({
        isLoading: false,
        temperature: json.current_condition.tmp,
        condition: json.current_condition.condition
      })
    }).catch(err => {
      this.setState({
        error: err
      })
    })
  }

  render() {
    const { isLoading } = this.state;
    return (
      <View style={styles.container}>
      { isLoading ? (
        <Text>Fetching The Weather</Text>
      ) : (
        <View>
          <Weather temperature={this.state.temperature} condition={this.state.condition} />
        </View>
      )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7b733',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
