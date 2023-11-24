import GameSavingLoader from '../js/gameSavingLoader';

test('should return an object', () => {
  const correct = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  };
  expect(GameSavingLoader.load()).resolves.toEqual(correct);
});
