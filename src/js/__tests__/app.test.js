import healthSort from '../app';

const testArr = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

const handler = test.each(testArr);

handler('sorting heroes by health level', () => {
  const sortArr = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  const result = healthSort(testArr);
  expect(result).toEqual(sortArr);
});
