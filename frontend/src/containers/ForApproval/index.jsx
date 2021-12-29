import React from 'react';
import {
  Wrapper,
  Inputs,
  NotifbarTray

} from './styles';
import NotificationBar from '@/components/NotificationBar';
const ForApproval = () => {
  return(
    <Wrapper>
    <Inputs>
      <div>
        <input type="checkbox" name="forAll"/>
        <label htmlFor="forAll">All</label>
      </div>

      <div>
        <input type="checkbox" name="forSigned"/>
        <label htmlFor="forSigned">Signed</label>
      </div>

      <div>
        <input type="checkbox" name="forUnsigned"/>
        <label htmlFor="forUnsigned">Unsigned</label>      
      </div>
    </Inputs>
    <NotifbarTray>
        <NotificationBar
          Warning = "block" />

        <NotificationBar
          Danger = "block" />

        <NotificationBar />      
        
             
      </NotifbarTray>

    </Wrapper>
    );
}

export default ForApproval;
