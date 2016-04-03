/**
 * Created by cody on 4/2/16.
 */
(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('FilmSearch', ['UserService', FilmSearch]);

    FilmSearch.$inject =  ['UserService'];

    function FilmSearch(UserService) {

        var vm = this;

        console.log("Controller Loaded [filmSearch.js]");
        UserService.getData('assets/json/sampleFilms.json').then(
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

        vm.popHideActivate = function () {

            //This function takes all of the created POP menus by ID and applies their respective class to them.

            document.getElementById("popContents").className = "popContents";
            document.getElementById("popHide").className = "popHide";
            document.getElementById("popHideEscape").className = "popHideEscape";

            window.scrollTo(0, 0); // This sets the window position to the top so everything is neat and organized.

            var htmlElement =  document.getElementsByTagName( 'html' )[0];
            htmlElement.setAttribute( 'class', 'overflowOff' );

        };
        //This function hides the popContents window by changing its class
        vm.popHideDeactivate = function () {

            //This function takes all of the created POP menus by ID and applies their respective class to them.

            document.getElementById("popContents").className = "popContentsOut";
            document.getElementById("popHide").className = "popHideOut";
            document.getElementById("popHideEscape").className = "popHideEscapeOut";
            setTimeout(function () {
                document.getElementById("popHide").className = "popEmpty";
                document.getElementById("popHideEscape").className = "popEmpty";
            }, 300);

            window.scrollTo(0, 0); // This sets the window position to the top so everything is neat and organized.

            var htmlElement =  document.getElementsByTagName( 'html' )[0];

            htmlElement.setAttribute( 'class', 'overflowOn' );

        };

        vm.animateState = function(id, cssID, newClass, timeout) {
            UserService.animateState(id, cssID, newClass, timeout);
        };
    }
})();