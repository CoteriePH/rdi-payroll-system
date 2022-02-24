const timeConverter = (time) => {
  if (time && time.length > 0) {
    let time_arr = time.split(":");
    let new_time = new Date();
    new_time.setHours(time_arr[0], time_arr[1], 0);
    return new_time;
  }
  return null;
};

const getTimeInStatus = (time_log, late_time) => {
  if (!time_log || !late_time) {
    return null;
  }

  //set status
  if (time_log.getTime() >= late_time.getTime()) {
    return "LATE IN";
  } else {
    return "ON TIME";
  }
};

const getTimeOutStatus = (time_log, valid_time_out) => {
  if (!time_log || !valid_time_out) {
    return null;
  }
  //todo - condition for overtime (COMPUTE YUNG DIFFERENCE KUNG ILANG HOURS)
  //set status
  if (time_log.getTime() >= valid_time_out.getTime()) {
    return "ON TIME";
  } else {
    return "EARLY OUT";
  }
};

const getTardiness = (time_in, late_time_in) => {
  if (!time_in || !late_time_in) {
    return false;
  }
  //tardy
  if (time_in.getTime() <= late_time_in.getTime()) {
    return true;
  } else {
    return false;
  }
};

const getTotalRunningTime = (time_in, time_out) => {
  //total running time
  if (time_in != null && time_out !== null) {
    return (time_out.getTime() - time_in.getTime()) / (1000 * 60 * 60) - 1;
  } else {
    return null;
  }
};

const getTotalRunningTime2 = (time_in, time_out) => {
  //total running time
  if (time_in != null && time_out !== null) {
    const diffInMs = Math.abs(time_out - time_in);
    return diffInMs / 1000;
  } else {
    return null;
  }
};

const getAbsentStatus = (time_in) => {
  if (time_in == null || time_in == "") {
    return "ABSENT";
  } else {
    return null;
  }
};

module.exports = {
  getTardiness,
  timeConverter,
  getTimeOutStatus,
  getTimeInStatus,
  getAbsentStatus,
  getTotalRunningTime,
  getTotalRunningTime2,
};
