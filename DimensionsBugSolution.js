```javascript
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, Animated } from 'react-native';

const { width, height } = Dimensions.get('window');

const DimensionsBugSolution = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const viewRef = useRef(null);

  useEffect(() => {
    const handleLayout = (event) => {
      setDimensions({ width: event.nativeEvent.layout.width, height: event.nativeEvent.layout.height });
    };
    viewRef.current?.measure((fx, fy, width, height, px, py) => {
      setDimensions({ width, height});
    });
  }, []);

  return (
    <View style={styles.container} onLayout={handleLayout}>
      <View ref={viewRef} style={[styles.box, { width: dimensions.width, height: dimensions.height }]}/>
      <Text>Width: {dimensions.width}</Text>
      <Text>Height: {dimensions.height}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: 'blue',
  },
});

export default DimensionsBugSolution;
```