import GameSavingLoader from '../gameSavingLoader';

test('testing load method', async () => {
  const expectedData = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  };

  const result = await GameSavingLoader.load();
  expect(result).toEqual(expectedData);
});
