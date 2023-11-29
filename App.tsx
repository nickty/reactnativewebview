import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { WebView } from 'react-native-webview';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.header}>
        <Text style={styles.headerText}>Facebook WebView</Text>
      </View> */}
      <WebView
        source={{ uri: 'https://arogga.com/' }}
        style={styles.webview}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#4267B2', // Facebook blue color
    padding: 10,
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
  },
  webview: {
    flex: 1,
  },
});

export default App;
