//['$q', function ($q) {

class Endpoint {

  constructor(name) {
    this.name = name;
    this._initialized = false;
    /*
     this._apiClient = new SwaggerClient({
     url: getEndpointUrl(),
     success: function () {
     that.setup();
     }
     });
     */
  }

  setup($q) {
    this._initialized = true;
    this._apiDeferred = $q.defer();

    console.log('YEAH', $q);
  }

  get initialized() {
    return this._initialized;
  }
}

  //return Endpoint;
//
//}];

exports = Endpoint;