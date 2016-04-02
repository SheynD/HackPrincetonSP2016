(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('MainMenu', ['UserService', MainMenu]);

    MainMenu.$inject =  ['UserService'];

    function MainMenu(UserService) {

        var vm = this;

        console.log("Controller Loaded [mainMenu.js]");

        /*This grabs all of the info on the tiles from a JSON file*/

        UserService.getData('assets/json/tiles.json').then(
            function(resolve){
                //success
              vm.tiles = resolve.icons;
                console.log("Tiles saved to vm.tiles");
            },
            function(reject){
                //failure
                console.log("Failed to load tile icons :(");
            }
        );

        UserService.getData('assets/profile/profile.json').then(
            function(resolve){
                //success
                vm.profile = resolve.profile[0];
                console.log("loaded profile picture");
            },
            function(reject){
                //failure
                console.log("Failed to load tile icons :(");
            }
        );

        vm.hideTiles = function (id) {

            //If the given ID does not match one of the existing ID's, hide that element.

            if (id != "tileOne"){document.getElementById("tileOne").className = "hideTile";}
            if (id != "tileTwo"){document.getElementById("tileTwo").className = "hideTile";}
            if (id != "tileThree"){document.getElementById("tileThree").className = "hideTile";}
            if (id != "tileFour"){document.getElementById("tileFour").className = "hideTile";}
            if (id != "tileFive"){document.getElementById("tileFive").className = "hideTile";}
            if (id != "tileSix"){document.getElementById("tileSix").className = "hideTile";}
        };

        vm.animateState = function(id, cssID, newClass, timeout) {
            UserService.animateState(id, cssID, newClass, timeout);
        };
    }


})();