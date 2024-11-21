import { View, Text, TextInput , Button } from 'react-native'
import React, { useState } from 'react'

const HomeScreen = ({navigation}) => {
    const [username, setUsername]= useState('');

  return (
    <View>
      <Text>HomeScreen</Text>

      <TextInput 
      placeholder = "Enter your name" 
      onChangeText={text=>{ 
        setUsername(text);
      }}
      />

    <Button 
    title="Entrar a la llamada" 
    onPress={()=> {
        navigation.navigation('Video Call', {
        params:{
            username,
        },
    });
    }}
    />
    </View>
  );
};
export default HomeScreen;

