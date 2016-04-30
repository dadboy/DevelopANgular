 angular.module('Desafio1', [])
    .controller('formController', ['$scope', function($scope) {
        
      $scope.DevelopHelp=false;       //Flag para mostrar ayuda a desarrollador
      $scope.buttonConfirm = false;  //Flag para esconder boton confirmarcion

        //Funcion para mostrar formulario a la derecha            
      $scope.insert=function (user)
        {         
          if($scope.formulario.$valid){
             
              $scope.master = angular.copy(user);
              console.log("variable master con valores",$scope.master); 
              $scope.buttonConfirm = true;
          }      
        };
        
       // Funcion que limpia formulario y esconde formulario resultado
      $scope.clean = function ()
        {     
          $scope.DevelopHelp=false;
          $scope.user = {};
          $scope.formulario.$setPristine();
          $scope.master = {};
          $scope.formulario2.$setPristine();
        };
      
     
        //Funcion para confirmar datos y limpiar vista           
      $scope.confirm=function ()
        {       
          alert("Informacion guardada");
          $scope.DevelopHelp=false;
          $scope.buttonConfirm = false;
        }; 
         
         // Funcion para ayuda de desarrollador
      $scope.develop = function ()
        {
            if($scope.DevelopHelp==true){
                 $scope.DevelopHelp=false;
                 console.log("escondiendo develop");
            }else{
                $scope.DevelopHelp=true;
                console.log("mostrando develop");
            }
                         
         
        };
        
        
        
    }]);
    
    