function formatter(value){
      value = value.toString();
      value = value.split(/(?=(?:...)*$)/);
      value = value.join(',');
      return '$' + value;
    }

window.onload = function(){
  var line = document.getElementById('line-chart').getContext('2d');

var myLine = new Chart(line,{
  type:'line',
  data: {
    labels:["2010","2011","2012","2013","2014","2015","2016","2017","2018"],
    datasets:[
      {
        label:"Crook county",
        data:[0,95400,93100,130000,154000,137000,163000,222000,248000],
        fill:false,
        borderColor:"rgb(75,192,192)",
        lineTension:0.1
      },
      {
        label:"Deschutes county",
        data:[191000,163000,184000,217000,253000,266000,293000,321000,362000],
        fill:false,
        borderColor:"rgb(54, 162, 235)",
        lineTension:0.1
      },
      {
        label:"Jefferson county",
        data:[0,0,0,154000,125000,143000,143000,170000,211000],
        fill:false,
        borderColor:"red",
        lineTension:0.1
      }

    ]
  },
  options: {
    title: {
      display: true,
      text: "Median home sales price in Central Oregon",
      fontSize: 20,
      fontColor: "blue"
    },
    tooltips: {
      callbacks: {
        label: function(toolTipItem){
            return formatter(toolTipItem.yLabel)
          }
        

      }

    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          userCallback: 
            function(value, index, values) {
              return formatter(value);
            } 
        }
      }]
    }
  }
})
}
