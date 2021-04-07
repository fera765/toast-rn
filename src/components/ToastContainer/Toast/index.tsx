import React, { useCallback, useEffect } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { IToastMessages } from '..';
import { useToast } from '../../..';
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

const Toast: React.FC<ToastProps> = ({ message, style }) => {
  const { removeToast } = useToast();
  const listDesctiption = message.listDescriptions;

  useEffect(() => {
    const timer = setTimeout(
      () => {
        removeToast(message.id);
      },
      listDesctiption ? 24000 : message.duration ?? 6000,
    );

    return () => {
      clearTimeout(timer);
    };
  }, [removeToast, listDesctiption, message.duration, message.id]);

  const handleRemoveToast = useCallback(() => {
    removeToast(message.id);
  }, [removeToast, message.id]);

  return (
    <AnimatedPage style={style}>
      <Container
        type={message.type}
        hasDescription={!!message.description}
        onPress={handleRemoveToast}
        activeOpacity={1}
      >
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
    </AnimatedPage>
  );
};

export default Toast;
