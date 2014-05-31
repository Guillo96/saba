
angular.module('saba', ['ui.bootstrap', 'ngRoute', 'kinvey', 'controllers'])//, 'kinvey'

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
		.when('/reportes/clientes',{
			templateUrl:'plantillas/clientes.html',
			controller:'clientesCtrl'
		})
		.when('/reportes/servicios',{
			templateUrl:'plantillas/servicios.html',
			controller:'serviciosCtrl'
		})
		.when('/reportes/tecnicos',{
			templateUrl:'plantillas/tecnicos.html',
			controller:'tecnicosCtrl'
		})
		.when('/admin/antesala',{
			templateUrl:'plantillas/antesala.html',
			controller:'antesalaCtrl'
		})
		.when('/admin/clientes',{
			templateUrl:'plantillas/clientes.html',
			controller:'clientesCtrl'
		})
		.when('/admin/evidencias',{
			templateUrl:'plantillas/evidencias.html',
			controller:'evidenciasCtrl'
		})
		.when('/admin/servicios',{
			templateUrl:'plantillas/servicios.html',
			controller:'serviciosCtrl'
		})
		.when('/admin/tecnicos',{
			templateUrl:'plantillas/tecnicos.html',
			controller:'tecnicosCtrl'
		})
		.when('/admin/usuarios',{
			templateUrl:'plantillas/usuarios.html',
			controller:'usuariosCtrl'
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
			titulo: 'Reportes',
			submenu: [
				{
					titulo: 'Clientes',
					ruta: '#/reportes/clientes',
					url: 'plantillas/clientes.html'
				},
				{
					titulo: 'Servicios',
					ruta: '#/reportes/servicios',
					url: 'plantillas/servicios.html'
				},
				{
					titulo: 'Técnicos',
					ruta: '#/reportes/tecnicos',
					url: 'plantillas/tecnicos.html'
				}
			]
		},
		{
			titulo: 'Administración',
			submenu: [
				{
					titulo: 'Antesala',
					ruta: '#/admin/antesala',
					url: 'plantillas/antesala.html'
				},
				{
					titulo: 'Clientes',
					ruta: '#/admin/clientes',
					url: 'plantillas/clientes.html'
				},
				{
					titulo: 'Evidencias',
					ruta: '#/admin/evidencias',
					url: 'plantillas/evidencias.html'
				},
				{
					titulo: 'Servicios',
					ruta: '#/admin/servicios',
					url: 'plantillas/servicios.html'
				},
				{
					titulo: 'Técnicos',
					ruta: '#/admin/tecnicos',
					url: 'plantillas/tecnicos.html'
				},
				{
					titulo: '.',
					ruta: '#',
					url: '#',
					separador: 'divider'
				},
				{
					titulo: 'Usuarios',
					ruta: '#/admin/usuarios',
					url: 'plantillas/usuarios.html'
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
	var promise = $kinvey.DataStore.find('Evento');//, query
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

.controller('antesalaCtrl',['$scope', '$kinvey', function($scope, $kinvey){
	var promesa = $kinvey.DataStore.find('Eventos');
	promesa.then(function(Evento){
		$scope.alertas = Evento;
	});
	
}])

.factory('antesalaF',function(){
	return{
		columnas: [
			{
				titulo: 'Reportes',
				submenu: [
					{
						titulo: 'Clientes'
					},
					{
						titulo: 'Servicios',
						ruta: '#/reportes/servicios'
					},
					{
						titulo: 'Técnicos',
						ruta: '#/reportes/tecnicos'
					}
				]
			}
		],
		lista: [
			//
		]
	}
})

.controller('infantesCtrl', ['$scope', '$kinvey', function($scope, $kinvey){
	$scope.buscarDocumento =  function(){
		if($scope.buscar){
			var query = new $kinvey.Query();			
			var doc = $scope.buscar;
			query.equalTo('documento',doc);

			var promesa = $kinvey.DataStore.find('Infantes',query);
			promesa.then(function(Datos){
				$scope.datos = Datos;
			});

			var promesa = $kinvey.DataStore.find('Eventos',query);
			promesa.then(function(Eventos){				
				$scope.eventos = Eventos;						    
			});
		}
	};

	$scope.buscarFecha = function(){
		if($scope.fechaInicial){
			if ($scope.fechaFinal) {
				var query = new $kinvey.Query();
				var fecha1 = $scope.fechaInicial;
				var fecha2 = $scope.fechaFinal;
				var doc = $scope.buscar;
				query.greaterThanOrEqualTo('_kmd.lmt',fecha1).lessThanOrEqualTo('_kmd.lmt',fecha2).equalTo('documento',doc);

				var promesa = $kinvey.DataStore.find('Eventos',query);
				promesa.then(function(Eventos){
				$scope.eventos = Eventos;
				});	
			};						
		}
	};
}])

.controller('hogaresCtrl', ['$scope', '$kinvey', function($scope, $kinvey){
	$scope.buscarHogar =  function(){
		if($scope.buscar){
			var query = new $kinvey.Query();			
			var hogar = $scope.buscar;
			query.equalTo('codigo',hogar);

			var promesa = $kinvey.DataStore.find('Hogares',query);
			promesa.then(function(Datos){
				$scope.datos = Datos;
			});

			var query1 = new $kinvey.Query();
			query1.equalTo('cod_hogar',hogar);
			var promesa = $kinvey.DataStore.find('Eventos',query1);
			promesa.then(function(Eventos){				
				$scope.eventos = Eventos;						    
			});
		}
	};

	$scope.buscarFecha = function(){
		if($scope.fechaInicial){
			if ($scope.fechaFinal) {
				var query = new $kinvey.Query();
				var fecha1 = $scope.fechaInicial;
				var fecha2 = $scope.fechaFinal;
				var hogar = $scope.buscar;
				query.greaterThanOrEqualTo('_kmd.lmt',fecha1).lessThanOrEqualTo('_kmd.lmt',fecha2).equalTo('cod_hogar',hogar);

				var promesa = $kinvey.DataStore.find('Eventos',query);
				promesa.then(function(Eventos){
				$scope.eventos = Eventos;
				});	
			};						
		}
	};
}])

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
})

.filter("tipoevento",function(){
	return function(even){
		if(even == '1'){
			return "Ingreso";
		}
		if (even == '0'){
			return "Salida";
		};
	}
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