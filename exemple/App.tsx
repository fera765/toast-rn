import React from 'react';
import ToastProvider from 'rn-toast';
import Home from './src/components/Home';
const App: React.FC = () => {
  return (
    <ToastProvider>
      <Home />
    </ToastProvider>
  );
};

export default App;
