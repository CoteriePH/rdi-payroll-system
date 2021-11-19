import React from "react"
import {
 Wrapper,  
 DocumentIcon,
 Date,
 Status,
 Month,
 Day,
 Year
} from "./styles"
const PayslipIcon = ()=> {
   return(
       <Wrapper>
           <DocumentIcon>
               <svg xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 32 32">
                   <path d="M25.7 9.3l-7-7c-.2-.2-.4-.3-.7-.3H8c-1.1 0-2 .9-2 2v24c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V10c0-.3-.1-.5-.3-.7zM18 4.4l5.6 5.6H18V4.4zM24 28H8V4h8v6c0 1.1.9 2 2 2h6v16z" fill="currentColor"/><path d="M10 22h12v2H10z" fill="currentColor"/><path d="M10 16h12v2H10z" fill="currentColor"/>
               </svg>
           </DocumentIcon>
            <Date>
               <Month>08 /</Month>
               <Day>21 /</Day>
               <Year>21</Year>
            </Date>
            <Status>Check</Status>
        </Wrapper>   );
}
export default PayslipIcon
