import { Text, View, StyleSheet } from 'react-native';
import { Keys } from 'react-native-nostr-sdk';

const result = Keys.generate();

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Public Key: {result.publicKey().toHex()}</Text>
      <Text>Secret Key: {result.secretKey().toHex()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
