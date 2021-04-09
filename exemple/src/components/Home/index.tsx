import React from 'react';
import {Text} from 'react-native';
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
    duration: 6,
    isBorder: false,
    lineAnimation: ['#D404D6', '#D46DD6'],
  },
  {
    title: 'Error when registering',
    description: 'Try again later',
    type: 'error',
    duration: 3,
    isBorder: true,
    lineAnimation: ['#D60405', '#fff'],
  },
  {
    title: 'You can not do that',
    description: 'You are not allowed to perform this action',
    type: 'info',
    duration: 8,
    isBorder: true,
    lineAnimation: ['#000', '#fff'],
  },
  {
    title: 'Something wrong',
    description: 'Are you sure everything is right?',
    type: 'warning',
    duration: 10,
    isBorder: false,
    lineAnimation: ['#F72905', '#fff'],
  },
  {
    title: 'You need to fill in all the fields',
    listDescriptions: [
      'Empty email field',
      'Empty password field',
      'Empty name field',
    ],
    duration: 27,
    isBorder: true,
    lineAnimation: ['#2E077E', '#fff'],
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
      // isBorder: false,
      styleAnimation: effect ?? 'bounce',
    } as IToastMessages;

    addToast(message);
  };

  return (
    <Container>
      <Button onPress={() => handleAddToast({effect: 'bounce'})}>
        <Text>Bounce</Text>
      </Button>
      <Button onPress={() => handleAddToast({effect: 'circle'})}>
        <Text>Circle</Text>
      </Button>
      <Button onPress={() => handleAddToast({effect: 'linear'})}>
        <Text>Linear</Text>
      </Button>
      <Button onPress={() => handleAddToast({effect: 'step0'})}>
        <Text>Step0</Text>
      </Button>
      <Button onPress={() => handleAddToast({effect: 'step1'})}>
        <Text>Step1</Text>
      </Button>

      <Button onPress={() => handleAddToast({direction: 'bottom'})}>
        <Text>Bottom</Text>
      </Button>
      <Button onPress={() => handleAddToast({direction: 'left'})}>
        <Text>Left</Text>
      </Button>
      <Button onPress={() => handleAddToast({direction: 'right'})}>
        <Text> Right</Text>
      </Button>
      <Button onPress={() => handleAddToast({direction: 'top'})}>
        <Text>Top</Text>
      </Button>
    </Container>
  );
};
export default Home;
