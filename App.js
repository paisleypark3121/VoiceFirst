import React from 'react';
import { Button, View, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import your screen components
import WebVoiceRecognitionScreen from './src/screens/WebVoiceRecognitionScreen';
import MobileVoiceRecognitionScreen from './src/screens/MobileVoiceRecognitionScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="WebVoiceRecognition" component={WebVoiceRecognitionScreen} />
        <Stack.Screen name="MobileVoiceRecognition" component={MobileVoiceRecognitionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Home screen with navigation buttons
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Web Voice Recognition"
        onPress={() => navigation.navigate('WebVoiceRecognition')}
      />
      <Button
        title="Go to Mobile Voice Recognition"
        onPress={() => navigation.navigate('MobileVoiceRecognition')}
      />
    </View>
  );
}

export default App;
