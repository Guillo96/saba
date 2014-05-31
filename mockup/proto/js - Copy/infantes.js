function FiltroBusquedaCtrl ($scope) {
	$scope.infantes =
	[
		{
        documento:'101', nombre:'Ana', primerApellido: 'Guzman', segundoApellido: 'Guzman', fechaNacimiento: new Date(),
        genero:'F', hogar: 'hogar 1'
      },
      {
        documento:'102',nombre:'Ana Maria', primerApellido: 'Guzman', segundoApellido: 'Alvarez', fechaNacimiento: new Date(),
        genero:'F', hogar: 'hogar 1'
      },
      {
        documento:'103',nombre:'Ana', primerApellido: 'Guzman', segundoApellido: 'Guzman', fechaNacimiento: new Date(),
        genero:'F', hogar: 'hogar 1'
      },
      {
        documento:'104',nombre:'Ana Celina', primerApellido: 'Guzman', segundoApellido: 'Guzman', fechaNacimiento: new Date(),
        genero:'F', hogar: 'hogar 1'
      }     
    ];

    $scope.ordenarPor = function(orden) {
    	$scope.ordenSeleccionado = orden;
  	};
}