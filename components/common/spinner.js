import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = size => {
  return (
    <View styles={styles.spinner}>
      <ActivityIndicator size={size || 'large'} />
    </View>
  );
};

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default Spinnert;