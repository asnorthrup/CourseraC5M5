// the component menu item
//don't forget to inject menu-item component
(function () {
"use strict";

angular.module('public') //attach the component to public
.component('menuItem', { //speicify the menu item object
  templateUrl: 'src/public/menu-item/menu-item.html',
  bindings: {
    menuItem: '<' //we will need to pass in an item from the items template for the specific item
  },
  controller: MenuItemController //we need a menuitem controller, a default is given but we need one now so we can inject path and get images, below
});


MenuItemController.$inject = ['ApiPath']; //this controller gets the api path
function MenuItemController(ApiPath) {
  var $ctrl = this;
  $ctrl.basePath = ApiPath; //this controllerwill now have a basepath attached
}

})();
