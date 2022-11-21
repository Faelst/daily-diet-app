import { StatusBar } from 'expo-status-bar';
import { Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';
import { useFonts } from 'expo-font';
import { ThemeProvider } from 'styled-components/native';

import theme from '@theme/index';

import { Loading } from '@components/Loading';
import { Routes } from '@routes/index';

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <StatusBar style="auto" backgroundColor="transparent" translucent />
        {!fontsLoaded ? <Loading /> : <Routes />}
      </ThemeProvider>
    </>
  );
}
