import Chart from 'chart.js'

window.onload = () => {
  var ctx = document.getElementById("chart").getContext('2d')
  let chart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: ["January", "February", "March", "April", "May", "June", "July"],
			datasets: [{
				label: "My First dataset",
				borderColor: 'rgb(255, 99, 132)',
				data: [0, 10, 5, 2, 20, 30, 45],
			}]
		},

		// Configuration options go here
		options: {}
  })
}
