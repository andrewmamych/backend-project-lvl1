// eslint-disable-next-line import/prefer-default-export
export const isEven = (n) => n % 2 === 0;

export const getRandomIntegerInRange = (min, max) => {
  const diff = max - min + 1;
  return () => Math.floor(Math.random() * diff) + min;
};

export const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};
