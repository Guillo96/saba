var app = angular.module("icbf", ["ngRoute","googlechart"])//

.controller("BarChartCtrl", function($scope){
		
	$scope.chartObject = {};

	$scope.cssStyle = "height:600px; width:100%;"

	$scope.infantes = [
		{v: "infantes"},
		{v: 3},
	];

	$scope.chartObject.data = {
		"cols":[
		{id: "t", label: "Topping", type: "string"},
        {id: "s", label: "Slices", type: "number"}
		],
		"rows": [
        {c: [
            {v: "Champinones"},
            {v: 3},
        ]},
        {c: $scope.infantes},
        {c: [
            {v: "Alcaparras"},
            {v: 31}
        ]},
        {c: [
            {v: "Zuquini"},
            {v: 1},
        ]},
        {c: [
            {v: "Pepperoni"},
            {v: 2},
        ]}
    ]};

    $scope.chartObject.type = "BarChart";
    $scope.chartObject.options = {
    	"title": "mmmmmn..."
    };

});

//.factory("Index", function(){
//
//})
