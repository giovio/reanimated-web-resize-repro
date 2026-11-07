import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import Animated, { FadeIn, FadeOut, Keyframe } from 'react-native-reanimated';

const enterKeyframe = new Keyframe({ from: { opacity: 0 }, to: { opacity: 1 } }).duration(200);

export default function App() {
  const [visible, setVisible] = useState();

  return (
    <View style={{ flex: 1 }}>
      {visible && (
        <Animated.View
          entering={visible === 'preset' ? FadeIn.duration(200) : enterKeyframe}
          exiting={FadeOut.duration(2000)}
          style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        />
      )}
      <Pressable onPress={() => setVisible('preset')}>
        <Text>Open with a preset</Text>
      </Pressable>
      <Pressable onPress={() => setVisible('keyframe')}>
        <Text>Open with a Keyframe</Text>
      </Pressable>
      <Pressable onPress={() => setVisible(undefined)}>
        <Text>Close</Text>
      </Pressable>
    </View>
  );
}
