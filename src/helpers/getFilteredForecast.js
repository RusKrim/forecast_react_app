export const getFilteredForecast = (arr, condition = {}) => {
  const { selected, min, max } = condition;
  return arr.filter((item) => {
    return (
      item.type === selected &&
      max &&
      item.temperature <= max &&
      min &&
      item.temperature >= min
    );
  });
};
