import React, {useState, useEffect} from 'react';
import {View, Text, Pressable} from 'react-native';
import Voice from '@react-native-voice/voice';

const MobileVoiceRecognitionScreen = () => {
  const [isListening, setIsListening] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    // Setting up voice listeners
    const onSpeechStart = (e) => {
      console.log('onSpeechStart:', e);
      setIsListening(true);
    };

    const onSpeechEnd = (e) => {
      console.log('onSpeechEnd:', e);
      setIsListening(false);
    };

    const onSpeechResults = (e) => {
      console.log('onSpeechResults:', e);
      setText(e.value ? e.value[0] : '');
    };

    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechResults = onSpeechResults;

    return () => {
      // Clean up the component
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const startListening = async () => {
    try {
      await Voice.start('en-US');
    } catch (e) {
      console.error(e);
    }
  };

  const stopListening = async () => {
    try {
      await Voice.stop();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View>
      <Pressable
        onPressIn={startListening} // Start listening when the button is pressed
        onPressOut={stopListening} // Stop listening when the button is released
        style={{padding: 10, backgroundColor: '#ddd'}}>
        <Text>{isListening ? 'Listening...' : 'Press and Hold to Talk'}</Text>
      </Pressable>
      <Text>Detected Text: {text}</Text>
    </View>
  );
};

export default MobileVoiceRecognitionScreen;
