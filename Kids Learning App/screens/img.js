// import React from 'react';
// import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

// const DraggableAlphabets = ({ navigation }) => {
//   const alphabets = [];
//   for (let i = 65; i <= 90; i++) {
//     alphabets.push({ id: i, capital: String.fromCharCode(i), small: String.fromCharCode(i + 32) });
//   }

//   const handlePress = (letter) => {
//     // Replace 'ImageScreen' with the name of the screen you want to navigate to
//     navigation.navigate('img1', { letter });
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       {alphabets.map((item) => (
//         <TouchableOpacity key={item.id} style={styles.card} onPress={() => handlePress(item.capital + item.small)}>
//           <Text style={styles.text}>{item.capital}</Text>
//           <Text style={styles.text}>{item.small}</Text>
//         </TouchableOpacity>
//       ))}
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//     paddingTop: 50,
//     backgroundColor: '#FDD835',
//   },
//   card: {
//     width: 80,
//     height: 80,
//     backgroundColor: '#FFB74D',
//     alignItems: 'center',
//     justifyContent: 'center',
//     margin: 10,
//     borderRadius: 10,
//   },
//   text: {
//     fontSize: 24,
//     color: '#ffffff',
//     fontFamily: 'Arial',
//     fontWeight: 'bold',
//   },
// });

// export default DraggableAlphabets;
// DraggableAlphabets.js
// DraggableAlphabets.js
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const DraggableAlphabets = ({ navigation }) => {
  const handlePress = (letter) => {
    navigation.navigate('img1', { letter });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {Array.from({ length: 26 }, (_, index) => {
        const letter = String.fromCharCode(index + 65) + String.fromCharCode(index + 97);
        return (
          <TouchableOpacity key={index} style={styles.card} onPress={() => handlePress(letter)}>
            <Text style={styles.text}>{letter}</Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingTop: 50,
    backgroundColor: '#FDD835',
  },
  card: {
    width: 80,
    height: 80,
    backgroundColor: '#FFB74D',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 24,
    color: '#ffffff',
    fontFamily: 'Arial',
    fontWeight: 'bold',
  },
});

export default DraggableAlphabets;



























 
































