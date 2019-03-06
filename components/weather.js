import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

class Weather extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <MaterialCommunityIcons size={48} name="weather-sunny" color={'#000'} />
                    <Text style={styles.tempText}>{this.props.temperature} °C</Text>
                </View>
                <View style={styles.bodyContainer}>
                    <Text style={styles.title}>{this.props.condition}</Text>
                    <Text style={styles.subtitle}>Rouen</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    tempText: {
      fontSize: 48,
      color: '#fff'
    },
    bodyContainer: {
      flex: 2,
      alignItems: 'flex-start',
      justifyContent: 'flex-end',
      paddingLeft: 25,
      marginBottom: 40
    },
    title: {
      fontSize: 48,
      color: '#fff'
    },
    subtitle: {
      fontSize: 24,
      color: '#fff'
    }
});

export default Weather;
