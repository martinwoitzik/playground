
export default class Endpoint {

  /*@ngInject;*/
  constructor($q) {
    this._$q = $q;
    this._initialized = false;
  }

  setup() {
    this._initialized = true;
    this._deferred = this._$q.defer();
  }

  get initialized() {
    return this._initialized;
  }

}