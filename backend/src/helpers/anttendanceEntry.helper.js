        // Schedule:
        // 6:00 am -  2:30 pm  - Six
        // 7:00 am – 4:00 pm    - Seven
        // 8:00 am – 5:00 pm    - Eight
        // 8:30 am – 5:30 pm    -EightHalf
        // 9:00 am – 6:00 pm    - Nine
        // 2:00 pm – 10:30 pm   - Two
        // 10:00 pm – 6:30 am   - Ten

const timeInSix = (timeIn) => {
    const hours = timeIn.getHours();
    const minutes = timeIn.getMinutes();
    const time = hours + ":" + minutes;
    if(time == "6:00"){
        return "ON TIME";
    }
    else{
        return "LATE IN";
    }
  };

  const timeOutSix = (timeOut) => {
    const hours = timeOut.getHours();
    const minutes = timeOut.getMinutes();
    const time = hours + ":" + minutes;
    if(timeIn == "14:30"){
        return "ON TIME";
    }
    else{
        return "EARLY OUT";
    }
  };


  
  module.exports = {
      totalRunningTime,
  }