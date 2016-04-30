 angular.module('Desafio1', [])
    .controller('formController', ['$scope', function($scope) {
        
        
     
      $scope.formShow=false;   //Flag para mostrar formulario resultado
      $scope.DevelopHelp=false;      
        

        //Funcion para mostrar formulario a la derecha            
      $scope.insert=function (user)
        {         
          if($scope.formulario.$valid){
              $scope.formShow=true;
              $scope.master = angular.copy(user);
              console.log("variable master con valores",$scope.master); 
          }
           
           
        };
        
       // Funcion que limpia formulario y esconde formulario resultado
      $scope.clean = function ()
        {
          $scope.user = {};
          $scope.formShow=false; 
          $scope.formulario.$setPristine();
        };
      
     
        //Funcion para confirmar datos y limpiar vista           
      $scope.confirm=function ()
        {       
          alert("Informacion guardada");
          $scope.formShow=false; 
          $scope.DevelopHelp=false;
          $scope.user = {};
          $scope.formulario.$setPristine();
          $scope.master = {};
          $scope.formulario2.$setPristine();
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
    
    