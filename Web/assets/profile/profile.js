/**
 * Created by cody on 4/2/16.
 */
(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('Profile', ['UserService', Profile]);

    Profile.$inject =  ['UserService'];

    function Profile(UserService) {

        var vm = this;

        console.log("Controller Loaded [profile.js]");
        
        UserService.getData('assets/json/sampleFilms.json').then(
            function(resolve){
                //success
              vm.watchedTiles = resolve.icons;
                console.log("Watched Tiles saved to vm.tiles");
            },
            function(reject){
                //failure
                console.log("Watched Tiles Failed to load tile icons :(");
            }
        );

        UserService.getData('assets/json/sampleFilms.json').then(
            function(resolve){
                //success
              vm.wishedListTiles = resolve.icons;
                console.log("Wish List Tiles saved to vm.tiles");
            },
            function(reject){
                //failure
                console.log("Wish List Failed to load tile icons :(");
            }
        );

        UserService.getData('assets/json/sampleFilms.json').then(
            function(resolve){
                //success
              vm.currentlyWatchingTiles = resolve.icons;
                console.log("Currently Watching List Tiles saved to vm.tiles");
            },
            function(reject){
                //failure
                console.log("Currently Watching List Failed to load tile icons :(");
            }
        );

        vm.getProfile = function () {
            FB.api('/10153525375348317', function(response) {
                document.getElementById("profileNameText").innerHTML = response.name;
            });
        };


        vm.hideTiles = function (id) {

            //If the given ID does not match one of the existing ID's, hide that element.

            if (id != "tileOne"){document.getElementById("tileOne").className = "hideTile";}
            if (id != "tileTwo"){document.getElementById("tileTwo").className = "hideTile";}
            if (id != "tileThree"){document.getElementById("tileThree").className = "hideTile";}
            if (id != "tileFour"){document.getElementById("tileFour").className = "hideTile";}
            if (id != "tileFive"){document.getElementById("tileFive").className = "hideTile";}
            if (id != "tileSix"){document.getElementById("tileSix").className = "hideTile";}
            if (id != "tileSeven"){document.getElementById("tileSeven").className = "hideTile";}
            if (id != "tileEitht"){document.getElementById("tileEight").className = "hideTile";}
            if (id != "tileNine"){document.getElementById("tileNine").className = "hideTile";}
            if (id != "tileTen"){document.getElementById("tileTen").className = "hideTile";}
        };

        vm.animateState = function(id, cssID, newClass, timeout) {
            UserService.animateState(id, cssID, newClass, timeout);
        };
    }
})();


