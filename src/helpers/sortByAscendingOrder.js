import moment from "moment";

export const sortByAscendingOrder = (data) => {
  return data.sort((a, b) => {
    const dayA = moment(a.day).date();
    const dayB = moment(b.day).date();
    return dayA > dayB ? 1 : dayA < dayB ? -1 : 0;
  });
};
