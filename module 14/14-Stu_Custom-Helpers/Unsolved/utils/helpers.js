module.exports = {
  //formats current time
  format_time: (date) =>
  {
    return date.toLocaleTimeString();
  },
  // adds five years to the date, and formats it as M/D/YYYY
  format_date: (date) => 
  {
    return `${new Date(date).getMonth()}/${new Date(date).getDate()}/${new Date(date).getFullYear() + 5}`;
  }
};
