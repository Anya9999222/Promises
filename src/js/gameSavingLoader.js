import json from './parser';
import read from './reader';
import GameSaving from './gameSaving';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve, reject) => {
      read()
        .then((data) => {
          const jsonData = json(data);
          return jsonData;
        })
        .then((jsonData) => {
          resolve(new GameSaving(JSON.parse(jsonData)));
        })
        .catch((err) => reject(err));
    });
  }
}
