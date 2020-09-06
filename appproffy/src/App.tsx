import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';

import AppStack from './routes/AppStack';

const App: React.FC = () => {
  return (
    <>
      <AppStack />
      <StatusBar barStyle="light-content" backgroundColor="#8257e5" />
    </>
  );
};

export default App;
