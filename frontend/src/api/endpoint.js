
class Endpoint {

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

  static endpointFactory($q) {
    return new Endpoint($q);
  }

}

Endpoint.endpointFactory.$inject = ['$q'];

module.exports = Endpoint;