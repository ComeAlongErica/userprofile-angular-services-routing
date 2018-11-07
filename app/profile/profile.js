"use strict";

const profile = {
  templateUrl: "app/profile/profile.html",

  controller: ["ProfileService", function(ProfileService) {
    const vm = this;
    vm.bio = ProfileService.getUserProfile();

    vm.editPage = () => {
      ProfileService.editPage();
    };
  }]
};

angular
  .module("App")
  .component("profile", profile);