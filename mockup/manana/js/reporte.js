angular.module('icbf', ['ui.bootstrap'])

.run(['$location', '$kinvey', '$rootScope', function($location, $kinvey, $rootScope) {
	
	var promise = $kinvey.init({
		appKey: 'kid_Te0-SWHOSO',
		appSecret: '3bf19f62e32f403b8a17dbb31634f304'
	});
	promise.then(function(){
		siUsuario($kinvey,$location,$rootScope);
	},function(errorCallback){
		console.log('Kinvey error: '+ JSON.stringify(errorCallback));
		siUsuario($kinvey,$location,$rootScope);
	}
	);
}])

.controller('alarmasCtrl',['$scope', '$kinvey', function($scope, $routeParams, $kinvey, dashboardFac){
  $scope.params = $routeParams;
  $scope.alarmas = function(){
    var promise = $kinvey.ping();
    promise.then(function(response){
      alert('yeah'+response.version);
    },
    function(error){
      alert('no yeah'+error.description);
    });
  }
}])



/*function reporteCtrl($scope){
	var promesa = kinvey.DataStore.find('Infante');
}

function infantesCtrl($scope){

	$scope.buscar = $scope.opcion;

	$scope.infantes =
	[
		{
        evento:'Ingreso', fechaEvento:'05/02/2014', hogar:'Hogar 3'
      },
      {
        evento:'Ingreso', fechaEvento:'05/02/2014', hogar:'Hogar 3'
      },
      {
        evento:'Ingreso', fechaEvento:'05/02/2014', hogar:'Hogar 3'
      },
      {
        evento:'Ingreso', fechaEvento:'05/02/2014', hogar:'Hogar 3'
      }     
    ];

    $scope.ordenarPor = function(orden) {
    	$scope.ordenSeleccionado = orden;
  	};

  	$scope.status = {
    	isopen: false
  	};

  	$scope.toggled = function(open) {
    	console.log('Dropdown is now: ', open);
  	};

  	$scope.toggleDropdown = function($event) {
	    $event.preventDefault();
	    $event.stopPropagation();
	    $scope.status.isopen = !$scope.status.isopen;
  	};

};

$(function(){
  $("#date").datepicker();
  $("#date1").datepicker();
});

angular.module("date",[])
.directive("datepicker",function(){
  return {
    restrict:"A",
    link:function(scope,el,attr){
      el.datepicker();
    }
  };
})

.controller("infantesCtrl",function($scope){
  $scope.$watch("date2",function(old,newv){
    console.log(old,newv);
  });
  $scope.$watch("date",function(old,newv){
    console.log(old,newv);
  });
});*/


/*var icbfApp = angular.module('icbfApp', []);

factory('FiltroBusquedaCtrl',function($http, $scope){

	$http({
		method: 'GET', 
		url: '//baas.kinvey.com/appdata/kid_Te0-SWHOSO/infante'
	}).
    success(function(data, status, headers, config) {
    	$scope.infantes = data; 
    }).
    error(function(data, status, headers, config) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });
})*/