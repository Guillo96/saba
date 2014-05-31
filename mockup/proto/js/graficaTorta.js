google.load("visualization", "1", {packages:["corechart"]});
      google.setOnLoadCallback(crearGraficaTorta);
      function crearGraficaTorta() {
        var info = google.visualization.arrayToDataTable([
          ['Mes', 'NumeroInfantes'],
          ['Enero',     110],
          ['Febrero',      200],
          ['Marzo',  1000],
          ['Abril', 300],
          ['Mayo',    700],
          ['Junio',    800],
          ['Julio',    900],
          ['Agosto',    650],
          ['Septiembre',    745],
          ['Octubre',    799],
          ['Noviembre',    800],
          ['Diciembre',    899]
        ]);

        var optiones = {
          title: 'Gráfico torta',
          is3D: true,
          
        };

        var grafica = new google.visualization.PieChart(document.getElementById('graficoTorta'));
        grafica.draw(info, optiones);

      }