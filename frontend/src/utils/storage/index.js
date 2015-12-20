class Storage {

  constructor() {
  }

  serialize(data) {
    return JSON.stringify(data);
  }

  deserialize(string) {
    return JSON.parse(string);
  }

  get(key) {
    var value = localStorage.getItem(key);
    if (value !== undefined) {
      value = this.deserialize(value);
    }
    return value;
  }

  set(key, value) {
    if (value !== undefined) {
      value = this.serialize(value);
    }
    localStorage.setItem(key, value);
  }

  remove() {
    localStorage.removeItem(key);
  }

}

angular.module('storage', [])
  .factory('Storage', new Storage());