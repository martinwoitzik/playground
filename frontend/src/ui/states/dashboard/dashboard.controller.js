
DashboardController.$inject = ['Endpoint'];

function DashboardController(Endpoint) {
  Endpoint.setup();
  console.log('DashboardController called', Endpoint.initialized);
}

module.exports = DashboardController;