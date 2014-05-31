angular.module('icbf', ['ngRoute' , 'ngCookies'])

.controller('ppalCtrl', function($scope, $route, $routeParams, $location){	
	$scope.route = $route;
	$scope.location = $location;
	$scope.routeParams = $routeParams;
})

.config(function($routeProvider, $locationProvider){
	$routeProvider
		.when('/',{
			templateUrl:'/home.html',
			controller:'dashboardCtrl',
			resolve:{
				delay: function($q,$timeout){
					var delay = $q.defer();
					$timeout(delay.resolve, 1000);
					return delay.promise;
				}
			}
		})
		.when('/dashboard',{
			templateUrl: 'plantillas/dashboard.html',
			controller: 'dashboardCtrl'
		})
		.when('/alertas',{
			templateUrl:'alertas.html',
			controller:'alertasCtrl'
		})
		.when('/reportes/infantes',{
			templateUrl:'infantes.html',
			controller:'infantesCtrl'
		})
		.when('/reportes/hogares',{
			templateUrl:'hogares.html',
			controller:'hogaresCtrl'
		})
		.when('/admin/regionales',{
			templateUrl:'regionales.html',
			controller:'regionalesCtrl'
		})
		.when('/admin/centros',{
			templateUrl:'centros.html',
			controller:'centrosCtrl'
		})
		.when('/admin/usuarios',{
			templateUrl:'usuarios.html',
			controller:'usuariosCtrl'
		})
		.when('/indicadores/totales',{
			templateUrl:'totales.html',
			controller:'totalesCtrl'
		})
		.when('/indicadores/nuevos',{
			templateUrl:'nuevos.html',
			controller:'nuevosCtrl'
		})
		.when('/indicadores/inactivos',{
			templateUrl:'invactivos.html',
			controller:'inactivosCtrl'
		})
		.when('/indicadores/ingresos',{
			templateUrl:'ingresos.html',
			controller:'ingresosCtrl'
		})
		.otherwise({
			redirectTo: '/'//plantillas/dashboard.html
		});
});


.controller('menuIzquierdoCtrl', function($scope){
	$scope.soloUnSubMenu = true;

	$scope.menus = [
		{
			titulo: 'Alertas',
			submenu: [
				{
					titulo: 'Alertas',
					ruta: '/alertas'
				}
			]
		},
		{
			titulo: 'Indicadores',
			submenu: [
				{
					titulo: 'Indicadores',
					ruta: '/indicadores'
				}
			]
		},
		{
			titulo: 'Reportes',
			submenu: [
				{
					titulo: 'Infantes',
					ruta: '/infantes'
				},
				{
					titulo: 'Hogares',
					ruta: '/hogares'
				}
			]
		},
		{
			titulo: 'Administración',
			submenu: [
				{
					ruta: '/usuarios',
					titulo: 'Usuarios'
				},
				{
					ruta: '/centros',
					titulo: 'Centros'
				}
			]
		}
	];

	$scope.status = {
		ifFirstOpen: true,
		ifFirstDisabled: false
	};
})

.controller("Index", function($scope, $llll){

	$scope.salir = function(){

	};

	$scope.menu = function(){

	};
})

.factory("Index", function(){

})