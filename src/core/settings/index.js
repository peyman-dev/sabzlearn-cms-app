export const createAnArrayFromObject = (record) =>
  Object.keys(record).map((key) => [key, record[key]]);
