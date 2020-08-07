import moment from "moment";

export function sortDatesToActual(data) {
  const today = moment(new Date()).date();

  return data.filter((item) => moment(item.day).date() >= today);
}
