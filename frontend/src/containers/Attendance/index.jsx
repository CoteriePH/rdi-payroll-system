import React from 'react';
import Header from '@/components/Header';
import {
  Wrapper
} from "./styles"
function Attendance() {
  // Yung content nito should be in auditor/payroll. Dito na lang muna yung playground since
  // mahirap pa gumawa gamit react hooks, ilipat na lang.
  return (
    <Wrapper>      
      <Header  
        tempDisplay="flex"      
        generatePayroll="generate payroll"
        display="none" // Header Date
        jc="flex-start"        
        />

        
    </Wrapper>
  );
}

export default Attendance;
