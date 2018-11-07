"use strict";

function ProfileService($location) {
    const self = this;
    self.info = {
        name: "Ella the Corgi Hound",
        subtitle: "I look like a corgi on stilts!",
        info: "I really (really really) love Erica and peanut butter. I also tap dance when I get too excited!",
    }

    // uses info from inputs to set bio after submit is clicked. redircts to profile
    self.setUserProfile = (bio) => {
        self.info = bio;
        $location.path("/profile");
    };

    // redirects to edit page on click
    self.editPage = () => {
        $location.path("/edit");
    };

    // returns user info to display on profile page
    self.getUserProfile = () => {
        return self.info;
    };
}

angular
    .module("App")
    .service("ProfileService", ProfileService);