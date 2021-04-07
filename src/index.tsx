import React, { useState, createContext, useCallback, useContext } from 'react';
import { Animated } from 'react-native';
import ToastContainer, {
  IToastMessages,
  styleAnimated,
  styleDirection,
} from './components/ToastContainer';

interface IToastContext {
  addToast(message: Omit<IToastMessages, 'id' | 'animate'>): void;
  removeToast(id: string): void;
}

const ToastContext = createContext<IToastContext | null>(null);

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    // eslint-disable-next-line no-bitwise
    const r = (Math.random() * 16) | 0;
    // eslint-disable-next-line no-bitwise
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<IToastMessages[]>([]);

  const addToast = useCallback(
    (message: Omit<IToastMessages, 'id' | 'animate'>) => {
      const newMessage = Object.assign(message, {
        ...message,
        id: uuidv4(),
        animate: new Animated.Value(0),
      });
      setMessages(prevMessages => [...prevMessages, newMessage]);
    },
    [],
  );

  const removeToast = useCallback((id: string) => {
    setMessages(prevMessages => prevMessages.filter(item => item.id !== id));
  }, []);

  const value = React.useMemo(() => ({ addToast, removeToast }), [
    addToast,
    removeToast,
  ]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      {messages.length > 0 && <ToastContainer messages={messages} />}
    </ToastContext.Provider>
  );
};

function useToast(): IToastContext {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToasProvider');
  }

  return context;
}

export type { IToastMessages, styleAnimated, styleDirection };

export { useToast };

export default ToastProvider;
