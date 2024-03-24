import { StyleSheet, SafeAreaView, Text, Alert, Platform, StatusBar, View } from 'react-native';

export default function AppHeader(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Winederland</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: 'black'
  },
});
