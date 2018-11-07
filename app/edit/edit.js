"use strict";
// Defining the child component
const edit = {
  // This HTML template will be inserted where the child component is referenced
  templateUrl: "app/edit/edit.html",
  controller: ["ProfileService", function(ProfileService) {
    const vm = this;

    vm.bio = ProfileService.getUserProfile();

    vm.passData = (bio) => {
      ProfileService.setUserProfile(bio);
    };
  }]
};

// Getting the module and creating the component
angular
  .module("App")
  .component("edit", edit);
