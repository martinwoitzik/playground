HeaderController.$inject = ['$scope'];

function HeaderController() {

  let vm = this;

  vm.doSomething = doSomething;

  activate();

  function doSomething() {
    console.log('doing something');
  }

  function activate() {
    console.log('activate header directive');
  }

}

module.exports = HeaderController;