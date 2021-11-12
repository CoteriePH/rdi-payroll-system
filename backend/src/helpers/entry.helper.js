const totalRunningTime = (timeIn, timeOut) => {
    return (timeOut - timeIn) / (1000 * 60 * 60);
  };




  
  module.exports = {
      totalRunningTime,
  }