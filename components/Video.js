import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import VideoPlayer from 'react-native-video-controls';

const Video = ({onClose, navigation}) => {
  return (
    <VideoPlayer
      onBack={onClose}
      // navigator={navigation}
      onEnd={onClose}
      source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
      fullscreenOrientation="all"
    />
  );
};

const styles = StyleSheet.create({});
export default Video;
