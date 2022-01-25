import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../theme/Colors';

const PlayButton = ({handlePress}) => {
  return (
    <Pressable style={styles.button} onPress={handlePress}>
      <Icon
        name="caret-forward-circle-outline"
        size={30}
        color={Colors.white}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignContent: 'center',
    borderRadius: 50,
    width: 50,
    padding: 10,
    backgroundColor: Colors.primary,
    zIndex: 100,
  },
});
export default PlayButton;
