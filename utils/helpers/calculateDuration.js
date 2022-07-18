export const calculateTimeLeft = (targetDate, hour) => {
  let diff = (new Date(targetDate + ` ${hour}`)) - new Date();
  
  let timeLeft = {};

  if (diff > 0) {
    timeLeft = {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  } else {
    timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }


  return timeLeft;
};
