export const getRandomItemInArray = array => {
  return array[Math.floor(Math.random() * array.length)];
};

// min (inclusive), max (exclusive)
export const getRandomArbitrary = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};
