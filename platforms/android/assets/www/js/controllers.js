 var app = angular.module('starter.controllers', [])

//menu lateral controlador
app.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

});
//contacto controlador
app.controller('contacto',function($scope,$http){
   
  $http.post("/teknol/comentarios.php")
    .then(function(response) {
        $scope.contacto = response.data;
    });  
  $scope.enviar = function()
  {
    alert("Gracias por comentar:"+$scope.nombre)
    $scope.nombre = "";
    $scope.correo = "";
    $scope.comentario = "";

  }

});
