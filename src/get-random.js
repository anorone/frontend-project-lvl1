const getRandomNumber = (start, end) => start + Math.round(Math.random() * (end - start));

const getRandomFrom = (coll) => {
  const lastIndex = coll.length - 1;
  const randomIndex = getRandomNumber(0, lastIndex);

  return coll[randomIndex];
};

export { getRandomNumber, getRandomFrom };
