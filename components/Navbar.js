import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  SafeAreaView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import PropTypes from 'prop-types';

const propTypes = {
  main: PropTypes.bool,
};

const defaultProps = {
  main: false,
};

const Navbar = ({navigation, main}) => {
  return (
    <SafeAreaView>
      {main ? (
        <View style={styles.mainNav}>
          <Image
            style={styles.logo}
            source={require('../assets/images/movies.png')}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Search');
            }}>
            <Icon name="search-outline" size={30} color="white" />
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon name="chevron-back" size={40} color="white" />
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 45,
    width: 45,
  },
  mainNav: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
});

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;
export default Navbar;
