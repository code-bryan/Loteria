(function () {
    "use strict";

    var app = angular.module('loteria', []);

    app.controller('LoteriaController', ["$scope", function($scope){
        
        var vm = this;
        limpiarNumeros();

        $scope.arrayNumeros = [];

        vm.jugar = function() {

            if ($scope.arrayNumeros.length == 25) {
                alert("Ya no puede jugar mas numeros");
                return;
            }; 

            if ($scope.arrayNumeros.length > 0) {
                var isInArray = false;
                $scope.arrayNumeros.map(function(item, index) {
                    if (item[0] == $scope.primerNumero && item[1] == $scope.segundoNumero && item[2] == $scope.tercerNumero) isInArray = true;
                });

                $scope.arrayNumeros.push([
                    Math.abs($scope.primerNumero),
                    Math.abs($scope.segundoNumero),
                    Math.abs($scope.tercerNumero),
                    isInArray
                ]);
            } else {
                $scope.arrayNumeros.push([
                    $scope.primerNumero,
                    $scope.segundoNumero,
                    $scope.tercerNumero,
                    false
                ]);
            }
        
            limpiarNumeros();
        };

        vm.cancelar = function() {
            limpiarNumeros();
        };

        vm.limpiar = function() {
            $scope.arrayNumeros = [];
        };

        function limpiarNumeros() {
            $scope.primerNumero = 0;
            $scope.segundoNumero = 0;
            $scope.tercerNumero = 0;
        }
        
    }]);

    

})();