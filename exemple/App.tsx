import React from 'react';
import ToastProvider from 'toast-rn';
import Home from './src/components/Home';
const App: React.FC = () => {
  return (
    <ToastProvider>
      <Home />
    </ToastProvider>
  );
};

export default App;
