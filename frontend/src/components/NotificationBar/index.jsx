import React from 'react';
import {
    Wrapper,
    To,
    Name,
    ToAndIcon,
    Icon,
    WarningCount,
    Description,
    Date,
    Warning,
    Danger

} from './styles'

const NotificationBar = (props) => {
    return(
        <Wrapper>
            <ToAndIcon>
                <To>To:</To>
                <Name>John Doe</Name>
                <Icon>
                    <Warning 
                        Warning = {props.Warning}
                        xmlns="http://www.w3.org/2000/svg"                    
                        viewBox="0 0 24 24"><path d="M14.8 4.613l6.701 11.161c.963 1.603.49 3.712-1.057 4.71a3.213 3.213 0 0 1-1.743.516H5.298C3.477 21 2 19.47 2 17.581c0-.639.173-1.264.498-1.807L9.2 4.613c.962-1.603 2.996-2.094 4.543-1.096c.428.276.79.651 1.057 1.096zM12 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2zm0-9a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1z" fill="currentColor"/>
                    </Warning>
                    
                    <Danger 
                        Danger = {props.Danger}
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24">
                            <path d="M14.9 3H9.1c-.53 0-1.04.21-1.42.59l-4.1 4.1C3.21 8.06 3 8.57 3 9.1v5.8c0 .53.21 1.04.59 1.41l4.1 4.1c.37.38.88.59 1.41.59h5.8c.53 0 1.04-.21 1.41-.59l4.1-4.1c.38-.37.59-.88.59-1.41V9.1c0-.53-.21-1.04-.59-1.41l-4.1-4.1c-.37-.38-.88-.59-1.41-.59zm.64 12.54a.996.996 0 0 1-1.41 0L12 13.41l-2.12 2.12a.996.996 0 1 1-1.41-1.41L10.59 12L8.46 9.88a.996.996 0 1 1 1.41-1.41L12 10.59l2.12-2.12a.996.996 0 1 1 1.41 1.41L13.41 12l2.12 2.12c.4.39.4 1.03.01 1.42z" fill="currentColor"/>
                    </Danger>


                    
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