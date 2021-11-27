const totalRunningTime = (timeIn, timeOut) => {
    return Math.floor((timeOut - timeIn) / 60000);


  };


const datePH = (dateNow)=>{
    
    const year= dateNow.getFullYear();
    const date= dateNow.getMonth()+1;
    const day = dateNow.getDate();
    return  year + "-" + date + "-" + day;
}

const timePH = ()=>{
    return Date.now()  + (3600000 * 8);
}

  
  module.exports = {
      totalRunningTime,
      datePH,
      timePH,
  }