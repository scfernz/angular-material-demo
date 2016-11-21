/// <reference path="_all.ts" />

module ContactManagerApp {
  angular
    .module('ContactManagerApp', ['ngMaterial'])
    .service('userService', UserService)
    .controller('mainController', MainController);
}
