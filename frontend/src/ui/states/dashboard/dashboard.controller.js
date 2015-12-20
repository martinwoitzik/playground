
DashboardController.$inject = ['Endpoint'];

export default function DashboardController(Endpoint) {
  Endpoint.setup();
  console.log('DashboardController called', Endpoint.initialized);
}