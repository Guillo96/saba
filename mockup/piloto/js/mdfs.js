angular.module('mdfs', ['ui.bootstrap', 'ngRoute'])//, 'dialog'

.controller('ppalCtrl', function($scope, $route, $routeParams, $location,menus){
	$scope.route = $route;
	$scope.location = $location;
	$scope.routeParams = $routeParams;
	$scope.usuario = true;

	if(menus.menus.menu){
		$scope.usuario = true;
	}else{
		//$scope.usuario = false;
	}
})

//.run(function($location, $rootScope) {
	
//})

.factory('us',function(){
	return {
		us: {}
	};
})
.factory('menus',function(){
	return {
		menus: {}
	};
})
.config(function($routeProvider, $locationProvider){	
	$routeProvider
		.when('/',{
			templateUrl:'plantillas/inicio.html',
			controller:'inicioCtrl',
			resolve:{
				delay: function($q,$timeout){
					var delay = $q.defer();
					$timeout(delay.resolve, 500);
					return delay.promise;
				}
			}
		})
		//principales perfiles
		.when('/usuario/administrador',{
			templateUrl:'plantillas/administrador.html',
			controller:'administradorCtrl'
		})
		.when('/usuario/programador',{
			templateUrl:'plantillas/programador.html',
			controller:'programadorCtrl'
		})
		.when('/usuario/tecnico',{
			templateUrl:'plantillas/tecnico.html',
			controller:'tecnicoCtrl'
		})
		//unitarios por perfil
		.when('/dashboard',{
			templateUrl: 'plantillas/dashboard.html',
			controller: 'dashboardCtrl'
		})
		.when('/admin/antesala',{
			templateUrl:'plantillas/CRUD/antesala.html',
			controller:'antesalaCtrlCRUD'
		})
		.when('/admin/antesala/actualizar',{
			templateUrl:'plantillas/CRUD/actualizarantesala.html',
			controller:'antesalaActualizarCtrlCRUD'
		})
		.when('/admin/antesala/crear',{
			templateUrl:'plantillas/CRUD/crearantesala.html',
			controller:'antesalaCrearCtrlCRUD'
		})
		.when('/admin/catalogo',{
			templateUrl:'plantillas/CRUD/catalogo.html',
			controller:'catalogoCtrlCRUD'
		})
		.when('/admin/catalogo/actualizar',{
			templateUrl:'plantillas/CRUD/actualizarcatalogo.html',
			controller:'catalogoActualizarCtrlCRUD'
		})
		.when('/admin/catalogo/crear',{
			templateUrl:'plantillas/CRUD/crearcatalogo.html',
			controller:'catalogoCrearCtrlCRUD'
		})
		.when('/admin/clientes',{
			templateUrl:'plantillas/CRUD/clientes.html',
			controller:'clientesCtrlCRUD'
		})
		.when('/admin/clientes/actualizar',{
			templateUrl:'plantillas/CRUD/actualizarclientes.html',
			controller:'clientesActualizarCtrlCRUD'
		})
		.when('/admin/clientes/crear',{
			templateUrl:'plantillas/CRUD/crearclientes.html',
			controller:'clientesCrearCtrlCRUD'
		})
		.when('/admin/evidencias',{
			templateUrl:'plantillas/CRUD/evidencias.html',
			controller:'evidenciasCtrlCRUD'
		})
		.when('/admin/evidencias/actualizar',{
			templateUrl:'plantillas/CRUD/actualizarevidencias.html',
			controller:'evidenciasActualizarCtrlCRUD'
		})
		.when('/admin/evidencias/crear',{
			templateUrl:'plantillas/CRUD/crearevidencias.html',
			controller:'evidenciasCrearCtrlCRUD'
		})
		.when('/admin/servicios',{
			templateUrl:'plantillas/CRUD/servicios.html',
			controller:'serviciosCtrlCRUD'
		})
		.when('/admin/servicios/actualizar',{
			templateUrl:'plantillas/CRUD/actualizarservicios.html',
			controller:'serviciosActualizarCtrlCRUD'
		})
		.when('/admin/servicios/crear',{
			templateUrl:'plantillas/CRUD/crearservicios.html',
			controller:'serviciosCrearCtrlCRUD'
		})
		.when('/admin/tecnicos',{
			templateUrl:'plantillas/CRUD/tecnicos.html',
			controller:'tecnicosCtrlCRUD'
		})
		.when('/admin/tecnicos/actualizar',{
			templateUrl:'plantillas/CRUD/actualizartecnicos.html',
			controller:'tecnicosActualizarCtrlCRUD'
		})
		.when('/admin/tecnicos/crear',{
			templateUrl:'plantillas/CRUD/creartecnicos.html',
			controller:'tecnicosCrearCtrlCRUD'
		})
		.when('/admin/zonas',{
			templateUrl:'plantillas/CRUD/zonas.html',
			controller:'zonasCtrlCRUD'
		})
		.when('/admin/zonas/actualizar',{
			templateUrl:'plantillas/CRUD/actualizarzonas.html',
			controller:'zonasActualizarCtrlCRUD'
		})
		.when('/admin/zonas/crear',{
			templateUrl:'plantillas/CRUD/crearzonas.html',
			controller:'zonasCrearCtrlCRUD'
		})
		//reportes
		.when('/reportes/clientes',{
			templateUrl:'plantillas/reportes/clientes.html',
			controller:'clientesReportCtrl'
		})
		.when('/reportes/servicios',{
			templateUrl:'plantillas/reportes/servicios.html',
			controller:'serviciosReportCtrl'
		})
		.when('/reportes/tecnicos',{
			templateUrl:'plantillas/reportes/tecnicos.html',
			controller:'tecnicosReportCtrl'
		})
		//
		//programador
		.when('/programador/servicios',{
			templateUrl:'plantillas/programador/servicios.html',
			controller:'serviciosProgCtrl'
		})
		//
		//tecnico
		.when('/tecnico/servicios',{
			templateUrl:'plantillas/tecnico/servicios.html',
			controller:'serviciosTecCtrl'
		})
		.when('/tecnico/historico',{
			templateUrl:'plantillas/tecnico/historico.html',
			controller:'historicoTecCtrl'
		})
		.when('/tecnico/mapa',{
			templateUrl:'plantillas/tecnico/mapa.html',
			controller:'mapaCtrl'
		})
		.otherwise({
			redirectTo: '/'//plantillas/dashboard.html
		});
})

.controller('navbarCtrl', function($scope,us){
	$scope.menuMovil = true;
})

.controller('menuIzquierdoCtrl', function($scope,us){
	$scope.soloUnSubMenu = true;

	$scope.menus = [
		{
			titulo: 'Administración',
			submenu: [
				{
					titulo: 'Antesala',
					ruta: '/admin/antesala'
				}, 
				{
					titulo: 'Catálogo',
					ruta: '/admin/catalogo'
				},
				{
					titulo: 'Clientes',
					ruta: '/admin/clientes'
				},
				{
					titulo: 'Evidencias',
					ruta: '/admin/evidencias'
				},
				{
					titulo: 'Servicios',
					ruta: '/admin/servicios'
				},
				{
					titulo: 'Técnicos',
					ruta: '/admin/tecnicos'
				},
				{
					titulo: 'Zonas',
					ruta: '/plantillas/CRUD/zonas.html'
				}
			]
		},
		{
			titulo: 'Reportes',
			submenu: [
				{
					ruta: '/reportes/clientes',
					titulo: 'Clientes'
				},
				{
					ruta: '/reportes/servicios',
					titulo: 'Servicios'
				},
				{
					ruta: '/reportes/tecnicos',
					titulo: 'Técnicos'
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

.controller('dashboardCtrl',function($scope, $location, $routeParams, $route,us){
	
	$scope.usuario = us.us.us;

	$scope.indicadores = 6;
	
	$scope.alertas = 58;
	//	
})

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
.controller('inicioCtrl',function($scope, $route, $routeParams, $location,us){	
	var usuarioElegido = '';
	$scope.tecnico = function(){
		usuarioElegido = 'tecnico';
	}
	$scope.administrador = function(){
		usuarioElegido = 'administrador';
	}
	$scope.programador = function(){
		usuarioElegido = 'programador';
	}
	if(usuarioElegido == 'tecnico'){
		us.us.us = true;
		$location.path('#/usuario/tecnico');
	}
	if(usuarioElegido == 'programador'){
		us.us.us = true;
		$location.path('#/usuario/programador');
	}
	if(usuarioElegido == 'administrador'){
		us.us.us = true;
		$location.path('#/usuario/administrador');
	}
})

.controller('administradorCtrl',function($scope, $route, $routeParams, $location,us,menus){
	us.us.us = true;
	$scope.usuario = true;
	menus.menus.menu = true;
})
.controller('programadorCtrl',function($scope, $route, $routeParams, $location,us){
	//$scope.usuario = us.us.us;
})
.controller('tecnicoCtrl',function($scope, $route, $routeParams, $location,us){
	//$scope.usuario = us.us.us;
	us.us.us = true;
	
})
.factory('antesalaF',function(){
	return {
		objetos: [
			{
				codigo:'3',
				titulo:'Llevar uniforme',
				fecha:'5-06-2014',
				creador:'John',
				mensaje:'mensajex'
			},
			{
				codigo:'4',
				titulo:'Un técnico bien presentado',
				fecha:'05-06-2014',
				creador:'John',
				mensaje:'Un técnico bien presentado significa un servicio mas agradable'
			},
			{
				codigo:'5',
				titulo:'Ya consignamos',
				fecha:'4-04-2014',
				creador:'John',
				mensaje:'No olvide reclamar su pago'
			},
			{
				codigo:'6',
				titulo:'Reunión urgente!',
				fecha:'11-04-2014',
				creador:'John',
				mensaje:'Por favor asistir a la reunión del 1 de Mayo en la oficina ppal'
			}
		],
		formulariocreador: [
			{
				creador:'Joshep Perez'
			},
			{
				creador:'Dubian M'
			},
			{
				creador:'Andrés Herrera'
			}
		],
		actualiza: {}
	};
})
.controller('antesalaCtrlCRUD',function($scope, $route, $routeParams, $location,$filter,us,antesalaF){
	
	$scope.objetos = antesalaF.objetos;
	var acciones = [];
	$scope.$watch( "objetos" , function(n,o){
	    var trues = $filter("filter")( n , {seleccionado:true} );
	    try{
	    	if(acciones.length > 0){
	    		acciones = [];
	    	}
	    	console.log(acciones.length);
	    	angular.forEach(trues,function(f){
	    		acciones.push(f);
	    	});
	    	$scope.sel = trues.length;
	    }catch(e){
	    	//
	    }
    }, true );

	$scope.eliminar = function(){
		angular.forEach(acciones,function(f){
    		//mensaje
    		var index = $scope.objetos.indexOf(f);
        	$scope.objetos.splice(index, 1);
        	antesalaF.objetos  = $scope.objetos;
    	});
	};

    $scope.buscarCentro =  function(){
		//	$scope.objetos = Datos;
	};

	$scope.actualizar = function(){
		antesalaF.actualiza = {
			codigo:acciones[0].codigo,
			titulo:acciones[0].titulo,
			fecha:acciones[0].fecha,
			mensaje:acciones[0].mensaje
		}
      	$location.path('/admin/antesala/actualizar');
	}
})
.controller('antesalaCrearCtrlCRUD',function($scope, $route, $routeParams, $location,$timeout,us,antesalaF){
	$scope.formulariocreador = antesalaF.formulariocreador;
	$scope.enviar = function(){
		$timeout(function() {
			$location.path('/admin/antesala');
		}, 7000);	
	};
})
.controller('antesalaActualizarCtrlCRUD',function($scope, $route, $routeParams, $location,$timeout,us,antesalaF){
	$scope.antesala = antesalaF.actualiza;
	$scope.formulariocreador = antesalaF.formulariocreador;
	$scope.actualizar = function(){
    	for (var i = antesalaF.objetos.length - 1; i >= 0; i--) {
    		if(antesalaF.objetos[i].codigo == $scope.antesala.codigo){
    			antesalaF.objetos.splice(i,1);
    		}
    	};
    	antesalaF.objetos.push({
    		codigo:$scope.antesala.codigo,
			titulo:$scope.antesala.titulo,
			fecha:$scope.antesala.fecha,
			creador:$scope.antesala.creador.creador,
			mensaje:$scope.antesala.mensaje
    	});
		$timeout(function(){
			$location.path('/admin/antesala');	
		},6000);

	};
})
.factory('catalogoF',function(){
	return {
		objetos: [
			{
				codigo:'3',
				titulo:'Llevar uniforme',
				fecha:'20-03-2014',
				activo: true
			},
			{
				codigo:'4',
				titulo:'Un técnico bien presentado',
				mensaje:'Un técnico bien presentado significa un servicio mas agradable',
				activo: true
			}
		],
		formulariocreador: [
			{
				creador:'Joshep Perez'
			},
			{
				creador:'Andrés Herrera'
			}
		]
	};
})
.controller('catalogoCtrlCRUD',function($scope, $route, $routeParams, $location,us){
	//
})
.controller('catalogoCrearCtrlCRUD',function($scope, $route, $routeParams, $location,us){
	$scope.formulariocreador = antesalaF.formulariocreador;
	$scope.enviar = function(){
		$timeout(function() {
			$location.path('/admin/antesala');
		}, 7000);	
	};
})
.controller('catalogoActualizarCtrlCRUD',function($scope, $route, $routeParams, $location,us){
	//
})
.factory('clientesF',function(){
	return {
		objetos: [
			{
				codigo:'3',
				titulo:'Llevar uniforme',
				fecha:'20-03-2014',
				activo: true
			},
			{
				codigo:'4',
				titulo:'Un técnico bien presentado',
				mensaje:'Un técnico bien presentado significa un servicio mas agradable',
				activo: true
			}
		],
		formulariocreador: [
			{
				creador:'Joshep Perez'
			},
			{
				creador:'Andrés Herrera'
			}
		]
	};
})
.controller('clientesCtrlCRUD',function($scope, $route, $routeParams, $location,us){
	//
})
.controller('clientesCrearCtrlCRUD',function($scope, $route, $routeParams, $location,us){
	$scope.formulariocreador = antesalaF.formulariocreador;
	$scope.enviar = function(){
		$timeout(function() {
			$location.path('/admin/antesala');
		}, 7000);	
	};
})
.controller('clientesActualizarCtrlCRUD',function($scope, $route, $routeParams, $location,us){
	//
})
.factory('evidenciasF',function(){
	return {
		objetos: [
			{
				codigo:'3',
				titulo:'Llevar uniforme',
				fecha:'20-03-2014',
				activo: true
			},
			{
				codigo:'4',
				titulo:'Un técnico bien presentado',
				mensaje:'Un técnico bien presentado significa un servicio mas agradable',
				activo: true
			}
		],
		formulariocreador: [
			{
				creador:'Joshep Perez'
			},
			{
				creador:'Andrés Herrera'
			}
		]
	};
})
.controller('evidenciasCtrlCRUD',function($scope, $route, $routeParams, $location,us){
	//
})
.controller('evidenciasCrearCtrlCRUD',function($scope, $route, $routeParams, $location,us){
	$scope.formulariocreador = antesalaF.formulariocreador;
	$scope.enviar = function(){
		$timeout(function() {
			$location.path('/admin/antesala');
		}, 7000);	
	};
})
.controller('evidenciasActualizarCtrlCRUD',function($scope, $route, $routeParams, $location,us){
	//
})
.factory('serviciosF',function(){
	return {
		objetos: [
			{
				noNota:'42-87597',
				identificadorC:'43427409',
				nombresC:'MARIA VICTORIA MUÑOZ',
				direccionC:'CL 113 # 51A - 36',
				telefonoC:'2361396 - 3207874821 - 3173497109',
				tipoEntrega:'instalación sin producto',
				fechaEntrega:'22-06-2014',
				horaEntrega:'16:30',
				estado:'entregado completo',
				descripcion:'armado de mueble desde $',
				observaciones:'no hay',
				tiempoEsperadoEjecucion:'1 hora'
			},
			{
				noNota:'44-36792',
				identificadorC:'42884193',
				nombresC:'YOLANDA SANDOVAL',
				direccionC:'CR 45 H NO 40 A SUR 31',
				telefonoC:'3314788 - 3146417736',
				tipoEntrega:'instalación sin producto',
				fechaEntrega:'22-06-2014',
				horaEntrega:'16:30',
				estado:'entregado completo',
				descripcion:'armado de mueble desde $',
				observaciones:'no hay',
				tiempoEsperadoEjecucion:'1:30 minutos'
			},
			{
				noNota:'44-36776',
				identificadorC:'63451215',
				nombresC:'ADRIANA FUENTES',
				direccionC:'CL 39 B SUR 36 44 AP 501',
				telefonoC:'3157027585-3154151453',
				tipoEntrega:'domicilios',
				fechaEntrega:'22-06-2014',
				horaEntrega:'16:30',
				estado:'entregado completo',
				descripcion:'armado de mueble desde $',
				observaciones:'',
				tiempoEsperadoEjecucion:''
			}
		],
		objetosHistorico: [
			{
				noNota:'42-87597',
				identificadorC:'43427409',
				nombresC:'MARIA VICTORIA MUÑOZ',
				direccionC:'CL 113 # 51A - 36',
				telefonoC:'2361396 - 3207874821 - 3173497109',
				tipoEntrega:'instalación sin producto',
				fechaEntrega:'23-06-2014',
				horaEntrega:'16:30',
				estado:'entregado incompleto',
				descripcion:'armado de mueble desde $',
				observaciones:'no hay',
				tiempoEsperadoEjecucion:'1 hora'
			},
			{
				noNota:'44-36792',
				identificadorC:'42884193',
				nombresC:'YOLANDA SANDOVAL',
				direccionC:'CR 45 H NO 40 A SUR 31',
				telefonoC:'3314788 - 3146417736',
				tipoEntrega:'instalación sin producto',
				fechaEntrega:'24-06-2014',
				horaEntrega:'16:30',
				estado:'entregado completo',
				descripcion:'armado de mueble desde $',
				observaciones:'no hay',
				tiempoEsperadoEjecucion:'1:30 minutos'
			},
			{
				noNota:'42-87597',
				identificadorC:'43427409',
				nombresC:'MARIA VICTORIA MUÑOZ',
				direccionC:'CL 113 # 51A - 36',
				telefonoC:'2361396 - 3207874821 - 3173497109',
				tipoEntrega:'instalación sin producto',
				fechaEntrega:'02-07-2014',
				horaEntrega:'16:30',
				estado:'entregado completo',
				descripcion:'armado de mueble desde $',
				observaciones:'no hay',
				tiempoEsperadoEjecucion:'1 hora'
			},
			{
				noNota:'44-36792',
				identificadorC:'42884193',
				nombresC:'YOLANDA SANDOVAL',
				direccionC:'CR 45 H NO 40 A SUR 31',
				telefonoC:'3314788 - 3146417736',
				tipoEntrega:'instalación sin producto',
				fechaEntrega:'10-03-2014',
				horaEntrega:'16:30',
				estado:'armado completo',
				descripcion:'armado de mueble desde $',
				observaciones:'no hay',
				tiempoEsperadoEjecucion:'1:30 minutos'
			},
			{
				noNota:'42-87597',
				identificadorC:'43427409',
				nombresC:'MARIA VICTORIA MUÑOZ',
				direccionC:'CL 113 # 51A - 36',
				telefonoC:'2361396 - 3207874821 - 3173497109',
				tipoEntrega:'instalación sin producto',
				fechaEntrega:'22-06-2014',
				horaEntrega:'16:30',
				estado:'entregado completo',
				descripcion:'armado de mueble desde $',
				observaciones:'no hay',
				tiempoEsperadoEjecucion:'1 hora'
			},
			{
				noNota:'44-36792',
				identificadorC:'42884193',
				nombresC:'YOLANDA SANDOVAL',
				direccionC:'CR 45 H NO 40 A SUR 31',
				telefonoC:'3314788 - 3146417736',
				tipoEntrega:'instalación sin producto',
				fechaEntrega:'22-06-2014',
				horaEntrega:'16:30',
				estado:'entregado completo',
				descripcion:'armado de mueble desde $',
				observaciones:'no hay',
				tiempoEsperadoEjecucion:'1:30 minutos'
			},
			{
				noNota:'44-36776',
				identificadorC:'63451215',
				nombresC:'ADRIANA FUENTES',
				direccionC:'CL 39 B SUR 36 44 AP 501',
				telefonoC:'3157027585-3154151453',
				tipoEntrega:'domicilios',
				fechaEntrega:'22-06-2014',
				horaEntrega:'16:30',
				estado:'entregado completo',
				descripcion:'armado de mueble desde $',
				observaciones:'',
				tiempoEsperadoEjecucion:''
			},
			{
				noNota:'44-36792',
				identificadorC:'42884193',
				nombresC:'YOLANDA SANDOVAL',
				direccionC:'CR 45 H NO 40 A SUR 31',
				telefonoC:'3314788 - 3146417736',
				tipoEntrega:'instalación sin producto',
				fechaEntrega:'22-06-2014',
				horaEntrega:'16:30',
				estado:'entregado completo',
				descripcion:'armado de mueble desde $',
				observaciones:'no hay',
				tiempoEsperadoEjecucion:'1:30 minutos'
			},
			{
				noNota:'44-36776',
				identificadorC:'63451215',
				nombresC:'ADRIANA FUENTES',
				direccionC:'CL 39 B SUR 36 44 AP 501',
				telefonoC:'3157027585-3154151453',
				tipoEntrega:'domicilios',
				fechaEntrega:'22-06-2014',
				horaEntrega:'16:30',
				estado:'entregado completo',
				descripcion:'armado de mueble desde $',
				observaciones:'',
				tiempoEsperadoEjecucion:''
			}
		],
		formulariotipoEntrega: [
			{
				tipoEntrega:'Instalación sin producto'
			},
			{
				tipoEntrega:'Domicilios'
			}
		],
		formularioEstado: [
			{
				estado:'Entregado completo'
			},
			{
				estado:'Mercancía completa grabada y alistada'
			}
		],
		actualiza: {}
	};
})
.controller('serviciosCtrlCRUD',function($scope, $route, $routeParams, $location,$filter,us,serviciosF){
	
	$scope.objetos = serviciosF.objetos;
	var acciones = [];
	$scope.$watch( "objetos" , function(n,o){
	    var trues = $filter("filter")( n , {seleccionado:true} );
	    try{
	    	if(acciones.length > 0){
	    		acciones = [];
	    	}
	    	angular.forEach(trues,function(f){
	    		acciones.push(f);
	    	});
	    	$scope.sel = trues.length;
	    }catch(e){
	    	//
	    }
    }, true );

	$scope.eliminar = function(){
		angular.forEach(acciones,function(f){
    		var index = $scope.objetos.indexOf(f);
        	$scope.objetos.splice(index, 1);
        	serviciosF.objetos  = $scope.objetos;
    	});
	};

    $scope.buscarCentro =  function(){
		//	$scope.objetos = Datos;
	};

	$scope.actualizar = function(){
		serviciosF.actualiza = {
			noNota:acciones[0].noNota,
			identificadorC:acciones[0].identificadorC,
			nombresC:acciones[0].nombresC,
			direccionC:acciones[0].direccionC,
			telefonoC:acciones[0].telefonoC,
			tipoEntrega:acciones[0].tipoEntrega,
			fechaEntrega:acciones[0].fechaEntrega,
			horaEntrega:acciones[0].horaEntrega,
			estado:acciones[0].estado,
			descripcion:acciones[0].descripcion,
			observaciones:acciones[0].observaciones,
			tiempoEsperadoEjecucion:acciones[0].tiempoEsperadoEjecucion
	}
      	$location.path('/admin/servicios/actualizar');
	}
})
.controller('serviciosCrearCtrlCRUD',function($scope, $route, $routeParams, $location,$timeout,us,serviciosF){
	
	$scope.formulariotipoEntrega = serviciosF.formulariotipoEntrega;
	$scope.formularioEstado = serviciosF.formularioEstado;
	$scope.enviar = function(){
		$timeout(function() {
			$location.path('/admin/servicios');
		}, 7000);	
	};
})
.controller('serviciosActualizarCtrlCRUD',function($scope, $route, $routeParams, $location,$timeout,us,serviciosF){
	$scope.formulariotipoEntrega = serviciosF.formulariotipoEntrega;
	$scope.formularioEstado = serviciosF.formularioEstado;
	$scope.servicios = serviciosF.actualiza;
	
	$scope.actualizar = function(){
    	for (var i = serviciosF.objetos.length - 1; i >= 0; i--) {
    		if(serviciosF.objetos[i].noNota == $scope.servicios.noNota){
    			//serviciosF.objetos.splice(i,1);
    			serviciosF.objetos[i].identificadorC = $scope.servicios.identificadorC;
				serviciosF.objetos[i].nombresC = $scope.servicios.nombresC;
				serviciosF.objetos[i].direccionC = $scope.servicios.direccionC;
				serviciosF.objetos[i].telefonoC = $scope.servicios.telefonoC;
				serviciosF.objetos[i].tipoEntrega = $scope.servicios.tipoEntrega.tipoEntrega;
				serviciosF.objetos[i].fechaEntrega = $scope.servicios.fechaEntrega;
				serviciosF.objetos[i].horaEntrega = $scope.servicios.horaEntrega;
				serviciosF.objetos[i].estado = $scope.servicios.estado.estado;
				serviciosF.objetos[i].descripcion = $scope.servicios.descripcion;
				serviciosF.objetos[i].observaciones = $scope.servicios.observaciones;
				serviciosF.objetos[i].tiempoEsperadoEjecucion  = $scope.servicios.tiempoEsperadoEjecucion;
    		}
    	};
		$timeout(function(){
			$location.path('/admin/servicios');	
		},6000);

	};
   //  	antesalaF.objetos.push({
   //  		codigo:$scope.antesala.codigo,
			// titulo:$scope.antesala.titulo,
			// fecha:$scope.antesala.fecha,
			// creador:$scope.antesala.creador.creador,
			// mensaje:$scope.antesala.mensaje
   //  	});
})
.factory('tecnicosF',function(){
	return {
		objetos: [
			{
				codigo:'3',
				titulo:'Llevar uniforme',
				fecha:'20-03-2014',
				activo: true
			},
			{
				codigo:'4',
				titulo:'Un técnico bien presentado',
				mensaje:'Un técnico bien presentado significa un servicio mas agradable',
				activo: true
			}
		],
		formulariocreador: [
			{
				creador:'Joshep Perez'
			},
			{
				creador:'Andrés Herrera'
			}
		]
	};
})
.controller('tecnicosCtrlCRUD',function($scope, $route, $routeParams, $location,us){
	//
})
.controller('tecnicosCrearCtrlCRUD',function($scope, $route, $routeParams, $location,us){
	$scope.formulariocreador = antesalaF.formulariocreador;
	$scope.enviar = function(){
		$timeout(function() {
			$location.path('/admin/antesala');
		}, 7000);	
	};
})
.controller('tecnicosActualizarCtrlCRUD',function($scope, $route, $routeParams, $location,us){
	//
})
.factory('zonasF',function(){
	return {
		objetos: [
			{
				codigo:'3',
				titulo:'Llevar uniforme',
				fecha:'20-03-2014',
				activo: true
			},
			{
				codigo:'4',
				titulo:'Un técnico bien presentado',
				mensaje:'Un técnico bien presentado significa un servicio mas agradable',
				activo: true
			}
		],
		formulariocreador: [
			{
				creador:'Joshep Perez'
			},
			{
				creador:'Andrés Herrera'
			}
		]
	};
})

.controller('zonasCtrlCRUD',function($scope, $route, $routeParams, $location,us){
	//
})
.controller('zonasCrearCtrlCRUD',function($scope, $route, $routeParams, $location,us){
	$scope.formulariocreador = antesalaF.formulariocreador;
	$scope.enviar = function(){
		$timeout(function() {
			$location.path('/admin/antesala');
		}, 7000);	
	};
})
.controller('zonasActualizarCtrlCRUD',function($scope, $route, $routeParams, $location,us){
	//
})
//reportes
.controller('clientesReportCtrl',function($scope, $route, $routeParams, $location,us){
	//
})
.controller('serviciosReportCtrl',function($scope, $route, $routeParams, $location,us){
	//
})
.controller('tecnicosReportCtrl',function($scope, $route, $routeParams, $location,us){
	//
})
//
//programador
.controller('serviciosProgCtrl',function($scope, $route, $routeParams, $location,us){
	//
})
//
//tecnico
.factory('tecnicosFTec',function(){
	return {
		objetos: [
		],
		formulariotipoEntrega: [
		],
		formularioEstado: [
		],
		direcciones: [
			{
				direccion: 'cra'
			},
			{
				direccion: 'cra'
			},
			{
				direccion: 'cra'
			}
		]
	};
})
.controller('serviciosTecCtrl',function($scope, $route, $routeParams, $location,$filter,$modal,us,tecnicosFTec,serviciosF,antesalaF){
	//antesala alertas
	$scope.alerts = [];
	angular.forEach(antesalaF.objetos,function(antesala){
		if(antesala.fecha == '05-06-2014' || antesala.fecha == '5-06-2014'){
			$scope.alerts.push(
				{msg:antesala.titulo,type:'danger'}
			);
		}
	});
	$scope.closeAlert = function(index) {
		$scope.alerts.splice(index, 1);
	};
	//
	tecnicosFTec.objetos = serviciosF.objetos;
	tecnicosFTec.formulariotipoEntrega = serviciosF.formulariotipoEntrega;
	tecnicosFTec.formularioEstado = serviciosF.formularioEstado;
	tecnicosFTec.actualiza = serviciosF.actualiza;
	$scope.orden = '-horaEntrega';
	$scope.tabs = [
		{title:'Servicios',content:'',active:true},
		{title:'Historico',content:''},
		{title:'Antesala',content:''}
	];
	
	$scope.fechaActual = new Date();
	$scope.objetos = tecnicosFTec.objetos;

	$scope.imprimir = function(){
		contenido = $$('listaServicios').innerHTML;
		popup = window.open('','_blank');
		popup.document.open();
		popup.document.write(
			'<html>'+
			'<style type="text/css" media="print">'+
			'@page { size: landscape; }'+
			'</style>'+
			'<body onload="window.print()">'+
			contenido +
			'</html>'
		);
		popup.document.close();
	}
	$scope.guardar = function(){
		contenido = $$('listaServicios').innerHTML;
		popup = window.open('','_blank');
		popup.document.open();
		popup.document.write(
			'<html>'+
			'<style type="text/css" media="print">'+
			'@page { size: landscape; }'+
			'</style>'+
			'<body >'+
			contenido +
			'</html>'
		);
		popup.document.close();
	}
	
	var acciones = [];
	
	$scope.$watch( "objetos" , function(n,o){
	    var trues = $filter("filter")( n , {seleccionado:true} );
	    try{
	    	if(acciones.length > 0){
	    		acciones = [];
	    	}
	    	angular.forEach(trues,function(f){
	    		acciones.push(f);
	    	});
	    	$scope.sel = trues.length;
	    }catch(e){
	    	//
	    }
    }, true );

	// $scope.eliminar = function(){
	// 	angular.forEach(acciones,function(f){
	//    		var index = $scope.objetos.indexOf(f);
	//        	$scope.objetos.splice(index, 1);
	//        	serviciosF.objetos  = $scope.objetos;
	//    	});
	// };

    $scope.buscarCentro =  function(){
		//	$scope.objetos = Datos;
	};

	$scope.direccionM = ['xy','cra 123'];
	
	$scope.verMapa = function(){
		direccion = acciones[0].noNota;
		var modalInstance = $modal.open({
			templateUrl: '/plantillas/tecnico/mapa.html',//plantillas/tecnico/mapa.html
			controller:'mapaCtrl',
			size: 'lg',
			resolve: {
				items: function(){
					return $scope.direccionM;
				}
			}
		});
		modalInstance.result.then(function(parametros){
			//$scope.parametros = parametros;
			//console.log('cargo modal'+parametros);
		},function(cerro){
			console.log('cerro modal '+cerro);
		});
  	}
})
.controller('mapaCtrl',function($scope,$modalInstance,items){//,data
	console.log('controlador modal '+items[1]);
	cargaScript();
	//console.log($modalInstance);
	//$scope.items = items;
	$scope.cancel = function(){
		$modalInstance.dismiss('cancel');
	}
	$scope.listo = function(){
		$modalInstance.close('close');
	}
})
.controller('historicoTecCtrl',function($scope, $route, $routeParams, $location,$filter,$modal,us,tecnicosFTec,serviciosF){
	tecnicosFTec.objetosHistorico = serviciosF.objetosHistorico;
	$scope.fechaActual = new Date();
	$scope.fechaAnterior = fechaActual(true);
	$scope.objetosHistorico = tecnicosFTec.objetosHistorico;
	$scope.orden = '-estado';
	$scope.cambiarFecha = function($event){
		$event.preventDefault();
		$event.stopPropagation();
		$scope.fechaAbierta = true;	
	}
	$scope.cambiarFechaF = function($event){
		$event.preventDefault();
		$event.stopPropagation();
		$scope.fechaAbiertaF = true;	
	}

	$scope.imprimir = function(){
		contenido = $$('listaServicios').innerHTML;
		popup = window.open('','_blank');
		popup.document.open();
		popup.document.write(
			'<html>'+
			'<style type="text/css" media="print">'+
			'@page { size: landscape; }'+
			'</style>'+
			'<body onload="window.print()">'+
			contenido +
			'</html>'
		);
		popup.document.close();
	}
	$scope.guardar = function(){
		contenido = $$('listaServicios').innerHTML;
		popup = window.open('','_blank');
		popup.document.open();
		popup.document.write(
			'<html>'+
			'<style type="text/css" media="print">'+
			'@page { size: landscape; }'+
			'</style>'+
			'<body >'+
			contenido +
			'</html>'
		);
		popup.document.close();
	}
})
.controller('alertasCtrl',function($scope, $route, $routeParams, $location,$filter,$modal,us,tecnicosFTec,serviciosF,antesalaF){
	$scope.objetosA = antesalaF.objetos;
	tecnicosFTec.objetosHistorico = serviciosF.objetosHistorico;
	$scope.fechaActual = new Date();
	$scope.fechaAnterior = fechaActual(true);
	$scope.objetosHistorico = tecnicosFTec.objetosHistorico;
	$scope.orden = '-estado';
	$scope.cambiarFecha = function($event){
		$event.preventDefault();
		$event.stopPropagation();
		$scope.fechaAbierta = true;	
	}
	$scope.cambiarFechaF = function($event){
		$event.preventDefault();
		$event.stopPropagation();
		$scope.fechaAbiertaF = true;	
	}

	$scope.imprimir = function(){
		contenido = $$('listaServicios').innerHTML;
		popup = window.open('','_blank');
		popup.document.open();
		popup.document.write(
			'<html>'+
			'<style type="text/css" media="print">'+
			'@page { size: landscape; }'+
			'</style>'+
			'<body onload="window.print()">'+
			contenido +
			'</html>'
		);
		popup.document.close();
	}
	$scope.guardar = function(){
		contenido = $$('listaServicios').innerHTML;
		popup = window.open('','_blank');
		popup.document.open();
		popup.document.write(
			'<html>'+
			'<style type="text/css" media="print">'+
			'@page { size: landscape; }'+
			'</style>'+
			'<body >'+
			contenido +
			'</html>'
		);
		popup.document.close();
	}
})

.controller('hogaresCtrl', function($scope){
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
			query1.equalTo('cod_hogar',hogar).ascending('documento');
			var promesa = $kinvey.DataStore.find('Eventos',query1);
			promesa.then(function(Eventos){	
				$scope.eventos = Eventos;
				var auxEventos = Eventos;
				var documentos = new Array();
				angular.forEach(auxEventos, function(even){
					documentos.push(even.documento);
				});	
				
				var query = new $kinvey.Query();
				query.contains('documento',documentos).ascending('documento');
				var promesa = $kinvey.DataStore.find('Infantes',query);
				promesa.then(function(InfantesE){
					$scope.InfantesE = InfantesE;			
				});
			});
		}
	};

	$scope.buscarFecha = function(){
		if($scope.fechaInicial){
			if ($scope.fechaFinal) {
				var query = new $kinvey.Query();
				var fecha1 = $scope.fechaInicial;
				var fecha2 = $scope.fechaFinal + 1;
				var hogar = $scope.buscar;
				query.greaterThanOrEqualTo('_kmd.lmt',fecha1).lessThanOrEqualTo('_kmd.lmt',fecha2).equalTo('cod_hogar',hogar);

				var promesa = $kinvey.DataStore.find('Eventos',query);
				promesa.then(function(Eventos){
				$scope.eventos = Eventos;
				});	
			};						
		}
	};
})

.controller('infantesCtrl', function($scope){
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
})

.controller('indicadoresCtrl',function($scope){
	$scope.buscarFecha = function(){
		if($scope.fechaInicial){
			if ($scope.fechaFinal) {
				if($scope.genero){
					var fecha1 = $scope.fechaInicial;
					var fecha2 = $scope.fechaFinal;
					var generoI = $scope.genero;

					if(generoI == "Todos"){
						//Consultas ingresos y salidas de infantes
						var query = new $kinvey.Query();
						query.greaterThanOrEqualTo('_kmd.lmt',fecha1).lessThanOrEqualTo('_kmd.lmt',fecha2).equalTo('tipo_evento','1');
						var promise = $kinvey.DataStore.count('Eventos', query);
						promise.then(function(totalIngresos){
							$scope.ingresos = totalIngresos;
						});

						var query = new $kinvey.Query();
						query.greaterThanOrEqualTo('_kmd.lmt',fecha1).lessThanOrEqualTo('_kmd.lmt',fecha2).equalTo('tipo_evento','0');
						var promise = $kinvey.DataStore.count('Eventos', query);
						promise.then(function(totalSalidas){
							$scope.salidas = totalSalidas;
						});
						//Consultas de infantes activos e inactivos
						var query = new $kinvey.Query();
						query.greaterThanOrEqualTo('_kmd.lmt',fecha1).lessThanOrEqualTo('_kmd.lmt',fecha2).equalTo('estado','1');
						var promise = $kinvey.DataStore.count('Infantes', query);
						promise.then(function(totalActivos){
							$scope.activos = totalActivos;
						});

						var query = new $kinvey.Query();
						query.greaterThanOrEqualTo('_kmd.lmt',fecha1).lessThanOrEqualTo('_kmd.lmt',fecha2).equalTo('estado','0');
						var promise = $kinvey.DataStore.count('Infantes', query);
						promise.then(function(totalInactivos){
							$scope.inactivos = totalInactivos;
						});
						//Consultas nuevos infantes registrados
						var query = new $kinvey.Query();
						query.greaterThanOrEqualTo('_kmd.ect',fecha1).lessThanOrEqualTo('_kmd.ect',fecha2);
						var promise = $kinvey.DataStore.count('Infantes', query);
						promise.then(function(totalNuevos){
							$scope.nuevos = totalNuevos;
						});
					}
					if(generoI == 'Femenino'){
						//Consultas ingresos y salidas de infantes
						var query = new $kinvey.Query();
						query.greaterThanOrEqualTo('_kmd.lmt',fecha1).lessThanOrEqualTo('_kmd.lmt',fecha2).equalTo('tipo_evento','1');
						var promise = $kinvey.DataStore.count('Eventos', query);
						promise.then(function(totalIngresos){
							$scope.ingresos = totalIngresos;
						});
						
						//Consultas de infantes activos e inactivos (F)
						var query = new $kinvey.Query();
						query.greaterThanOrEqualTo('_kmd.lmt',fecha1).lessThanOrEqualTo('_kmd.lmt',fecha2).equalTo('estado','1').equalTo('genero','F');
						var promise = $kinvey.DataStore.count('Infantes', query);
						promise.then(function(totalActivos){
							$scope.activos = totalActivos;
						});

						var query = new $kinvey.Query();
						query.greaterThanOrEqualTo('_kmd.lmt',fecha1).lessThanOrEqualTo('_kmd.lmt',fecha2).equalTo('estado','0').equalTo('genero','F');
						var promise = $kinvey.DataStore.count('Infantes', query);
						promise.then(function(totalInactivos){
							$scope.inactivos = totalInactivos;
						});
						//Consultas nuevos infantes registrados (F)
						var query = new $kinvey.Query();
						query.greaterThanOrEqualTo('_kmd.ect',fecha1).lessThanOrEqualTo('_kmd.ect',fecha2).equalTo('genero','F');
						var promise = $kinvey.DataStore.count('Infantes', query);
						promise.then(function(totalNuevos){
							$scope.nuevos = totalNuevos;
						});						
					}
					if(generoI == 'Masculino'){
						//Consultas de infantes activos e inactivos (F)
						var query = new $kinvey.Query();
						query.greaterThanOrEqualTo('_kmd.lmt',fecha1).lessThanOrEqualTo('_kmd.lmt',fecha2).equalTo('estado','1').equalTo('genero','M');
						var promise = $kinvey.DataStore.count('Infantes', query);
						promise.then(function(totalActivos){
							$scope.activos = totalActivos;
						});

						var query = new $kinvey.Query();
						query.greaterThanOrEqualTo('_kmd.lmt',fecha1).lessThanOrEqualTo('_kmd.lmt',fecha2).equalTo('estado','0').equalTo('genero','M');
						var promise = $kinvey.DataStore.count('Infantes', query);
						promise.then(function(totalInactivos){
							$scope.inactivos = totalInactivos;
						});
						//Consultas nuevos infantes registrados (F)
						var query = new $kinvey.Query();
						query.greaterThanOrEqualTo('_kmd.ect',fecha1).lessThanOrEqualTo('_kmd.ect',fecha2).equalTo('genero','M');
						var promise = $kinvey.DataStore.count('Infantes', query);
						promise.then(function(totalNuevos){
							$scope.nuevos = totalNuevos;
						});						
					}					
				};				
			};						
		}		
	};
})

.controller('centrosCtrlCRUD', function($scope,$filter,$timeout){
	var acciones = [];
	$scope.$watch( "centros" , function(n,o){
	    var trues = $filter("filter")( n , {seleccionado:true} );
	    try{
	    	if(acciones.length > 0){
	    		acciones = [];
	    	}
	    	console.log(acciones.length);
	    	angular.forEach(trues,function(f){
	    		acciones.push(f._id);
	    	});
	    	$scope.sel = trues.length;
	    }catch(e){
	    	//
	    }
    }, true );

	$scope.eliminar = function(){
		angular.forEach(acciones,function(f){
    		console.log(f);
    		var promise = $kinvey.DataStore.destroy('Hogares',f);
    		promise.then(function(respuesta){
    			//elimino
    		},function(errorCallback){
    			//no se pudieron eliminar
    		});
    	});
		$timeout(function() {
			var promise = $kinvey.DataStore.find('Hogares');
			promise.then(
				function(registros){
					$scope.centros = registros;
				});
		}, 500);
	};

    $scope.buscarCentro =  function(){
		if($scope.buscar){
			var query = new $kinvey.Query();
			//var b = new RegExp($scope.buscar+'/\*/');
			//b = $scope.buscar;
			query.equalTo('codigo',$scope.buscar)
			.or().equalTo('nombre',$scope.buscar)
			.or().equalTo('contacto',$scope.buscar)
			.or().equalTo('departamento',$scope.buscar)
			.or().equalTo('ciudad',$scope.buscar)
			.or().equalTo('extension',$scope.buscar)
			.or().equalTo('contacto',$scope.buscar)
			.or().equalTo('responsable',$scope.buscar)
			.or().equalTo('direccion',$scope.buscar);
			var promesa = $kinvey.DataStore.find('Hogares',query);
			promesa.then(function(Datos){
				$scope.centros = Datos;
			});
		}
	};

	var promise = $kinvey.DataStore.find('Hogares');
	promise.then(
		function(registros){
			$scope.centros = registros;
		},
		function(errorCallback){
			console.log(errorCallback)
		}
	);
})

.controller('estadosCtrlCRUD', function($scope,$filter,$timeout){
    $scope.buscarEstado =  function(){
		if($scope.buscar){
			var query = new $kinvey.Query();
			//var b = new RegExp($scope.buscar+'/\*/');
			//b = $scope.buscar;
			query.equalTo('descripcion',$scope.buscar)
			.or().equalTo('id',$scope.buscar);
			var promesa = $kinvey.DataStore.find('Estados',query);
			promesa.then(function(datos){
				$scope.estados = datos;
			});
		}
	};
	var acciones = [];
    $scope.$watch( "estados" , function(n,o){
	    var trues = $filter("filter")( n , {seleccionado:true} );
	    try{
	    	if(acciones.length > 0){
	    		acciones = [];
	    	}
	    	console.log(acciones.length);
	    	angular.forEach(trues,function(f){
	    		acciones.push(f._id);
	    	});
	    	$scope.sel = trues.length;
	    }catch(e){
	    	//
	    }
    }, true );

	$scope.eliminar = function(){
		angular.forEach(acciones,function(f){
    		console.log(f);
    		var promise = $kinvey.DataStore.destroy('Estados',f);
    		promise.then(function(respuesta){
    			//elimino
    		},function(errorCallback){
    			//no se pudieron eliminar
    		});
    	});
		$timeout(function() {
			var promise = $kinvey.DataStore.find('Estados');
			promise.then(
			function(registros){
				$scope.estados = registros;
			});
		}, 500);
	};

	var promise = $kinvey.DataStore.find('Estados');
	promise.then(
		function(registros){
			$scope.estados = registros;
		},
		function(errorCallback){
			console.log(errorCallback)
		}
	);
})

.controller('eventosCtrlCRUD', function($scope,$filter,$timeout){
    
    $scope.buscarTipoEvento =  function(){
		if($scope.buscar){
			var query = new $kinvey.Query();
			//var b = new RegExp($scope.buscar+'/\*/');
			//b = $scope.buscar;
			query.equalTo('cod_hogar',$scope.buscar)
			.or().equalTo('documento',$scope.buscar)
			.or().equalTo('tipo_evento',$scope.buscar);
			var promesa = $kinvey.DataStore.find('Eventos',query);
			promesa.then(function(Datos){
				$scope.centros = Datos;
			});
		}
	};

	var acciones = [];
    $scope.$watch( "eventos" , function(n,o){
	    var trues = $filter("filter")( n , {seleccionado:true} );
	    try{
	    	if(acciones.length > 0){
	    		acciones = [];
	    	}
	    	angular.forEach(trues,function(f){
	    		acciones.push(f._id);
	    	});
	    	$scope.sel = trues.length;
	    }catch(e){
	    	//
	    }
    }, true );
	$scope.eliminar = function(){
		angular.forEach(acciones,function(f){
			var promise = $kinvey.DataStore.destroy('TiposEvento',f);
			promise.then(function(respuesta){
				//elimino
			},function(errorCallback){
				//no se pudieron eliminar
			});
		});
		$timeout(function() {
			var promise = $kinvey.DataStore.find('TiposEvento');
			promise.then(
				function(registros){
					$scope.eventos = registros;
				});
		}, 500);
	};
	var promise = $kinvey.DataStore.find('TiposEvento');
	promise.then(
		function(registros){
			$scope.eventos = registros;
		},
		function(errorCallback){
			console.log(errorCallback)
		}
	);
})

.controller('infantesCtrlCRUD',function($scope,$filter,$modal,$timeout,CRUDFac){
	//
	//CRUDFac.listar();
	$scope.buscarInfante =  function(){
		if($scope.buscar){
			var query = new $kinvey.Query();
			//var b = new RegExp($scope.buscar+'/\*/');
			//b = $scope.buscar;
			query.equalTo('codigo_hogar',$scope.buscar)
			.or().equalTo('documento',$scope.buscar)
			.or().equalTo('estado',$scope.buscar)
			.or().equalTo('fecha_nacimiento',$scope.buscar)
			.or().equalTo('genero',$scope.buscar)
			.or().equalTo('peso',$scope.buscar)
			.or().equalTo('primer_apellido',$scope.buscar)
			.or().equalTo('segundo_apellido',$scope.buscar)
			.or().equalTo('primer_nombre',$scope.buscar)
			.or().equalTo('segundo_nombre',$scope.buscar)
			.or().equalTo('talla',$scope.buscar);
			var promesa = $kinvey.DataStore.find('Infantes',query);
			promesa.then(function(Datos){
				$scope.centros = Datos;
			});
		}
	};

	var acciones = [];
    $scope.$watch( "infantes" , function(n,o){
	    var trues = $filter("filter")( n , {seleccionado:true} );
	    try{
	    	if(acciones.length > 0){
	    		acciones = [];
	    	}
	    	angular.forEach(trues,function(f){
	    		acciones.push(f._id);
	    	});
	    	$scope.sel = trues.length;
	    }catch(e){
	    	//
	    }
    }, true );

	$scope.eliminar = function(){
		angular.forEach(acciones,function(f){
			var promise = $kinvey.DataStore.destroy('Infantes',f);
			promise.then(function(respuesta){
				//elimino
			},function(errorCallback){
				//no se pudieron eliminar
			});
		});
		$timeout(function() {
			var promise = $kinvey.DataStore.find('Infantes');
			promise.then(
				function(registros){
					$scope.infantes = registros;
				});
		}, 500);
		
	};
	
	var promise = $kinvey.DataStore.find('Infantes');
	promise.then(
			function(registros){
				$scope.infantes = registros;
				// = registros;
		},function(errorCallback){
			console.log(errorCallback);		
		}
	);
	$scope.crear = function(){
		//var crearEstado = $scope.crearEstado;
		//CRUDFac.crearcrearEstado($kinvey,crearEstado);
		//CRUDFac.crearEstados($kinvey);
	};
	$scope.borrar = function(){
		//
	};
	$scope.listar = function(){
		//crearEstadosCRUDFac.crearEstados($kinvey);
		//$scope.crearEstados = crearEstados($kinvey);
	};
	$scope.actualizar = function(){
		//
	};

	$scope.items = ['item1', 'item2', 'item3'];

	$scope.agregarModal = function () {
	    var modalInstance = $modal.open({
	      	templateUrl: 'plantillas/CRUD/crearinfantes.html',
		    controller: 'infantesCrearCtrlCRUD',//ModalInstanceCtrl
		    size: 'sm',
		    /*
		    resolve: {
		        items: function () {
		          return $scope.items;
		        }
		    }
		    */
	    });

	    modalInstance.result.then(function () {//selectedItem
	    	//$scope.selected = selectedItem;
	    }, function () {
	    	//$log.info('Modal dismissed at: ' + new Date());
	    });
	};	
})

.controller('ModalInstanceCtrl',function($modalInstance, items){
//var  ModalInstanceCtrl = function ($scope, $modalInstance, items) {	//
})

.controller('centrosCrearCtrlCRUD',function($location,tipoeventoFac){//,$upload
	/*$scope.watch('tipoevento.ide',function(){
		$scope.tipoevento.ide = parseInt($scope.tipoevento.ide);
	});*/
	$scope.formulariodepartamento = tipoeventoFac.formulariodepartamento;
	$scope.creartipoeventoX = {};
	$scope.enviar = function(){
		/*
		angular.element('#files').addEventListener('change',function(e){
			var imagen = e.target.files[0];
			var promise = $kinvey.File.upload(imagen,{
				_filename: imagen.name,
				public: true,
				size: imagen.size,//imagen.length
				mimeType: imagen.type
			});
			promise.then(
				function(_data){
					console.log(JSON.stringify(_data,null,2));
				},
				function(error){
					console.log(JSON.stringify(error,null,2));
				}
			);
		},false);
		*/
		//requiere script src="angular-file-upload-shim.min.js"
		//requiere script src="angular-file-upload.min.js"
		//<div ng-file-drop-available="dropSupported=true" ng-show=
		//"!dropSupported">HTML5 requerido</div
		//<div ng-file-drop="onFileSelect($files)" ng-show="dropSupported">Arrastrar archivos acá</div>

		$scope.hogarX = {};//ciudad,,
		//,departamento,
		//imagen

		if($scope.hogar.departamento){
			$scope.hogarX.departamento = $scope.hogar.departamento.departamento;
			$scope.hogarX.ciudad = $scope.hogar.departamento.nombre;
		}
		if($scope.hogar.nombre){
			$scope.hogarX.nombre = $scope.hogar.nombre;
		}
		if($scope.hogar.codigo){
			$scope.hogarX.codigo = $scope.hogar.codigo+'';
		}
		if($scope.hogar.direccion){
			$scope.hogarX.direccion = $scope.hogar.direccion;
		}
		if($scope.hogar.contacto){
			$scope.hogarX.contacto = $scope.hogar.contacto;
		}
		if($scope.hogar.extension){
			$scope.hogarX.extension = $scope.hogar.extension;
		}
		if($scope.hogar.responsable){
			$scope.hogarX.responsable = $scope.hogar.responsable;
		}
		var json = {};
		var promise = $kinvey.DataStore.save('Hogares',$scope.hogarX);
		promise.then(
			function(respuesta){
				$location.path('/admin/centros');
			},function(errorCallback){
				//return errorCallback;
			}
		);
	};
})

.controller('estadosCrearCtrlCRUD',function($location,us){
	minimo = $kinvey.DataStore.count('Estados');
	$scope.estadosMin = 3;
	minimo.then(function(cantidad){
		$scope.estadosMin = cantidad+1;
	},function(errorCallback){
		$scope.estadosMin = 4;
	});
	//$scope.estadosMin = 3;
	/*$scope.watch('estado.ide',function(){
		$scope.estado.ide = parseInt($scope.estado.ide);
	});*/
	$scope.crearEstadoX = {};
	$scope.enviar = function(){
		if($scope.estado.descripcion){
			//$scope.crearestadoX.descripcion = '"'+$scope.crearestado.descripcion+'"';
		}
		if($scope.estado.ide){
		//	$scope.crearestadoX.id = '"'+$scope.crearestado.ide+'"';
		}
		var estadoX = {
			id: $scope.estado.ide+'',
			descripcion: $scope.estado.descripcion
		};
		console.log(estadoX);
		console.log(estadoX.id);
		var json = {};
		var promise = $kinvey.DataStore.save('Estados',estadoX);
		promise.then(
			function(respuesta){
				$location.path('/admin/estados');
			},function(errorCallback){
				//return errorCallback;
			}
		);
	};
})

.controller('eventosCrearCtrlCRUD',function($location,us){
	minimo = $kinvey.DataStore.count('TiposEvento');
	$scope.tiposeventoMin = 2;
	minimo.then(function(cantidad){
		$scope.tiposeventoMin = cantidad+1;
	},function(errorCallback){
		$scope.tiposeventoMin = 2;
	});
	$scope.creartipoeventoX = {};
	$scope.enviar = function(){
		if($scope.tipoevento.descripcion){
			//$scope.creartipoeventoX.descripcion = '"'+$scope.creartipoevento.descripcion+'"';
		}
		if($scope.tipoevento.ide){
		//	$scope.creartipoeventoX.id = '"'+$scope.creartipoevento.ide+'"';

		}
		var tipoeventoX = {
			id: $scope.tipoevento.ide+'',
			descripcion: $scope.tipoevento.descripcion
		};
		var json = {};
		var promise = $kinvey.DataStore.save('TiposEvento',tipoeventoX);
		promise.then(
			function(respuesta){
				$location.path('/admin/eventos');
			},function(errorCallback){
				//return errorCallback;
			}
		);
	};
})

.controller('infantesCrearCtrlCRUD',function($location,us){//,$modalInstance
	//
	//$scope.items = items;
	//$scope.selected = {
	//	item: $scope.items[0]
	//};
	$scope.formularioGenero = [
		{genero:'femenino'},
		{genero:'masculino'}
	];
	$scope.formularioInfante = [
		{Infante:'activo'},
		{Infante:'inactivo'}
	];
	$scope.formularioCodigo_hogar = [
		{codigo:'209'},
		{codigo:'210'},
		{codigo:'211'}
	];
	$scope.formularioEstado = [
		{estado:'activo'},
		{estado:'inactivo'},
		{estado:'registro'}			
	];
	$scope.infanteX = {};

  	$scope.cancel = function () {
    	//$modalInstance.dismiss('cancel');
  	};
	//{_id: 'xxx',props:'xxxx'}//_id opcional
	
	$scope.enviar = function(){
		console.log($scope.infante.estado);
		console.log($scope.infante.genero);
		if($scope.infante.estado.estado == 'activo' || $scope.infante.estado.estado == '"activo"'){
			$scope.infanteX.estado = '1';
		}
		if($scope.infante.estado.estado == 'inactivo' || $scope.infante.estado.estado == '"inactivo"'){
			$scope.infanteX.estado = '0';
		}
		if($scope.infante.genero.genero == 'masculino' || $scope.infante.genero.genero == '"masculino"'){
			$scope.infanteX.genero = 'M';
		}
		if($scope.infante.genero.genero == 'femenino' || $scope.infante.genero.genero == '"femenino"'){
			$scope.infanteX.genero = 'F';
		}
		if($scope.infante.documento){
			$scope.infanteX.documento = $scope.infante.documento+'';
		}
		if($scope.infante.codigo_hogar){
			$scope.infanteX.codigo_hogar = $scope.infante.codigo_hogar.codigo;
		}
		if($scope.infante.talla){
			$scope.infanteX.talla = $scope.infante.talla+'';
		}
		if($scope.infante.peso){
			$scope.infanteX.peso = $scope.infante.peso+'';//num.toString()
		}
		if($scope.infante.fecha){
			$scope.infanteX.fecha_nacimiento = $scope.infante.fecha+'';
		}
		if($scope.infante.primer_apellido){
			$scope.infanteX.primer_apellido = $scope.infante.primer_apellido;
		}
		if($scope.infante.segundo_apellido){
			$scope.infanteX.segundo_apellido = $scope.infante.segundo_apellido;
		}
		if($scope.infante.primer_nombre){
			$scope.infanteX.primer_nombre = $scope.infante.primer_nombre;
		}
		if($scope.infante.segundo_nombre){
			$scope.infanteX.segundo_nombre = $scope.infante.segundo_nombre;
		}
		angular.forEach($scope.infanteX, function(inf){
			//console.log(inf);
			//console.log(angular.toJson(inf,[true]));
		});
		var promise = $kinvey.DataStore.save('Infantes',$scope.infanteX);
		promise.then(
			function(respuesta){
				$location.path('/admin/centros');
			},function(errorCallback){
				//return errorCallback;		
			}
		);
		//$modalInstance.close();//$scope.selected.item
	};
})

.factory('tipoeventoFac',function(){
	return {
		formulariodepartamento : [
			{
				departamento: 'antioquia',
				nombre: 'bello',
				nombre: 'itagüí',
				nombre: 'medellín'
			},
			{
				departamento: 'atlántico',
				nombre: 'barranquilla'
			},
			{
				departamento: 'cundinamarca',
				nombre: 'cundinamarca',
				nombre: 'soacha'
			},
			{
				departamento: 'Tolima',
				nombre: 'ibagué'
			}
		]
	};
})

.factory('CRUDFac',function($scope,us){//$kinvey,$scope

	var f = {
		listar: function($scope){
			var crearEstados = null;
			console.log('xxx');
			var promise = $kinvey.DataStore.find('crearEstados');
			promise.then(
					function(registros){
						console.log('ahora aca');
						return registros;
						// = registros;
				},function(errorCallback){
					return errorCallback;		
				}
			);	
		}
	};
	//f.listar = function(){
		//return {
		//		'_id':'x',
		//		'crearEstados.estado':'1',
		//        'genero':'m',
		//        'codigo_hogar':'1',
		//        'documento':'2',
		//        'fecha_nacimiento':'3',
		//        'primer_apellido':'4',
		//        'segundo_apellido':'5',
		//        'primer_nombre':'pmbre',
		//        'segundo_nombre':'ombre'
		//};
	//	var crearEstados = null;
	//	console.log('xxx');
	//	var promise = $kinvey.DataStore.find('crearEstados');
	//	promise.then(
	//			function(registros){
	//				console.log('ahora aca');
	//				return registros;
	//				// = registros;
	//		},function(errorCallback){
	//			return errorCallback;		
	//		}
	//	);
	//}
	return f;
})

.filter('genero', function() {
    return function(input) {
        if(input == 'M' || input == '1'){
            return 'masculino';
        }
        if(input == 'F' || input == '0'){
        	return 'femenino'
        }
        return 'n/a';
    }
})

.filter('estado', function(){
	return function(input) {
        if(input == 1 || input == '1'){
            return 'activo';
        }
        if(input == 0 || input == '0'){
        	return 'inactivo'
        }
        return 'n/a';
    }
})

.directive('generoOpc', function (){ 
   return {
      require: 'ngModel',
      link: function(scope, elem, attr, ngModel) {
          var generoOpc = attr.opciones.split(',');
          ngModel.$parsers.unshift(function (value) {
            console.log(value);
             ngModel.$setValidity('opciones', opciones.indexOf(value) === -1);
             return value;
          });
      }
   };
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

function siUsuario(Parse, $location, $rootScope) {
	var usuario = $kinvey.getActiveUser();
	if (usuario != null) {
		console.log(usuario);
		if ($location.$$url != '/dashboard') {
			$location.path('/dashboard');
		}
	} else {
		console.log(usuario+' no');
		var promise = $kinvey.User.login({
            username: 'antioquia',
            password: 'antioquiaICBF'
        });
        console.log('x');
        promise.then(
            function (response) {
                $location.path('#/');
                console.log('logueado'+promise);
            }
        );
		if ($location.$$url != 'plantillas/login') {
			$location.path('plantillas/login');
		}
	}
}
function salir(Parse, $location, $rootScope){
	var usario = $kinvey.getActiveUser();
	if(null !== usuario) {
	    var promise = $kinvey.User.logout();
	}
}
function fechaActual(anterior){
	var fecha = new Date();
	var anio =  fecha.getFullYear().toString();
	var mes = fecha.getMonth()+1;
	if(mes<10){
		mes = '0'+mes;
	}
	if(anterior){
		mes--;	
	}
	mes = mes.toString();
	var dia = fecha.getDate();
	if(dia<10){
		dia = '0'+dia;
	}
	switch (mes){
		case '1' || 1:
			mes = 'ene';
			break;
		case '2' || 2:
			mes = 'feb';
			break;
		case '3' || 3:
			mes = 'mar';
			break;
		case '4' || 4:
			mes = 'abr';
			break;
		case '5'  || 5:
			mes = 'may';
			break;
		case '6' || 6:
			mes = 'jun';
			break;
		default:
			mes = 'may';
			break;
	}
	return mes+' '+dia+', '+anio;//+'T00:00:00.000Z'
}
function muestraRepetidos(entidades){
	var entidadesDocumento = [];
	var entRepetidos = [];
	var actual = act = null;
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
	angular.forEach(entidadesDocumento, function(ent){
		if(ent.cod_hogar != act){
			if (act != null) {
				entRepetidos.push(ent);
			}else{
				act =ent.cod_hogar;
			};			
		}else{			
			act =ent.cod_hogar;
		}
	});
	//console.log(entidadesDocumento.length+' <- documento repetido');
	return entRepetidos;
}
//
/*
.controller('conectar',function($location,$scope,Parse){
	$scope.auth = Parse.auth;
	$scope.user = {};
	$scope.errorMessage = null;
	return $scope.signin = function(user){
		//mientras login creo usuario y password local
		user.username = 'tecnico1';
		user.password = 'tecnico1';
		if(!(user.username && user.password)){
			return $scope.errorMessage = 'Ingrese usuario y contraseña';
		}
		return Parse.auth.login(user.username,user.password).then(
			function(){
				console.log('in',arguments);
			},function(err){
				console.log('out',arguments);
				return $scope.errorMessage = err.data.error;
			}
		);
	}
})
*/
