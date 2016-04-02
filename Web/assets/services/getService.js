(function () {
    'use strict';

    angular
        .module('myApp')
        .factory('UserService', UserService);

    UserService.$inject = ['$http', '$q', '$location', '$state'];

    function UserService($http, $q, $location, $state) {

        function getData(dataPath) { //Pulls JSON data from the server and passes it to a controller

            var deferred = $q.defer();

            $http.get(dataPath).then(
                function (response) {
                    //success
                    deferred.resolve(response.data);
                },
                function (response) {
                    //failure
                    deferred.reject(response.data);
                }
            );

            return deferred.promise;
        }

        function animateState(id, cssID, newClass, timeout) {

            document.getElementById(cssID).className = document.getElementById(cssID).className + ' ' + newClass;

            setTimeout(function(){ $state.go(id); }, timeout);

            console.log("animateState function activated with " + timeout + " ms delay.");
        } // id = target state to go to, cssID = ID of element to add a new class to, newClass = class to replace cssID with, timeout = amount of time needed to finish the animation.

        function getLength(id) {

            if (Object.keys(id).length > 99){ //If the amount is too high, show 999+ instead of a long string.
                return ("99+");
            }

            else if (Object.keys(id).length > 0 && Object.keys(id).length < 100){ //The amount should never be this low, this should never happen.
                return Object.keys(id).length;
            }
            else{
                return ("ERROR");//Return the amount of transmissions
            }

        } // Returns either an ERROR, 99+, or a value between 0 and 99 should never be used to get an int as it returns a string

        function processTransaction(id) { //TODO make this send a request to the backend to process the selected transaction "(id)"
            alert("Send Request to Backend and wait for response " + id);
        }

        var service = {
            getData: getData,
            animateState: animateState,
            processTransaction: processTransaction,
            getLength: getLength,
        }; //All Service functions need to go in here.
        return service;
    }


})();