import { View, Text } from 'react-native';
import tw from 'twrnc';

export default function ReelsScreen() {
  return (
    <View style={tw`flex-1 bg-black items-center justify-center`}>
      <Text style={tw`text-white`}>Reels</Text>
    </View>
  );
}