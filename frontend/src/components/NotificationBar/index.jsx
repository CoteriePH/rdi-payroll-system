import React from 'react';
import {
    Wrapper,
    To,
    Name,
    ToAndIcon,
    Icon,
    WarningCount,
    Description,
    Date

} from './styles'

const NotificationBar = () => {
    return(
        <Wrapper>
            <ToAndIcon>
                <To>To:</To>
                <Name>John Doe</Name>
                <Icon>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg"                    
                        viewBox="0 0 24 24"><path d="M14.8 4.613l6.701 11.161c.963 1.603.49 3.712-1.057 4.71a3.213 3.213 0 0 1-1.743.516H5.298C3.477 21 2 19.47 2 17.581c0-.639.173-1.264.498-1.807L9.2 4.613c.962-1.603 2.996-2.094 4.543-1.096c.428.276.79.651 1.057 1.096zM12 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2zm0-9a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1z" fill="currentColor"/>
                    </svg>
                </Icon>
            </ToAndIcon>
            
           
                <WarningCount>
                    This is a first warning
                </WarningCount>

                <Description>
                    Lorem Naka overflow hidden adipisicing elit. Quia natus enim perferendis quae! Possimus odio odit aliquam eum inventore nam?
                </Description>
            
                <Date>
                    January 21, 2021
                </Date>
            
            
        </Wrapper>
    );
}

export default NotificationBar