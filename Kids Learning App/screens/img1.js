// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Sound from 'react-native-sound';

// const Img1 = ({ route }) => {
//   const { letter } = route.params;
//   const [sound, setSound] = useState(null);

//   useEffect(() => {
//     Sound.setCategory('Playback');
//     return () => {
//       if (sound) {
//         sound.release();
//       }
//     };
//   }, []);

//   const renderIcon = (letter) => {
//     switch (letter) {
//              case 'Aa':
//                         return <Icon name="apple" size={70} color="#FF6347" />;
//                       case 'Bb':
//                         return <Icon name="futbol-o" size={70} color="#FF6347"/>;
//                       case 'Cc':
//                         return <Icon name="car" size={70} color="#FF6347"/>;
//                       case 'Dd':
//                         return <Icon name="diamond" size={70} color="#FF6347"/>;
//                       case 'Ee':
//                         return <Icon name="eye" size={70} color="#FF6347"/>;
//                       case 'Ff':
//                        return <Icon name="fighter-jet" size={70} color="#FF6347"/>;
//                      case 'Gg':
//                         return <Icon name="gamepad" size={70} color="#FF6347"/>;
//                       case 'Hh':
//                         return <Icon name="heart" size={70} color="#FF6347"/>;
//                       case 'Ii':
//                         return <Icon name="image" size={70} color="#FF6347"/>;
//                      case 'Jj':
//                         return <Icon name="smile-o" size={70} color="#FF6347"/>;
//                       case 'Kk':
//                         return <Icon name="key" size={70} color="#FF6347"/>;
//                       case 'Ll':
//                         return <Icon name="leaf" size={70} color="#FF6347" />;
//                       case 'Mm':
//                         return <Icon name="motorcycle" size={70} color="#FF6347" />;
//                       case 'Nn':
//                         return <Icon name="globe" size={70} color="#FF6347" />;
//                       case 'Oo':
//                         return <Icon name="circle" size={70} color="#ff8c00" />;
//                       case 'Pp':
//                         return <Icon name="phone" size={70} color="#ff8c00" />;
//                       case 'Qq':
//                        return <Icon name="question" size={70} color="#ff8c00" />;
//                       case 'Rr':
//                         return <Icon name="rocket" size={70} color="#FF6347" />;
//                       case 'Ss':
//                         return <Icon name="star" size={70} color="#FF6347" />;
//                      case 'Tt':
//                         return <Icon name="train" size={70} color="#FF6347" />;
//                       case 'Uu':
//                         return <Icon name="umbrella" size={70} color="#FF6347" />;
//                      case 'Vv':
//                        return <Icon name="volume-down" size={70} color="#FF6347" />;
//                       case 'Ww':
//                        return <Icon name="wifi" size={70} color="#FF6347" />;
//                       case 'Xx':
//                       return <Icon name="times" size={70} color="#FF6347" />;
//                     case 'Yy':
              
//                        return <Icon name="youtube" size={70} color="#FF6347" />;
                    
                    
//                     case 'Zz':
//                        return <Image source={require('./assets/zebra.jpg')} style={{ width: 80, height: 80 }} />;
      
//                     default:
//                       return null;
//     }
//   };

//   const renderText = (letter) => {
//     switch (letter) {
//              case 'Aa':
//                return 'Apple';
//              case 'Bb':
//                return 'Ball';
//              case 'Cc':
//                  return 'Car'
//              case 'Dd':
//                  return 'Diamond'
//              case 'Ee':
//                 return 'Eye'
//              case 'Ff':
//                  return 'Fighter-Jet'
//              case 'Gg':
//                  return 'GamePad'
//              case 'Hh':
//                  return 'Heart' 
//              case 'Ii':
//                  return 'Image'
//              case 'Jj':
//                  return 'Emoji'
//              case 'Kk':
//                  return 'Key'
//              case 'Ll':
//                   return 'Leaf'
//              case 'Mm':
//                  return 'Motorcycle'
//              case 'Nn':
//                  return 'Network'
//              case 'Oo':
//                  return 'Orange'
//              case 'Pp':
//                  return 'Phone'
//              case 'Qq':
//                  return 'Question Mark'
//              case 'Rr':
//                  return 'Rocket'
//              case 'Ss':
//                  return 'Star' 
//              case 'Tt':
//                return 'Train'
//              case 'Uu':
//                return 'Umbrella'
//              case 'Vv':
//                 return 'Volume'
//              case 'Ww':
//                return 'Wifi'
//              case 'Xx':
//                 return 
//              case 'Yy':
//                 return 'Youtube'
//              case 'Zz':
//                 return 'Zebra'
            
//              default:
//                return null;
//            }
//   };
//   const playSound = (letter) => {
//     if (sound) {
//       sound.stop();
//     }
//     const soundPath = getSoundPath(letter);
//     if (soundPath) {
//       const newSound = new Sound(soundPath, Sound.MAIN_BUNDLE, (error) => {
//         if (error) {
//           console.log('failed to load the sound', error);
//           return;
//         }
//         newSound.play((success) => {
//           if (success) {
//             console.log('successfully finished playing');
//           } else {
//             console.log('playback failed due to audio decoding errors');
//           }
//           newSound.release();
//         });
//       });
//     }
//   };
  
  
  
//   const getSoundPath = (letter) => {
//     switch (letter) {
//       case 'Aa':
//         const testSound = new Sound(require('../screens/assets/sounds/apple.mp3'), (error) => {
//           if (error) {
//             console.log('failed to load the sound', error);
//           } else {
//             console.log('sound loaded successfully');
//           }
//         });
//         testSound.release();
//         return require('./assets/sounds/apple.mp3');
//       default:
//         return null;
//     }
//   };
  
  
  

//   return (
//     <View style={styles.container}>
//       <View style={styles.card}>
//         <TouchableOpacity onPress={() => playSound(letter)}>
//           <Text style={styles.letter}>{letter}</Text>
//         </TouchableOpacity>
//         <View style={styles.iconContainer}>{renderIcon(letter)}</View>
//         <Text style={styles.description}>{renderText(letter)}</Text>
//         <TouchableOpacity onPress={() => playSound(letter)}>
//         <Text style={styles.description}>Play Sound</Text>
          
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//          flex: 1,
//          justifyContent: 'center',
//          alignItems: 'center',
//          backgroundColor: '#FDD835',
//        },
//        card: {
//          width: 300,
//          height: 600, // Increased height to accommodate text
//          backgroundColor: 'white',
//          borderRadius: 20,
//          justifyContent: 'center',
//          alignItems: 'center',
//          shadowColor: '#000',
//          shadowOffset: { width: 0, height: 3 },
//          shadowOpacity: 0.3,
//          shadowRadius: 2,
//          elevation: 5,
//        },
//        letter: {
//          fontSize: 100,
//          color: 'silver',
//          fontWeight: 'bold',
//          marginBottom: 20,
//          padding: 10,
//          letterSpacing: 20,
//        },
//        iconContainer: {
//          justifyContent: 'center',
//          alignItems: 'center',
//          marginTop: 10,
//        },
//        description: {
//          fontSize: 16,
//          color: '#FF6347',
//          textAlign: 'center',
//          marginTop: 20,
//          paddingHorizontal: 20,
//          fontFamily: 'Arial',
//        },
  
// });

// export default Img1;
// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Sound from 'react-native-sound';

// const Img1 = ({ route }) => {
//   const { letter } = route.params;
//   const [sound, setSound] = useState(null);

//   useEffect(() => {
//     Sound.setCategory('Playback');
//     return () => {
//       if (sound) {
//         sound.release();
//       }
//     };
//   }, []);

//   const playSound = (letter) => {
//     if (sound) {
//       sound.stop();
//     }
//     const soundPath = getSoundPath(letter);
//     if (soundPath) {
//       const newSound = new Sound(soundPath, Sound.MAIN_BUNDLE, (error) => {
//         if (error) {
//           console.log('failed to load the sound', error);
//           return;
//         }
//         newSound.play((success) => {
//           if (success) {
//             console.log('successfully finished playing');
//           } else {
//             console.log('playback failed due to audio decoding errors');
//           }
//           newSound.release();
//         });
//       });
//     }
//   };

//   const getSoundPath = (letter) => {
//     switch (letter) {
//       case 'Aa':
//         return 'apple.mp3'; // Make sure the path is correct
//       default:
//         return null;
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.card}>
//         <TouchableOpacity onPress={() => playSound(letter)}>
//           <Text style={styles.letter}>{letter}</Text>
//         </TouchableOpacity>
//         <View style={styles.iconContainer}>{/* Your renderIcon logic here */}</View>
//         <Text style={styles.description}>{/* Your renderText logic here */}</Text>
//         <TouchableOpacity onPress={() => playSound(letter)}>
//           <Text style={styles.description}>Play Sound</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => playSound('Aa')}>
//           <Text style={styles.description}>Play Sample Sound</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#FDD835',
//   },
//   card: {
//     width: 300,
//     height: 600, // Increased height to accommodate text
//     backgroundColor: 'white',
//     borderRadius: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 3 },
//     shadowOpacity: 0.3,
//     shadowRadius: 2,
//     elevation: 5,
//   },
//   letter: {
//     fontSize: 100,
//     color: 'silver',
//     fontWeight: 'bold',
//     marginBottom: 20,
//     padding: 10,
//     letterSpacing: 20,
//   },
//   iconContainer: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   description: {
//     fontSize: 16,
//     color: '#FF6347',
//     textAlign: 'center',
//     marginTop: 20,
//     paddingHorizontal: 20,
//     fontFamily: 'Arial',
//   },
// });

// export default Img1;
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Sound from 'react-native-sound';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const Img1 = ({ route }) => {
  const { letter } = route.params;
  const [sound, setSound] = useState(null);

  useEffect(() => {
    Sound.setCategory('Playback');
    return () => {
      if (sound) {
        sound.release();
      }
    };
  }, []);

   const playSound = (letter) => {
    if (sound) {
      console.log('Stopping previous sound');
      sound.stop();
    }
    const soundPath = getSoundPath(letter);
    console.log('Sound Path:', soundPath);
    if (soundPath) {
      const newSound = new Sound(soundPath, Sound.MAIN_BUNDLE, (error) => {
        if (error) {
          console.log('Failed to load the sound', error);
          return;
        }
        console.log('Playing sound');
        newSound.play((success) => {
          if (success) {
            console.log('Successfully finished playing');
          } else {
            console.log('Playback failed due to audio decoding errors');
          }
          newSound.release();
        });
      });
      setSound(newSound); // Set the new sound to state
    }
  };
  
  const getSoundPath = (letter) => {
    switch (letter) {
      case 'Aa':
      return 'apple.mp3'
      case 'Bb':
      return 'ball.mp3'
      case 'Cc':
      return 'car.mp3';
      case 'Dd':
      return 'diamond.mp3';
      case 'Ee':
      return 'eye.mp3';
      case 'Ff':
      return 'fighterjet.mp3';
      case 'Gg':
      return 'gamepad.mp3';
      case 'Hh':
      return 'heart.mp3';
      case 'Ii':
      return 'image.mp3';
      case 'Jj':
      return 'emoji.mp3';
      case 'Kk':
      return 'key.mp3';
      case 'Ll':
      return 'leaf.mp3';
      case 'Mm':
      return 'motorcyle.mp3';
      case 'Nn':
      return 'network.mp3';
      case 'Oo':
      return 'orange.mp3';
      case 'Pp':
      return 'phone.mp3';
      case 'Qq':
      return 'questionmark.mp3';
      case 'Rr':
      return 'rocket.mp3';
      case 'Ss':
      return 'star.mp3';
      case 'Tt':
      return 'train.mp3';
      case 'Uu':
      return 'umbrella.mp3';
      case 'Vv':
      return 'volume.mp3';
      case 'Ww':
      return 'wifi.mp3';
      case 'Xx':
      return 'times.mp3';
      case 'Yy':
      return 'youtube.mp3';
      case 'Zz':
      return 'zebra.mp3';
      default:
      return null;
    }
  };

  const renderIcon = (letter) => {
         switch (letter) {
                           case 'Aa':
                             return <Icon name="apple" size={70} color="#FF6347" />;
                           case 'Bb':
                             return <Icon name="futbol-o" size={70} color="#FF6347"/>;
                           case 'Cc':
                             return <Icon name="car" size={70} color="#FF6347"/>;
                           case 'Dd':
                             return <Icon name="diamond" size={70} color="#FF6347"/>;
                           case 'Ee':
                             return <Icon name="eye" size={70} color="#FF6347"/>;
                           case 'Ff':
                            return <Icon name="fighter-jet" size={70} color="#FF6347"/>;
                          case 'Gg':
                             return <Icon name="gamepad" size={70} color="#FF6347"/>;
                           case 'Hh':
                             return <Icon name="heart" size={70} color="#FF6347"/>;
                           case 'Ii':
                             return <Icon name="image" size={70} color="#FF6347"/>;
                          case 'Jj':
                             return <Icon name="smile-o" size={70} color="#FF6347"/>;
                           case 'Kk':
                             return <Icon name="key" size={70} color="#FF6347"/>;
                           case 'Ll':
                             return <Icon name="leaf" size={70} color="#FF6347" />;
                           case 'Mm':
                             return <Icon name="motorcycle" size={70} color="#FF6347" />;
                           case 'Nn':
                             return <Icon name="globe" size={70} color="#FF6347" />;
                           case 'Oo':
                             return <Icon name="circle" size={70} color="#ff8c00" />;
                           case 'Pp':
                             return <Icon name="phone" size={70} color="#ff8c00" />;
                           case 'Qq':
                            return <Icon name="question" size={70} color="#ff8c00" />;
                           case 'Rr':
                             return <Icon name="rocket" size={70} color="#FF6347" />;
                           case 'Ss':
                             return <Icon name="star" size={70} color="#FF6347" />;
                          case 'Tt':
                             return <Icon name="train" size={70} color="#FF6347" />;
                          case 'Uu':
                             return <Icon name="umbrella" size={70} color="#FF6347" />;
                          case 'Vv':
                           return <Icon name="volume-down" size={70} color="#FF6347" />;
                          case 'Ww':
                            return <Icon name="wifi" size={70} color="#FF6347" />;
                           case 'Xx':
                           return <Icon name="times" size={70} color="#FF6347" />;
                         case 'Yy':
                  
                            return <Icon name="youtube" size={70} color="#FF6347" />;
                        
                        
                         case 'Zz':
                           return <Image source={require('./assets/zebra.jpg')} style={{ width: 80, height: 80 }} />;
          
                         default:
                           return null;
         }
       };
    
       const renderText = (letter) => {
         switch (letter) {
                  case 'Aa':
                    return 'Apple';
                  case 'Bb':
                    return 'Ball';
                  case 'Cc':
                      return 'Car'
                  case 'Dd':
                      return 'Diamond'
                  case 'Ee':
                     return 'Eye'
                  case 'Ff':
                      return 'Fighter-Jet'
                  case 'Gg':
                      return 'GamePad'
                  case 'Hh':
                      return 'Heart' 
                  case 'Ii':
                      return 'Image'
                  case 'Jj':
                      return 'Emoji'
                  case 'Kk':
                      return 'Key'
                  case 'Ll':
                       return 'Leaf'
                  case 'Mm':
                      return 'Motorcycle'
                  case 'Nn':
                      return 'Network'
                  case 'Oo':
                     return 'Orange'
                  case 'Pp':
                      return 'Phone'
                  case 'Qq':
                      return 'Question Mark'
                  case 'Rr':
                      return 'Rocket'
                  case 'Ss':
                      return 'Star' 
                  case 'Tt':
                    return 'Train'
                  case 'Uu':
                    return 'Umbrella'
                  case 'Vv':
                     return 'Volume'
                 case 'Ww':
                    return 'Wifi'
                  case 'Xx':
                     return 'times'
                  case 'Yy':
                    return 'Youtube'
                 case 'Zz':
                     return 'Zebra'
                
                  default:
                    return null;
                }
       };                  

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <TouchableOpacity onPress={() => playSound(letter)}>
          <Text style={styles.letter}>{letter}</Text>
        </TouchableOpacity>
        <View style={styles.iconContainer}>{renderIcon(letter)}</View>
        <Text style={styles.description}>{renderText(letter)}</Text>
        <TouchableOpacity onPress={() => playSound(letter)}>
        <View style={styles.volumeIcon}>
          <FontAwesome5Icon name="volume-up" size={30} color="#FF6347" onPress={() => playSound(letter)} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FDD835',
  },
  card: {
    width: 300,
    height: 560, // Increased height to accommodate text
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  letter: {
    fontSize: 100,
    color: 'silver',
    fontWeight: 'bold',
    marginBottom: 20,
    padding: 10,
    letterSpacing: 20,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: '#FF6347',
    textAlign: 'center',
    marginTop: 25,
    paddingHorizontal: 20,
    fontFamily: 'Arial',
  },
  volumeIcon: {
    marginTop: 30,
  },
});

export default Img1;












