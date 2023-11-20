// import React from 'react';
// import { View, Image, StyleSheet, Dimensions, FlatList, Text } from 'react-native';

// const { width, height } = Dimensions.get('window');

// const App = () => {
//   const cardData = [
//     { id: 1, name: 'Card 1' },
//     { id: 2, name: 'Card 2' },
//     { id: 3, name: 'Card 3' },
//     // Add more card data as needed
//   ];

//   return (
//     <View style={styles.container}>
//       <View style={styles.imageContainer}>
//         <Image style={styles.image} source={require('./assets/hills.jpg')} resizeMode="cover" />
//       </View>

//       <View style={styles.overlay}>
//         <FlatList
//           data={cardData}
//           horizontal
//           keyExtractor={(item) => item.id.toString()}
//           contentContainerStyle={styles.cardContainer}
//           renderItem={({ item }) => (
//             <View style={styles.card}>
//               <Text style={styles.cardText}>{item.name}</Text>
//             </View>
//           )}
//         />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//   },
//   imageContainer: {
//     flex: 1,
//     overflow: 'hidden', // Ensure the entire image is visible
//   },
//   image: {
//     flex:1,
//     width: height,
//     height: width,
//     transform: [{ rotate: '90deg' }],
//   },
//   overlay: {
//     ...StyleSheet.absoluteFillObject,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   cardContainer: {
//     flexDirection: 'column', // Display cards vertically
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   card: {
//     backgroundColor: 'rgba(255, 255, 255, 0.8)',
//     padding: 16,
//     margin: 8,
//     borderRadius: 8,
//     width: 120,
//     height: 80,
//     //elevation: 5,
//   },
//   cardText: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     transform: [{ rotate: '90deg' }],
//     padding:10,
//   },
// });

// export default App;
// import React from 'react';
// import { View, Image, StyleSheet, Dimensions, FlatList, Text } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome5';

// const { width, height } = Dimensions.get('window');

// const App = () => {
//   const cardData = [
//     { id: 1, name: 'Card 1' },
//     { id: 2, name: 'Card 2' },
//     { id: 3, name: 'Card 3' },
//     // Add more card data as needed
//   ];

//   return (
//     <View style={styles.container}>
//       <View style={styles.imageContainer}>
//         <Image style={styles.image} source={require('./assets/hills.jpg')} resizeMode="cover" />
//       </View>

//       <View style={styles.overlay}>
//         <FlatList
//           data={cardData}
//           horizontal
//           keyExtractor={(item) => item.id.toString()}
//           contentContainerStyle={styles.cardContainer}
//           renderItem={({ item }) => (
//             <View style={styles.card}>
//               <Text style={styles.cardText}>{item.name}</Text>
//             </View>
//           )}
//         />
//       </View>

//       <View style={styles.leftIconContainer}>
//         <Icon name="chevron-left" size={24} color="#333" />
//       </View>

//       <View style={styles.rightIconContainer}>
//         <Icon name="chevron-right" size={24} color="#333" />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//   },
//   imageContainer: {
//     flex: 1,
//     overflow: 'hidden',
//   },
//   image: {
//     flex: 1,
//     width: height,
//     height: width,
//     transform: [{ rotate: '90deg' }],
//   },
//   overlay: {
//     ...StyleSheet.absoluteFillObject,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   cardContainer: {
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   card: {
//     backgroundColor: 'rgba(255, 255, 255, 0.8)',
//     padding: 16,
//     margin: 8,
//     borderRadius: 8,
//     width: 120,
//     height: 80,
//   },
//   cardText: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     transform: [{ rotate: '90deg' }],
//     padding: 10,
//   },
//   leftIconContainer: {
//     position: 'absolute',
//     left: 0,
//     top: height / 2 - 12, // Center vertically
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   rightIconContainer: {
//     position: 'absolute',
//     right: 0,
//     top: height / 2 - 12, // Center vertically
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default App;
// import React from 'react';
// import { View, Image, StyleSheet, Dimensions, FlatList, Text } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome5';

// const { width, height } = Dimensions.get('window');

// const App = () => {
//   const cardData = [
//     { id: 1, name: 'Card 1' },
//     { id: 2, name: 'Card 2' },
//     { id: 3, name: 'Card 3' },
//     // Add more card data as needed
//   ];

//   return (
//     <View style={styles.container}>
//       <View style={styles.imageContainer}>
//         <Image style={styles.image} source={require('./assets/hills.jpg')} resizeMode="cover" />
//       </View>

//       <View style={styles.overlay}>
//         <FlatList
//           data={cardData}
//           horizontal
//           keyExtractor={(item) => item.id.toString()}
//           contentContainerStyle={styles.cardContainer}
//           renderItem={({ item }) => (
//             <View style={styles.card}>
//               <Text style={styles.cardText}>{item.name}</Text>
//             </View>
//           )}
//         />
//       </View>

//       <View style={styles.iconContainer}>
//         <Icon name="chevron-left" size={24} color="#333" style={styles.icon} />
//         <Icon name="chevron-right" size={24} color="#333" style={styles.icon} />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//   },
//   imageContainer: {
//     flex: 1,
//     overflow: 'hidden',
//   },
//   image: {
//     flex: 1,
//     width: height,
//     height: width,
//     transform: [{ rotate: '90deg' }],
//   },
//   overlay: {
//     ...StyleSheet.absoluteFillObject,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   cardContainer: {
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   card: {
//     backgroundColor: 'rgba(255, 255, 255, 0.8)',
//     padding: 16,
//     margin: 8,
//     borderRadius: 8,
//     width: 120,
//     height: 80,
//   },
//   cardText: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     transform: [{ rotate: '90deg' }],
//     padding: 10,
//   },
//   iconContainer: {
//     position: 'absolute',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingHorizontal: 16,
//     top: height / 2 - 12,
//     width: width,
//   },
//   icon: {},
// });

// export default App;
import React, { useRef } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import ViewShot from 'react-native-view-shot';

const App = () => {
  const viewShotRef = useRef(null);

  const captureScreenshot = async () => {
    try {
      const uri = await viewShotRef.current.capture();
      console.log('Screenshot captured:', uri);
      // You can save the screenshot URI or perform other actions with it.
    } catch (error) {
      console.error('Error capturing screenshot:', error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={captureScreenshot}>
        <ViewShot ref={viewShotRef} options={{ format: 'jpg', quality: 0.9 }}>
          {/* Your circle drawing logic goes here */}
          <View
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              backgroundColor: 'blue',
            }}
          />
        </ViewShot>
      </TouchableOpacity>
    </View>
  );
};

export default App;


















































 









