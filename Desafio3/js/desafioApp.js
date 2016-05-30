/*jslint browser: true*/
/*global angular, console, alert*/
// El código de esta aplicación fue pasado por un validador de estilo JSLint

angular.module('desafioApp', ['ngMessages'])
    .controller('desafioController', function ($scope) {
        // 'use strict'; se utiliza para mejorar el rendimiento de ciertas funciones
        // habitualmente cuando es necesario hacer comparaciones y se sabe exactamente 
        // el tipo de datos de las variables (uso de comparaciones estrictas).        
        'use strict';
    
        // Por un tema de claridad (y buenas prácticas) se asigna el valor this a una variable
        // con el mismo nombre que el utilizado en la asignación de controllerAs
        // Al hacer esto se evita inyectar el $scope para todo aquello que es exclusivo de la vista,
        // y que no requiere explícitamente del $scope (a veces es necesario).
        var dCtrl = this,
            /**
            * Inicializa los objetos utilizados para el despliegue de datos en la vista
            */
            init = function () {
              
                dCtrl.inputData = {};
                dCtrl.confirmData = {};
                dCtrl.comunaCombo = false;
                dCtrl.SelectRegion = {}; 
                dCtrl.SelectComuna = {}; 
           
                
            };
    
      
       // Estructuras con data de regiones y comunas de chile
       dCtrl.regiones = regiones;
       dCtrl.comunas = comunas;

    
     //  dCtrl.formUser.nameUser.$dirty = true;
       
      //Funcion para mostrar comunas segun seleccion
       dCtrl.updateComuna = function(){
            dCtrl.comunaCombo = true;
            
        };
    
        // Funcion que agrega campos region y comuna a variable inputData
        dCtrl.sendData = function () {   
            // console.log(" inputData :   ",dCtrl.inputData);
            // console.log(" region :   ",dCtrl.SelectRegion.nombre);
            // console.log(" comuna :   ",dCtrl.SelectComuna.name);
            var regionAux = {"Region1" : dCtrl.SelectRegion.name};
            var comunaAux = {"Comuna1" : dCtrl.SelectComuna.name};
            var regCom = {regCom : dCtrl.SelectRegion.name+' , '+dCtrl.SelectComuna.name }
            
            //agregando campos region y comuna    
            dCtrl.inputData = angular.merge( dCtrl.inputData, regCom,regionAux,comunaAux)
       
            var aux = dCtrl.inputData;
    
            dCtrl.confirmData = angular.copy(dCtrl.inputData);
            console.log(" dCtrl.confirmData :   ",dCtrl.confirmData);
               
            // Cambia el valor de la variable para despliegue del botón de confirmación
            dCtrl.showConfirm = true;
        };
    
        /**
        * Realiza la limpieza de los datos a desplegar en los formularios de la vista.
        */
        dCtrl.cleanData = function () {
            // Llama a la función init
            init();
            
           
    
            // retorna true para que el flujo del evento continúe normalmente (está asociado 
            // a un botón de tipo reset)
            return true;
        };
    
        /**
        * Despliga el mensaje de alerta
        */
        dCtrl.showConfirmation = function () {
            alert('Información guardada');
            
            // Cambia el valor de la variable para ocultar el botón de confirmación
            dCtrl.showConfirm = false;
        };

        // Inicializa las variables para el despliegue de datos en el formulario
        init();
    
        
    });




