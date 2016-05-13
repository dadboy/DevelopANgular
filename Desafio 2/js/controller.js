 angular.module('Desafio2', [])
    .controller('formController', ['$scope', function($scope) {
        
       //Inicializacion de variables     
       $scope.friends = angular.copy(usuarios);        
       $scope.inputData = {};    
       $scope.buttonEdit = false;
       $scope.buttonConfirm = false;
       $scope.buttonClean = false;
        
        
     $scope.ShowData = function(index,person) {

         $scope.inputData = angular.copy(person);
         $scope.buttonEdit = true;
   
     };    
        
        
        
      $scope.formShow=false;   //Flag para mostrar formulario resultado
      $scope.DevelopHelp=false;      
      $scope.buttonConfirm = false;
      $scope.editForm = false;    
     
        
    //Funcion para mostrar formulario a la derecha        
      $scope.edit = function(){
         $scope.buttonEdit = false;
         $scope.buttonConfirm = true;
         $scope.buttonClean = true; 
         $scope.editForm = true;  
       };    
        
        
    // Funcion que limpia formulario y esconde formulario resultado
      $scope.clean = function (){
         $scope.buttonEdit = true;
         $scope.buttonConfirm = false;
         $scope.buttonClean = false; 
         
        };    
        
        
        
        
        
        
        
        
      $scope.insert=function (user)
        {         
          if($scope.formulario.$valid){
              $scope.formShow=true;
              $scope.master = angular.copy(user);
              console.log("variable master con valores",$scope.master); 
              $scope.buttonConfirm = true;
          }
           
           
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
    
    var usuarios = [
        { id: 1 , nombres: "David Alexis",   apellidos: "Espinoza Bravo" , correo: "ferest116@gmail.com" , direccion1: "santa ines 1992", direccion2: "marchant pereira 221" , show:"false"},
          { id: 2, nombres: "Peter Alexis",   apellidos: "Bravo" , correo: "Bravo@gmail.com" , direccion1: "santa ines 1992", direccion2: "marchant pereira 221" ,show:"false"},
          { id: 3, nombres: "pablo cotapo",   apellidos: "contreras " , correo: "contreras@gmail.com" , direccion1: "santa ines 1992", direccion2: "marchant pereira 221" ,show:"false"},
          { id: 4, nombres: "Turro tokoanu",   apellidos: "gutierrez" , correo: "gutierrez@gmail.com" , direccion1: "santa ines 1992", direccion2: "marchant pereira 221" ,show:"false"},
          { id: 5, nombres: "Fero Chiqutin",   apellidos: "Rodriguez" , correo: "Rodriguez@gmail.com" , direccion1: "santa ines 1992", direccion2: "marchant pereira 221" ,show:"false"},
          { id: 6, nombres: "Rocio inutil",   apellidos: "aporta nada" , correo: "aporta_nada@gmail.com" , direccion1: "bilz y pap 666", direccion2: "mi casa y nada mas" ,show:"false"}
      ]; 