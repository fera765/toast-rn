import styled from 'rn-css';
import { Animated } from 'react-native';

interface ContainerProps {
  type?: 'success' | 'error' | 'info' | 'warning';
  hasDescription: boolean;
}

const toastTypeVariation = {
  info: `
    background: #d1ecf2;
    color: #18415a;
  `,
  warning: `
    background: #fff3ce;
    color: #8c6108;
  `,
  success: `
    background: #d3eedb;
    color: #4d876b;
  `,
  error: `
    background: #f7d7db;
    color: #6b1c29;
  `,
};

export const Container = styled.TouchableOpacity<ContainerProps>`
  position: relative;
  width: 100%;
  margin: 0 0 8px 16px;

  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  border-radius: 10px;

  ${props => toastTypeVariation[props.type || 'info']}
`;

export const BoxMessage = styled.View`
  position: relative;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const BoxInfo = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const BoxInfoListMesages = styled.View`
  margin-left: 30px;
  width: 300px;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font: normal 20px/20px 'Roboto-medium';
  margin-left: 10px;
`;
export const Description = styled.Text`
  font: normal 16px/16px 'Times-new-400';
  margin-top: 6px;
`;
export const ButtonClose = styled.TouchableOpacity``;

export const AnimatedPage = styled(Animated.View)``;
