import React from 'react';
import {
  useToast,
  IToastMessages,
  styleAnimated,
  styleDirection,
} from 'toast-rn';
import {Button, Container} from './styles';

interface IToastButton {
  effect?: styleAnimated;
  direction?: styleDirection;
}

const messages = [
  {
    title: 'Success in registering',
    description: 'Ready now and just access your profile',
    type: 'success',
  },
  {
    title: 'Error when registering',
    description: 'Try again later',
    type: 'error',
  },
  {
    title: 'You can not do that',
    description: 'You are not allowed to perform this action',
    type: 'info',
  },
  {
    title: 'Something wrong',
    description: 'Are you sure everything is right?',
    type: 'warning',
  },
  {
    title: 'You need to fill in all the fields',
    listDescriptions: [
      'Empty email field',
      'Empty password field',
      'Empty name field',
    ],
    type: 'error',
  },
];

const Home: React.FC = () => {
  const {addToast} = useToast();

  const handleAddToast = ({effect, direction}: IToastButton) => {
    var greeting_id = Math.floor(Math.random() * messages.length);

    const message = {
      ...messages[greeting_id],
      direction: direction ?? 'right',
      styleAnimation: effect ?? 'bounce',
      duration: 6000,
    } as IToastMessages;

    addToast(message);
  };

  return (
    <Container>
      <Button onPress={() => handleAddToast({effect: 'bounce'})}>Bounce</Button>
      <Button onPress={() => handleAddToast({effect: 'circle'})}>Circle</Button>
      <Button onPress={() => handleAddToast({effect: 'linear'})}>Linear</Button>
      <Button onPress={() => handleAddToast({effect: 'step0'})}>Step0</Button>
      <Button onPress={() => handleAddToast({effect: 'step1'})}>Step1</Button>

      <Button onPress={() => handleAddToast({direction: 'bottom'})}>
        Bottom
      </Button>
      <Button onPress={() => handleAddToast({direction: 'left'})}>Left</Button>
      <Button onPress={() => handleAddToast({direction: 'right'})}>
        Right
      </Button>
      <Button onPress={() => handleAddToast({direction: 'top'})}>Top</Button>
    </Container>
  );
};
export default Home;
