NavbarController.$inject = [];

function NavbarController() {

  let vm = this;

  activate();

  function activate() {
    console.log('activate navbar directive');
  }
}

module.exports = NavbarController;