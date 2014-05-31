angular.module('icbf', ['ui.bootstrap'])

.controller('navbarCtrl', function($scope){
	$scope.menuMovil = true;
})

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