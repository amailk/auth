import React from 'react';
import { View, ActivityIndicator } from 'react-native';


//presentational Component, no req for state.
const Spinner = ({ size }) => {
  return (
    <View style={styles.spinnerStyle}>
      {/* says if we pass in a size property when we create
      the spinner then use it. if not use string large */}
      <ActivityIndicator size={size || 'large'} />
    </View>
  );
}

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
};
export { Spinner };
