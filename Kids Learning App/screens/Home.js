import { StyleSheet, View, Text, TouchableOpacity,ScrollView } from 'react-native';

const MyComponent = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.headingBar}>
      <Text style={styles.heading}>Reading Book</Text>
    </View>
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('Settings')}
    >
      <Text style={styles.buttonText}>"Moral Stories"</Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('img')}
    >
      <Text style={styles.buttonText}>Send Feedback</Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('kids')}
    >
      <Text style={styles.buttonText}>Search More Apps</Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('Status')}
    >
      <Text style={styles.buttonText}>Rate Applications</Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('ProductStatus')}
    >
      <Text style={styles.buttonText}>Share With Friends</Text>
    </TouchableOpacity>

    {/* <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('MaintenanceHistory')}
    >
      <Text style={styles.buttonText}>Find More BOOKS</Text>
    </TouchableOpacity> */}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', // Set your background color here
    padding: 2,
  },
  headingBar: {
    backgroundColor: '#339FFF', // Blue background color for the heading bar
    paddingVertical: 13,
    alignItems: 'center',
    bottom:19,
    
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white', // Text color for the heading
  },
  button: {
    padding: 15,
    fontSize: 20,
    fontWeight: '500',
    color: '#ffffff',
    backgroundColor: '#339FFF',
    borderWidth: 1,
    borderRadius: 40,
    marginTop: 20,
    borderColor: '#339FFF',
    textAlign: 'center',
    width: '75%', // Set the desired width for your buttons
    marginLeft: '12%', // Push the buttons to the right
  },
  buttonText: {
    textAlign: 'center',
  },
});

export default MyComponent;
