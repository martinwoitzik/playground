NavbarController.$inject = [];

export default function NavbarController() {

  let vm = this;

  activate();

  function activate() {
    console.log('activate navbar directive');
  }
}