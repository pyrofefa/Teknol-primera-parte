 var app = angular.module('starter.controllers', [])

//menu lateral controlador
app.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
});
//contacto controlador
app.controller('contacto',function($scope,$http){
   
   //Capturar formulario  
  $scope.enviar = function()
  {
    //Enviar a webservice local
    var servidor = "http://192.168.1.111/teknol/comentarios.php";
    $http.post(servidor)
    .success(function(response) {
        $scope.contacto = response.data;
    });  
    
    alert("Gracias por comentar:"+$scope.nombre)//imprimir mensaje
    //Limpiar textos
    $scope.nombre = "";
    $scope.correo = "";
    $scope.comentario = "";
  }

});
