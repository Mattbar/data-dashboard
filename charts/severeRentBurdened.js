function pieFormat(value){
      value = value.toString();
      return value + '%';
    }

function createPie(){
var pie = document.getElementById('pie-chart').getContext('2d');

var myPie = new Chart(pie,{
  type:'pie',
  data: {
    labels:["Crook", "Deschutes", "Jefferson"],
    datasets:[
      {
        data:[19.2, 24.5, 19.7],
        fill:false,
        borderColor:"rgb(75,192,192)",
        backgroundColor: ["rgb(75,192,192)", "rgb(54, 162, 235)", "red"]
      },

    ]
  },
  options: {
    title: {
      display: true,
      text: "% Severe Rent Burdened in Central Oregon",
      fontSize: 20,
      fontColor: "blue"
    },
  }
})
}
