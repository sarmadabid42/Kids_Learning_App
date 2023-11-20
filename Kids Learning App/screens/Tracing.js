import React, { useState, useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ScrollView, Alert } from 'react-native';

const TracingLettersGame = () => {
  const [paths, setPaths] = useState([]);
  const [currentLetter, setCurrentLetter] = useState('A');
  const scrollViewRef = useRef();

  const handleDrawStart = (x, y) => {
    setPaths((prevPaths) => [...prevPaths, { path: [{ x, y }] }]);
  };

  const handleDrawMove = (x, y) => {
    setPaths((prevPaths) => {
      const lastPath = prevPaths[prevPaths.length - 1];
      return [
        {
          path: [...lastPath.path, { x, y }],
        },
      ];
    });
  };

  const handleNextLetter = () => {
    if (currentLetter === 'Z') {
      Alert.alert('Congratulations', 'You have successfully filled all the letters from A to Z!');
    } else {
      Alert.alert('Congratulations', `You have successfully filled the letter ${currentLetter}!`);
      setCurrentLetter(String.fromCharCode(currentLetter.charCodeAt(0) + 1));
      scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: true });
      setPaths([]);
    }
  };

  const renderPaths = () => {
    return paths.map((path, index) => {
      return (
        <View key={index} style={styles.fill}>
          {path.path.map((point, index) => (
            <View key={index} style={[styles.point, { left: point.x, top: point.y }]} />
          ))}
        </View>
      );
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        contentContainerStyle={styles.scrollViewContainer}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.letterContainer}>
          <Text style={styles.letterText}>{currentLetter}</Text>
        </View>
      </ScrollView>
      <View
        style={styles.drawingContainer}
        onTouchStart={(e) => handleDrawStart(e.nativeEvent.pageX, e.nativeEvent.pageY)}
        onTouchMove={(e) => handleDrawMove(e.nativeEvent.pageX, e.nativeEvent.pageY)}
      >
        {renderPaths()}
      </View>
      <TouchableOpacity style={styles.button} onPress={handleNextLetter}>
        <Text style={styles.buttonText}>Next Letter</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollViewContainer: {
    alignItems: 'center',
  },
  letterContainer: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 20,
    marginTop: 50,
    width: 200,  // Set the desired width
    height: 200,
    alignItems:'center', // Set the desired height
  },
  letterText: {
    fontSize: 100,
    fontWeight: 'bold',
  },
  drawingContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  fill: {
    position: 'absolute',
    backgroundColor: 'green',
  },
  point: {
    position: 'absolute',
    backgroundColor: 'green',
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'lightblue',
    borderRadius: 5,
    marginBottom:40,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default TracingLettersGame;







 































