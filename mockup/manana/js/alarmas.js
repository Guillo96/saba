function reporteCtrl($scope){


	$scope.buscar = $scope.opcion;

	$scope.infantes =
	[
		{
        documento:'101', primernombre:'Ana', segundonombre:'Camila', primerApellido: 'Guzman', segundoApellido: 'Guzman', fechaNacimiento: new Date(),
        genero:'F', hogar: 'hogar 1'
      },
      {
        documento:'102', primernombre:'Ana', segundonombre:'Camila', primerApellido: 'Guzman', segundoApellido: 'Guzman', fechaNacimiento: new Date(),
        genero:'F', hogar: 'hogar 1'
      },
      {
        documento:'103', primernombre:'Ana', segundonombre:'Camila', primerApellido: 'Guzman', segundoApellido: 'Guzman', fechaNacimiento: new Date(),
        genero:'F', hogar: 'hogar 1'
      },
      {
        documento:'104', primernombre:'Ana', segundonombre:'Camila', primerApellido: 'Guzman', segundoApellido: 'Guzman', fechaNacimiento: new Date(),
        genero:'F', hogar: 'hogar 1'
      }     
    ];

    $scope.ordenarPor = function(orden) {
    	$scope.ordenSeleccionado = orden;
  	};
};