import React, {useCallback, useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {Animated} from 'react-native';
import {IToastMessages} from '..';
import {useToast} from '../../..';
import {
  Container,
  BoxMessage,
  BoxInfo,
  Title,
  BoxInfoListMesages,
  Description,
  ButtonClose,
  AnimatedPage,
} from './styles';

interface ToastProps {
  message: IToastMessages;
  style: object;
}

const Icons = {
  info: <Icon name="info" size={24} />,
  error: <Icon name="alert-circle" size={24} />,
  warning: <Icon name="alert-triangle" size={24} />,
  success: <Icon name="check-circle" size={24} />,
};

const Toast: React.FC<ToastProps> = ({message, style}) => {
  const [animation] = useState(new Animated.Value(0));

  const {removeToast} = useToast();
  const listDesctiption = message.listDescriptions;
  const visibleLine = message.visibleLine ?? true;
  const lineAnimation = message.lineAnimation ?? ['#1f1f1f', '#ccc'];
  const isBorder = message.isBorder ?? true;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 100,
      duration: (message.duration ?? 6000) + 500,
      useNativeDriver: false,
    }).start();
  }, [animation, message.duration]);

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, message.duration ?? 6000);

    return () => {
      clearTimeout(timer);
    };
  }, [removeToast, message.duration, message.id]);

  const handleRemoveToast = useCallback(() => {
    removeToast(message.id);
  }, [removeToast, message.id]);

  const interṕolatedValue = animation.interpolate({
    inputRange: [0, 100],
    outputRange: lineAnimation,
  });

  const interṕolatedValueWidth = animation.interpolate({
    inputRange: [0, 100],
    outputRange: ['96%', '0%'],
  });

  return (
    <AnimatedPage style={style}>
      <Container
        type={message.type}
        hasDescription={!!message.description}
        onPress={handleRemoveToast}
        isBorder={isBorder}
        activeOpacity={1}>
        <BoxMessage>
          <BoxInfo>
            {Icons[message.type || 'info']}

            <Title>{message.title}</Title>
          </BoxInfo>

          <ButtonClose onPress={handleRemoveToast}>
            <Icon name="x-circle" size={18} />
          </ButtonClose>
        </BoxMessage>

        <BoxInfoListMesages>
          {message.description && (
            <Description>{message.description}</Description>
          )}

          {listDesctiption?.map((item, index) => (
            <Description key={String(index)}>* {item}</Description>
          ))}
        </BoxInfoListMesages>
      </Container>
      {visibleLine && (
        <Animated.View
          style={{
            top: -14,
            left: 17,
            borderBottomLeftRadius: isBorder ? 10 : 0,
            borderBottomRightRadius: isBorder ? 10 : 0,
            width: interṕolatedValueWidth,
            height: 6,
            backgroundColor: interṕolatedValue,
          }}
        />
      )}
    </AnimatedPage>
  );
};

export default Toast;
