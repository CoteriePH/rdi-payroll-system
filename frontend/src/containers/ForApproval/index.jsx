import React from 'react';
import {
  Wrapper,
} from './styles';
import NotificationBar from '@/components/NotificationBar';
const ForApproval = () => {
  return(
    <Wrapper>
      <input type="checkbox" />
      <NotificationBar />
    </Wrapper>
    );
}

export default ForApproval;
