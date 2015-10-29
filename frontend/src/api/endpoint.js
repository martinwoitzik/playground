module.exports = ['$q', function ($q) {


    var Endpoint = function (name) {
        var that = this;

        this.name = name;

        this._apiDeferred = $q.defer();
/*
        this._apiClient = new SwaggerClient({
            url: getEndpointUrl(),
            success: function () {
                that.setup();
            }
        });
*/
    };

    Endpoint.prototype.setup = function () {
/*
        this._apiDeferred.resolve({
            apiClient: this._apiClient,
            endpoint: this.name
        });
*/
    };

    return {
        Endpoint: Endpoint
    };


}];
