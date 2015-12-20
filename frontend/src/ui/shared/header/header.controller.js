HeaderController.$inject = ['$scope'];

export default function HeaderController() {

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