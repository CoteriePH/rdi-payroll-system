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
          SubTextCount = "This is a SubTextCount." />      
      
        <NotificationBar
          SubTextCount = "This is first warning."
          Warning = "block" />

        <NotificationBar
          SubTextCount = "This is second or third warning idk."
          Danger = "block" />

        <NotificationBar
          SubTextCount = "This is an important information."
          BlueBell = "block" />    

        <NotificationBar
          SubTextCount = "This is an announcement."
          BubbleMessage = "block" />  

      </NotifbarTray>

    </Wrapper>
    );
}

export default ForApproval;
