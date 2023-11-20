import React from 'react';
import { View, ImageBackground, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // You can choose your preferred icon library

const SplashScreen = ({ navigation }) => {
  const navigateToImageScreen = () => {
    // Replace 'ImageScreen' with the name of the screen you want to navigate to
    navigation.navigate('img');
  };

  const tracingScreen = () =>{
    navigation.navigate('Tracing');
  };

  const wordsScreen = ()=>{
    navigation.navigate('words');
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/kids.jpg')} style={styles.backgroundImage}>
        <View style={styles.content}>
          <View style={styles.upperCards}>
            <TouchableOpacity style={styles.card} onPress={navigateToImageScreen}>
              <Icon name="pencil" size={50} color="#FF1493" />
              <Text style={styles.cardText}>LETTERS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card} onPress={wordsScreen}>
              <Icon name="book" size={50} color="#FFA500" />
              <Text style={styles.cardText}>WORDS</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.lowerCards}>
            <View style={styles.card}>
              <Icon name="hashtag" size={50} color="#00CED1" />
              <Text style={styles.cardText}>NUMBERS</Text>
            </View>
            <TouchableOpacity style={styles.card} onPress={tracingScreen}>
            <Icon name="pencil-square-o" size={50} color="#FF6347" />
              <Text style={styles.cardText}>TRACING</Text>
              </TouchableOpacity>

            
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  upperCards: {
    flexDirection: 'row',
    marginTop: -100,
  },
  lowerCards: {
    flexDirection: 'row',
    marginTop: 120,
  },
  card: {
    width: 115,
    height: 100,
    backgroundColor: '#FFD700',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    marginHorizontal: 40,
  },
  cardText: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 20,
    textTransform: 'uppercase',
    color: 'black',
    fontFamily: 'Arial',
  },
});

export default SplashScreen;



































































