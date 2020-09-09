import React from 'react';
import { useTransition } from 'react-spring';

import { IToastMessage } from '../../hooks/ToastContext';

import Toast from './Toast';

import { Container } from './styles';

interface IToastContainerProps {
  messages: IToastMessage[];
}

const ToastContainer: React.FC<IToastContainerProps> = ({ messages }) => {
  const messagesWithTransitions = useTransition(
    messages,
    message => message.id,
    {
      from: { right: '-120%', opacity: 0 },
      enter: { right: '0%', opacity: 1 },
      leave: { right: '-120%', opacity: 0 },
    },
  );

  return (
    <Container>
      {messagesWithTransitions.map(({ item, key, props }) => (
        <Toast message={item} style={props} key={key} />
      ))}
    </Container>
  );
};

export default ToastContainer;
