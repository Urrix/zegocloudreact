import React from 'react';
import { View, StyleSheet } from 'react-native';
import {ZegoUIKitPrebuiltCall, ONE_ON_ONE_VIDEO_CALL_CONFIG } from '@zegocloud/zego-uikit-prebuilt-call-rn'
import { APP_ID, APP_SIGN } from '../config';
export default function VideoCallScreen({
    route}){
        const { username } = route.params;
        console.log('username',username);
        console.log('APP_ID',APP_ID);
        console.log('APP_SIGN',APP_SIGN);
    }
    return (
        <View style={styles.container}>
            <ZegoUIKitPrebuiltCall
                appID={APP_ID}
                appSign={APP_SIGN}
                userID={userID} // userID can be something like a phone number or the user id on your own user system. 
                userName={userName}
                callID={callID} // callID can be any unique string. 

                config={{
                    // You can also use ONE_ON_ONE_VOICE_CALL_CONFIG/GROUP_VIDEO_CALL_CONFIG/GROUP_VOICE_CALL_CONFIG to make more types of calls.
                    ...ONE_ON_ONE_VIDEO_CALL_CONFIG,
                    onCallEnd: (callID, reason, duration) => { props.navigation.navigate('HomePage') },
                }}
            />
        </View>
    );


const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 0,
  },
});
