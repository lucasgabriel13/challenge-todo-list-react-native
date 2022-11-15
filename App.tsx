import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter'
import { StatusBar } from 'expo-status-bar';

import { Loading } from './src/components/Loading';
import { Home } from './src/screens/Home';
import { THEME } from './src/styles/theme';

export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  })

  return (
    <>
      <StatusBar style="light" backgroundColor={THEME.COLORS.GRAY_700} translucent />
      {fontsLoaded ? <Home /> : <Loading />}
    </>
  );
}