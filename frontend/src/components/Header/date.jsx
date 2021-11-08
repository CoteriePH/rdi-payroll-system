import React from 'react';

function CurrDate() {
  // var today = new Date();
  // var month = today.getMonth();
  // var monthList = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEPT", "OCT", "NOV", "DEC"];
  // var date = today.getDate();
  // var year = today.getFullYear();
  // var day = today.getDay();
  // var dayList = ["SUNDAY","MONDAY","TUESDAY","WEDNESDAY ","THURSDAY","FRIDAY","SATURDAY"];
  const today = new Date();
  const dayList = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY ', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
  const monthList = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEPT',
    'OCT',
    'NOV',
    'DEC'
  ];

  const month = monthList[today.getMonth()];
  const date = today.getDate();
  const year = today.getFullYear();
  const day = dayList[today.getDay()];

  return (
    <div>
      {month + ' / ' + date + ' / ' + year}
      <div>{day}</div>
    </div>
  );
}

export default CurrDate;
