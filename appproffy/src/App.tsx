import React from 'react';
import { View, StatusBar } from 'react-native';

import Landing from './pages/Landing';

const App: React.FC = () => {
  return (
    <>
      <Landing />
      <StatusBar barStyle="light-content" backgroundColor="#8257e5" />
    </>
  );
};

export default App;
