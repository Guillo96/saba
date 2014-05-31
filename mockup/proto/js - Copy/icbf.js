
angular.module('icbf', ['ui.bootstrap', 'ngRoute', 'kinvey', 'controllers'])//, 'kinvey'

.controller('ppalCtrl', function($scope, $route, $routeParams, $location){
	$scope.route = $route;
	$scope.location = $location;
	$scope.routeParams = $routeParams;
})

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

.config(function($routeProvider, $locationProvider){
	$routeProvider
		.when('/',{
			templateUrl:'plantillas/dashboard.html',
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
			templateUrl:'plantillas/alertas.html',
			controller:'alertasCtrl'
		})
		.when('/reportes/infantes',{
			templateUrl:'plantillas/infantes.html',
			controller:'reportesCtrl'
		})
		.when('/reportes/hogares',{
			templateUrl:'plantillas/hogares.html',
			controller:'hogaresCtrl'
		})
		.when('/admin/regionales',{
			templateUrl:'plantillas/regionales.html',
			controller:'regionalesCtrl'
		})
		.when('/admin/centros',{
			templateUrl:'plantillas/centros.html',
			controller:'centrosCtrl'
		})
		.when('/admin/usuarios',{
			templateUrl:'plantillas/usuarios.html',
			controller:'usuariosCtrl'
		})
		.when('/indicadores/totales',{
			templateUrl:'plantillas/totales.html',
			controller:'totalesCtrl'
		})
		.when('/indicadores/nuevos',{
			templateUrl:'plantillas/nuevos.html',
			controller:'nuevosCtrl'
		})
		.when('/indicadores/inactivos',{
			templateUrl:'plantillas/invactivos.html',
			controller:'inactivosCtrl'
		})
		.when('/indicadores/ingresos',{
			templateUrl:'plantillas/ingresos.html',
			controller:'ingresosCtrl'
		})
		.otherwise({
			redirectTo: '/'//plantillas/dashboard.html
		});
})

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

//Controladores por pantalla
.controller('dashboardCtrl',['$scope', '$kinvey', function($scope, $kinvey){//, dashboardFac, $routeParams, 
	//$scope.params = $routeParams;
	//var promise = $kinvey.DataStore.get('Infante', '5374caaf24fac1e707068cf3', {	});
	//promise.then(function(entity){
	//	console.log('Documento '+entity.Documento);
	//},function(errorCallback){
	//	console.log(errorCallback+'er');
	//});
	//var promise = $kinvey.DataStore.find('Evento');//, query
	var promise = $kinvey.DataStore.count('Evento');
	promise.then(function(cantidad){
		console.log('e'+ cantidad);
		$scope.indicadores = cantidad;
	});
	var query = new $kinvey.Query();
	query.greaterThan('_kmd.lmt',fechaActual());
	fechaActual();
	var promise = $kinvey.DataStore.find('Evento', query);//, query
	promise.then(function(entidades){
		var repetidos = muestraRepetidos(entidades);
		$scope.alertas = repetidos.length;
		angular.forEach(entidades, function(entidad){
			//var regexp = new RegExp('T');
			//var fechaCorta = entidad._kmd.lmt.split(regexp)[0];
			//console.log(fechaCorta+'chu');
			//console.log(entidad.Documento+'dod');
		});
	},function(errorCallback){
		console.log('rror'+errorCallback);
	});
	//var infante = new Kinvey.Collection('Infante');
	//infante.fetch({
	//	success: function(){
	//		console.log('eya'+infante.toJSON());
	//	},
	//	error: function(){
			//
	//	}
	//};
}])
/*
.factory('dashboardFac', function(){
	return{
		query: function($scope){
			var infantes = new Kinvey.Collection('infante');
			infante.fetch({
				success: function(){
					debugger;
					$scope.$apply(function(){
						$scope.infante = infante.toJSON();
					});
				},
				error: function(){

				}
			});
		},
		queryInfante: function($scope){
			debugger;
			var query = new Kinvey.Query();
			var regex = new RegExp('^'+$scope.nombre);
			query.on('Name').regex(re);

			var infante = new Kinvey.Collection('infante', {
				query: query
			});

			infante.fetch({
				success: function(){
					debugger;
					$scope.$apply(function(){
						$scope.infante = infante.toJSON();
					});
				},
				error: function(){

				}
			});
		}
	}
})
*/
.controller('inicioCtrl', function($scope, $routeParams, $http){
	$scope.params = $routeParams;
})

.controller('alertasCtrl', function($scope, $routeParams, $http){
	$scope.params = $routeParams;
})

.controller('infantesCtrl', function($scope, $routeParams, $http){
	$scope.params = $routeParams;
})

.controller('hogaresCtrl', function($scope, $routeParams, $http){
	$scope.params = $routeParams;
})

.controller('regionalesCtrl', function($scope, $routeParams, $http){
	$scope.params = $routeParams;
})

.controller('centrosCtrl', function($scope, $routeParams, $http){
	$scope.params = $routeParams;
})

.controller('usuariosCtrl', function($scope, $routeParams, $http){
	$scope.params = $routeParams;
})

.controller('totalesCtrl', function($scope, $routeParams, $http){
	$scope.params = $routeParams;
})

.controller('nuevosCtrl', function($scope, $routeParams, $http){
	$scope.params = $routeParams;
})

.controller('inactivosCtrl', function($scope, $routeParams, $http){
	$scope.params = $routeParams;
})

.controller('ingresosCtrl', function($scope, $routeParams, $http){
	$scope.params = $routeParams;
});

function siUsuario($kinvey, $location, $rootScope) {
	var usuario = $kinvey.getActiveUser();
	if (usuario != null) {
		console.log(usuario);
		if ($location.$$url != '/dashboard') {
			$location.path('/dashboard');
		}
	} else {
		console.log(usuario+' no');
		if ($location.$$url != 'plantillas/login') {
			$location.path('plantillas/login');
		}
	}
}
function salir($kinvey, $location, $rootScope){
	var usario = $kinvey.getActiveUser();
	if(null !== usuario) {
	    var promise = $kinvey.User.logout();
	}
}

function fechaActual(){
	var fecha = new Date();
	var anio =  fecha.getFullYear().toString();
	var mes = fecha.getMonth()+1;
	if(mes<10){
		mes = '0'+mes;
	}
	mes = mes.toString();
	var dia = fecha.getDate();
	if(dia<10){
		dia = '0'+dia;
	}
	return anio+'-'+mes+'-'+dia+'T00:00:00.000Z';
}

function muestraRepetidos(entidades){
	var entidadesDocumento = [];
	var actual = null;
	var contador = 0;
	angular.forEach(entidades, function(entidad){
		if(entidad.Documento != actual){
			actual = entidad.Documento;
            contador = 1;
		}else{
			entidadesDocumento.push(entidad);
			contador++;
		}
	});
	console.log(entidadesDocumento.length+' <- documento repetido');
	return entidadesDocumento;
}