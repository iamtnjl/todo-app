import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import "./global.css"

export default function App() {
  return (
    <SafeAreaView
      className="flex-1 bg-blue-100 items-center justify-center"
      edges={['top', 'left', 'right']}
    >
      <Text className="text-blue-700 text-lg font-bold">
        NativeWind is working!
      </Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
