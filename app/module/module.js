"use strict";
// not routing
// angular
//     .module("App", []) 


// trying to make routing work
angular
    .module("App", ["ngRoute"]) //
    .config(["$routeProvider", ($routeProvider) => {
        $routeProvider
            .when("/", {
                template: "<profile></profile>"
            }).when("/profile", {
                template: "<profile></profile>"
            })
            .when("/edit", {
                template: "<edit></edit>"
            });
    }])