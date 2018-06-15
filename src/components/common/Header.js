// import libraries for making a componenet
import React from 'react'
import { Text, View } from 'react-native'

// make a componenet
const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

/* make styles, add styling for each component
camelCase used.
*/
const styles = {
  viewStyle: {
    backgroundColor: '#F8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    // dimensions of the shadow, height and width.
    shadowOffset: { width: 0, height: 2 },
    //darkness of it, how heavy it is
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20,
  }
};
// Export: make the component available to other parts of the app
export { Header };
