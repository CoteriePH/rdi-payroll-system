import React from "react";
import {
    Wrapper,
    Month,
    DaysWorked,
    Deductions,
    Details,
    TotalDW,    
    Total
} from "./styles"
// Monthly Annual Report Box
const MarBox = ()=> {
 return(
    <Wrapper>
        <Month>JANUARY</Month>
        <Details>
            
            <DaysWorked>
                Days Worked: 
                <TotalDW>24</TotalDW>
            </DaysWorked>

            <Deductions>
                Deductions: 
                <TotalDW>P 0.0</TotalDW>
            </Deductions>

            <Total>
                P 10 566.00
            </Total>

        </Details>
    </Wrapper>    
 );
}

export default MarBox;