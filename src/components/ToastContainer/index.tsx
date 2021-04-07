import React from 'react';
import { Animated, Easing, useWindowDimensions } from 'react-native';
import Toast from './Toast';
import { Container } from './styles';

export type styleAnimated = 'bounce' | 'linear' | 'circle' | 'step0' | 'step1';

export type styleDirection = 'left' | 'right' | 'top' | 'bottom';
export type styleType = 'success' | 'error' | 'info' | 'warning';

export interface IToastMessages {
  id: string;
  type?: styleType;
  direction?: styleDirection;
  styleAnimation?: styleAnimated;
  title: string;
  description?: string;
  listDescriptions?: String[];
  duration?: number;
  animate: Animated.Value;
}

interface ToastContainerProps {
  messages: IToastMessages[];
}

export const animationsStyled = {
  bounce: Easing.bounce,
  linear: Easing.linear,
  circle: Easing.circle,
  step0: Easing.step0,
  step1: Easing.step1,
};

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const { width, height } = useWindowDimensions();

  return (
    <Container>
      {messages.map(item => {
        const { animate, direction, styleAnimation } = item;

        Animated.timing(animate, {
          toValue: 1,
          duration: 1500,
          easing:
            direction === 'top'
              ? Easing.linear
              : animationsStyled[styleAnimation ?? 'bounce'],
          useNativeDriver: true,
        }).start();

        const interpolate = animate.interpolate({
          inputRange: [1, 2],
          outputRange: [
            0,
            direction === 'left'
              ? width
              : direction === 'right'
              ? -width
              : direction === 'top'
              ? height
              : -height,
          ],
        });

        const animatedStyle = {
          transform: [
            {
              [['top', 'bottom'].includes(direction ?? 'left')
                ? 'translateY'
                : 'translateX']: interpolate,
            },
          ],
        };

        return <Toast key={item.id} style={animatedStyle} message={item} />;
      })}
    </Container>
  );
};

export default ToastContainer;
