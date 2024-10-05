import GameSavingLoader from './gameSavingLoader';

GameSavingLoader.load()
  .then((saving) => {
    console.log('Сохранение загружено:', saving);
  })
  .catch((error) => {
    console.error(error);
  });
