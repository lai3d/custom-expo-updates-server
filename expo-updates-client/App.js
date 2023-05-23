import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import Constants from 'expo-constants';
import * as Updates from 'expo-updates';
import { logger } from "react-native-logs";

export default function App() {
  var log = logger.createLogger();

  async function onFetchUpdateAsync() {
    try {
      const update = await Updates.checkForUpdateAsync();

      log.info("will check update isAvailable", update);

      if (update.isAvailable) {
        log.info("update available, will fetch update");
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      }
    } catch (error) {
      // You can also add an alert() to see the error message in case of an error when fetching updates.
      alert(`Error fetching latest Expo update: ${error}`);
    }
  }

  return (
    <View style={styles.container}>
      <Text>Larry Test 2023-05-19 16:19</Text>
      <Text>{Constants.expoConfig.name}</Text>
      <Text>{Constants.expoConfig.version}</Text>
      <Text>{Constants.expoConfig.updates.url}</Text>
      <Image source={require('./assets/favicon.png')} />
      <Button title="Fetch update" onPress={onFetchUpdateAsync} />
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
