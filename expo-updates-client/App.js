import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Larry tests custom updates server 2023-05-18 15:20</Text>
      <Text>{Constants.expoConfig.name}</Text>
      <Image source={require('./assets/favicon.png')} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
