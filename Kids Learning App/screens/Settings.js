// import React from 'react';
// import { StyleSheet, Text, View, Switch } from 'react-native';

// const SettingsScreen = () => {
//   const [notificationsEnabled, setNotificationsEnabled] = React.useState(false);
//   const [darkModeEnabled, setDarkModeEnabled] = React.useState(false);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Settings</Text>

//       <View style={styles.settingItem}>
//         <Text style={styles.settingText}>Language</Text>
//         <Switch
//           value={notificationsEnabled}
//           onValueChange={(value) => setNotificationsEnabled(value)}
//           thumbColor="#fff"
//           trackColor={{ false: '#ccc', true: '#00aaff' }}
//         />
//       </View>

//       <View style={styles.settingItem}>
//         <Text style={styles.settingText}>Change Language</Text>
//         <Text style={styles.settingText}>English</Text>
//         <Switch
//           value={darkModeEnabled}
//           onValueChange={(value) => setDarkModeEnabled(value)}
//           thumbColor="#fff"
//           trackColor={{ false: '#ccc', true: '#00aaff' }}
//         />
//       </View>

//       <Text style={styles.sectionHeader}>Account</Text>

//       <View style={styles.settingItem}>
//         <Text style={styles.settingText}>Change Password</Text>
//       </View>

//       <View style={styles.settingItem}>
//         <Text style={styles.settingText}>Logout</Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: 20,
//     paddingTop: 40,
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   sectionHeader: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginTop: 20,
//   },
//   settingItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     borderBottomWidth: 1,
//     borderColor: '#ccc',
//     paddingVertical: 10,
//   },
//   settingText: {
//     fontSize: 16,
//   },
// });

// export default SettingsScreen;
// import React from 'react';
// import { StyleSheet, Text, View, Switch } from 'react-native';

// const SettingsScreen = () => {
//   const [notificationsEnabled, setNotificationsEnabled] = React.useState(false);
//   const [darkModeEnabled, setDarkModeEnabled] = React.useState(false);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Settings</Text>

//       <View style={styles.settingItem}>
//         <Text style={styles.settingText}>Language</Text>
//         <Switch
//           value={notificationsEnabled}
//           onValueChange={(value) => setNotificationsEnabled(value)}
//           thumbColor="#fff"
//           trackColor={{ false: '#ccc', true: '#00aaff' }}
//         />
//       </View>

//       <View style={styles.settingItem}>
//         <Text style={[styles.settingText, styles.boldText]}>Change Language</Text>
//         <Text style={styles.settingText}>English</Text>
//         <Switch
//           value={darkModeEnabled}
//           onValueChange={(value) => setDarkModeEnabled(value)}
//           thumbColor="#fff"
//           trackColor={{ false: '#ccc', true: '#00aaff' }}
//         />
//       </View>

//       <Text style={styles.sectionHeader}>Account</Text>

//       <View style={styles.settingItem}>
//         <Text style={styles.settingText}>Change Password</Text>
//       </View>

//       <View style={styles.settingItem}>
//         <Text style={styles.settingText}>Logout</Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: 20,
//     paddingTop: 40,
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   sectionHeader: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginTop: 20,
//   },
//   settingItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     borderBottomWidth: 1,
//     borderColor: '#ccc',
//     paddingVertical: 10,
//   },
//   settingText: {
//     fontSize: 16,
//   },
//   boldText: {
//     fontWeight: 'bold',
//     color: 'black',
//   },
// });

// export default SettingsScreen;
// import React from 'react';
// import { StyleSheet, Text, View, Switch } from 'react-native';

// const SettingsScreen = () => {
//   const [notificationsEnabled, setNotificationsEnabled] = React.useState(false);
//   const [darkModeEnabled, setDarkModeEnabled] = React.useState(false);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Settings</Text>

//       <View style={styles.settingItem}>
//         <Text style={styles.settingText}>Language</Text>
//         <Switch
//           value={notificationsEnabled}
//           onValueChange={(value) => setNotificationsEnabled(value)}
//           thumbColor="#fff"
//           trackColor={{ false: '#ccc', true: '#00aaff' }}
//         />
//       </View>

//       <View style={styles.settingItem}>
//         <View style={styles.languageContainer}>
//           <Text style={[styles.settingText, styles.boldText]}>Change Language</Text>
//           <Text style={styles.verticalText}>English</Text>
//         </View>
//         <Switch
//           value={darkModeEnabled}
//           onValueChange={(value) => setDarkModeEnabled(value)}
//           thumbColor="#fff"
//           trackColor={{ false: '#ccc', true: '#00aaff' }}
//         />
//       </View>

//       <Text style={styles.sectionHeader}>Account</Text>

//       <View style={styles.settingItem}>
//         <Text style={styles.settingText}>Change Password</Text>
//       </View>

//       <View style={styles.settingItem}>
//         <Text style={styles.settingText}>Logout</Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: 20,
//     paddingTop: 40,
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   sectionHeader: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginTop: 20,
//   },
//   settingItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     borderBottomWidth: 1,
//     borderColor: '#ccc',
//     paddingVertical: 10,
//   },
//   settingText: {
//     fontSize: 16,
//   },
//   boldText: {
//     fontWeight: 'bold',
//     color: 'black',
//   },
//   languageContainer: {
//     flexDirection: 'column',
//   },
//   verticalText: {
//     fontSize: 16,
//   },
// });

// export default SettingsScreen;
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// const SettingsScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Settings</Text>

//       <View style={styles.settingItem}>
//         <Text style={styles.settingText}>Language</Text>
//       </View>

//       <View style={styles.settingItem}>
//         <Text style={[styles.settingText, styles.boldText]}>Change Language</Text>
//         <Text style={styles.verticalText}>English</Text>
//       </View>

//       <Text style={styles.sectionHeader}>Account</Text>

//       <View style={styles.settingItem}>
//         <Text style={styles.settingText}>Change Password</Text>
//       </View>

//       <View style={styles.settingItem}>
//         <Text style={styles.settingText}>Logout</Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: 20,
//     paddingTop: 40,
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   sectionHeader: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginTop: 20,
//   },
//   settingItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     borderBottomWidth: 1,
//     borderColor: '#ccc',
//     paddingVertical: 10,
//   },
//   settingText: {
//     fontSize: 16,
//   },
//   boldText: {
//     fontWeight: 'bold',
//     color: 'black',
//   },
//   verticalText: {
//     fontSize: 16,
//     marginTop: 5, // Add space between "Change Language" and "English" text
//   },
// });

// export default SettingsScreen;


// import React from 'react';
// import { StyleSheet, Text, View, Switch } from 'react-native';

// const SettingsScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Settings</Text>

//       <View style={styles.settingItem}>
//         <Text style={styles.settingText}>Language</Text>
//       </View>

//       <View style={styles.settingItem}>
//         <Text style={[styles.settingText, styles.boldText]}>Change Language</Text>
//         <View style={styles.languageContainer}>
//           <Text style={styles.verticalText}>English</Text>
//         </View>
//       </View>

//       <Text style={styles.sectionHeader}>Account</Text>

//       <View style={styles.settingItem}>
//         <Text style={styles.settingText}>Change Password</Text>
//       </View>

//       <View style={styles.settingItem}>
//         <Text style={styles.settingText}>Logout</Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: 20,
//     paddingTop: 40,
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   sectionHeader: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginTop: 20,
//   },
//   settingItem: {
//     //borderBottomWidth: 1,
//     borderColor: '#ccc',
//     paddingVertical: 5,
//   },
//   settingText: {
//     fontSize: 16,
//   },
//   boldText: {
//     fontWeight: 'bold',
//     color: 'black',
//   },
//   languageContainer: {
//     marginTop: 5, // Add vertical space between "Change Language" and "English"
//   },
//   verticalText: {
//     fontSize: 16,
//   },
// });

// export default SettingsScreen;
// import React from 'react';
// import { StyleSheet, Text, View, Switch } from 'react-native';

// const SettingsScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Settings</Text>

//       <View style={styles.settingItem}>
//         <Text style={[styles.settingText, styles.boldText]}>Language</Text>
//       </View>

//       <View style={styles.settingItem}>
//         <Text style={[styles.settingText, styles.boldText, styles.changeLanguageText]}>Change Language</Text>
//         <View style={styles.languageContainer}>
//           <Text style={[styles.verticalText, styles.boldText, styles.englishText]}>English</Text>
//         </View>
//       </View>

//       <View style={styles.borderLine}></View>
      
//       <Text style={styles.sectionHeader}>Account</Text>

//       <View style={styles.settingItem}>
//         <Text style={styles.settingText}>Change Password</Text>
//       </View>

//       <View style={styles.settingItem}>
//         <Text style={styles.settingText}>Logout</Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: 20,
//     paddingTop: 40,
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   sectionHeader: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginTop: 20,
//   },
//   settingItem: {
//     paddingVertical: 5,
//   },
//   settingText: {
//     fontSize: 16,
//     color: '#ccc', // Set the default color to gray
//   },
//   boldText: {
//     fontWeight: 'bold',
//     fontSize: 18,
//   },
//   changeLanguageText: {
//     color: 'black', // Make "Change Language" black
//   },
//   englishText: {
//     color: '#ccc', // Make "English" white
//   },
//   languageContainer: {
//     marginTop: 5,
//   },
//   verticalText: {
//     fontSize: 16,
//   },
//   borderLine: {
//     borderBottomWidth: 1,
//     borderColor: '#ccc',
//     marginTop: 5,
//   },
// });

// export default SettingsScreen;
import React from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>

      <View style={styles.settingItem}>
        <Text style={[styles.settingText, styles.boldText]}>Language</Text>
      </View>

      <View style={styles.settingItem}>
        <Text style={[styles.settingText, styles.boldText, styles.changeLanguageText]}>Change Language</Text>
        <View style={styles.languageContainer}>
          <Text style={[styles.verticalText, styles.boldText, styles.englishText]}>English</Text>
          <Text style={styles.blueText}>CHANGE</Text>
        </View>
      </View>

      <View style={styles.borderLine}></View>
      
      <Text style={[styles.sectionHeader,styles.boldText]}>Password</Text>

      <View style={styles.settingItem}>
        <Text style={[styles.settingText,styles.boldText,styles.changeLanguageText]}>Change Password</Text>
      </View>

      <View style={styles.settingItem}>
        <Text style={[styles.settingText,styles.boldText]}>Tap here to change your Password</Text>
        <View style={styles.borderLine}></View>

        <Text style={[styles.sectionHeader,styles.boldText]}>LEGAL</Text>

      <View style={styles.settingItem}>
        <Text style={[styles.settingText,styles.boldText,styles.changeLanguageText]}>Terms & Conditions</Text>
      </View>

      <View style={styles.settingItem}>
        <Text style={[styles.settingText,styles.boldText]}>Learn about T&C's of using Your Car</Text>
        <View style={styles.borderLine}></View>
        </View>
        <Text style={[styles.sectionHeader,styles.boldText]}>LEGAL</Text>

<View style={styles.settingItem}>
  <Text style={[styles.settingText,styles.boldText,styles.changeLanguageText]}>Privacy Policy</Text>
</View>

<View style={styles.settingItem}>
  <Text style={[styles.settingText,styles.boldText]}>know about our privacy policy</Text>
  <View style={styles.borderLine}></View>
  </View>

        
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    color:'#ccc',
  },
  settingItem: {
    paddingVertical: 5,
  },
  settingText: {
    fontSize: 18,
    color: '#ccc', // Set the default color to gray
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  changeLanguageText: {
    color: 'black', // Make "Change Language" black
  },
  englishText: {
    color: '#ccc', // Make "English" white
  },
  blueText: {
    color: '#1e90ff', // Make "CHANGE" blue
    fontSize: 16,
    marginLeft:'60%',
  },
  languageContainer: {
    flexDirection: 'row', // Display "English" and "CHANGE" horizontally
    alignItems: 'center',
    marginTop: 5,
  },
  verticalText: {
    fontSize: 16,
  },
  borderLine: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginTop: 12,
  },
});

export default SettingsScreen;




















