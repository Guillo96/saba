google.load("visualization", "1", {packages:["corechart"]});
      google.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Años', 'Activos', 'Inactivos'],
          ['enero',  5000,      30],
          ['febrero',5550,      100 ],
          ['Marzo',  7000,      200],
          ['abril',  8000,      300],
          ['mayo',  1040,       550],
          ['junio',  1030,      200],
          ['julio',  1030,      300],
          ['agosto',  1030,     30],
          ['septiembre', 515,  400],
          ['octubre',  515,      20],
          ['noviempre',  600,      100],
          ['diciembre', 100,      200]
        ]);

        var options = {
          title: 'REPORTE DE BENEFICIARIOS MENSUALMENTE'
        };

        var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }