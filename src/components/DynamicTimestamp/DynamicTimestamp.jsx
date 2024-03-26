function dynamicTS(commentTimestamp, currentTimestamp) {
  let dynamicTimestamp;

  let commentTime = new Date(commentTimestamp);
  let currentTime = new Date(currentTimestamp);

  const yearsDifference = Math.abs(
    currentTime.getFullYear() - commentTime.getFullYear()
  );
  const monthsDifference = Math.abs(
    currentTime.getMonth() - commentTime.getMonth()
  );
  const daysDifference = Math.abs(
    currentTime.getDate() - commentTime.getDate()
  );
  const hoursDifference = Math.abs(
    currentTime.getHours() - commentTime.getHours()
  );
  const minutesDifference = Math.abs(
    currentTime.getMinutes() - commentTime.getMinutes()
  );
  const secondsDifference = Math.abs(
    currentTime.getSeconds() - commentTime.getSeconds()
  );

  if (yearsDifference < 1) {
    if (monthsDifference < 1) {
      if (daysDifference < 1) {
        if (hoursDifference < 1) {
          if (minutesDifference < 1) {
            dynamicTimestamp = `${secondsDifference} second(s) ago`;
          } else {
            dynamicTimestamp = `${minutesDifference} minute(s) ago`;
          }
        } else {
          dynamicTimestamp = `${hoursDifference} hour(s) ago`;
        }
      } else {
        dynamicTimestamp = `${daysDifference} day(s) ago`;
      }
    } else {
      dynamicTimestamp = `${monthsDifference} month(s) ago`;
    }
  } else {
    dynamicTimestamp = `${yearsDifference} year(s) ago`;
  }

  return dynamicTimestamp;
}

export default dynamicTS;
