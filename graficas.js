//Grafcia S1X
function datos(){
  var datos=[],
  tiempo=(new Date()).getTime(), i;
  for(i=-100; i<=0; i+=1){
    datos.push({
      x: tiempo+i*1000,
      y: -1
    })
  }
  return datos;
}

var configS1x = {
    type: 'line',
    data: {
      datasets: [{
        label: 'Aceleración [m/s2]',
        backgroundColor: "rgb(231, 235, 54)",
        borderColor: "rgb(231, 235, 54)",
        data: datos(0),
        fill: false,
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      scales: {
        xAxes: [{
          type: "time",
          scaleLabel: {
            display: true,
            labelString: 'Tiempo'
          },
          ticks: {
                    autoSkip: true,
                    maxTicksLimit: 5,
                    maxRotation: 0,
                    minRotation: 0
                  }
        }],
        yAxes: [{
          display: true,

          scaleLabel: {
            display: true,
            labelString: 'Aceleración [m/s2]'
          },
          ticks:{
            beginAtZero: false,
            steps: 0.1,
            stepValue:10,
            suggestedMax: -0.05,
            suggestedMin:-0.075
          }
        }]
      },
      legend: {display: false},
              tooltips:{
                enabled: false
              }
    }
  };
  var ctxS1x = document.getElementById('S1x').getContext("2d");
  var S1x =  new Chart(ctxS1x, configS1x);

  function updateS1x(){
    var time =(new Date()).getTime();
    configS1x.data.datasets.forEach(function(dataset){
      dataset.data.shift();
      dataset.data.push({x: time, y: ValorAceleracionS1x});
    });
    S1x.update();
  }
  setInterval(updateS1x,100);
////////////////////////////////////
//Grafcia S1Y
////////////////////////////////////
var configS1y = {
    type: 'line',
    data: {
      datasets: [{
        label: 'Aceleración [m/s2]',
        backgroundColor: "rgb(74, 235, 54)",
        borderColor: "rgb(74, 235, 54)",
        data: datos(0),
        fill: false,
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      scales: {
        xAxes: [{
          type: "time",
          scaleLabel: {
            display: true,
            labelString: 'Tiempo'
          },
          ticks: {
                    autoSkip: true,
                    maxTicksLimit: 5,
                    maxRotation: 0,
                    minRotation: 0
                  }
        }],
        yAxes: [{
          display: true,

          scaleLabel: {
            display: true,
            labelString: 'Aceleración [m/s2]'
          },
          ticks:{
            beginAtZero: false,
            steps: 0.1,
            stepValue:10,
            suggestedMax: 0.05,
            suggestedMin: 0.03
          }
        }]
      },
      legend: {display: false},
              tooltips:{
                enabled: false
              }
    }
  };
    var ctxS1y = document.getElementById('S1y').getContext("2d");
    var S1y =  new Chart(ctxS1y, configS1y);
    function updateS1y(){
      var time =(new Date()).getTime();
        configS1y.data.datasets.forEach(function(dataset){
        dataset.data.shift();
        dataset.data.push({x: time, y: ValorAceleracionS1y});
      });
      S1y.update();
    }
    setInterval(updateS1y,100);
////////////////////////////////////
//Grafcia S1Z
////////////////////////////////////
var configS1z = {
    type: 'line',
    data: {
      datasets: [{
        label: 'Aceleración [m/s2]',
        backgroundColor: "rgb(0, 0, 0)",
        borderColor: "rgb(0, 0, 0)",
        data: datos(0),
        fill: false,
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      scales: {
        xAxes: [{
          type: "time",
          scaleLabel: {
            display: true,
            labelString: 'Tiempo'
          },
          ticks: {
                    autoSkip: true,
                    maxTicksLimit: 5,
                    maxRotation: 0,
                    minRotation: 0
                  }
        }],
        yAxes: [{
          display: true,

          scaleLabel: {
            display: true,
            labelString: 'Aceleración [m/s2]'
          },
          ticks:{
            beginAtZero: false,
            steps: 0.1,
            stepValue:10,
            suggestedMax: 0.08,
            suggestedMin: 0.05
          }
        }]
      },
      legend: {display: false},
              tooltips:{
                enabled: false
              }
    }
  };
    var ctxS1z = document.getElementById('S1z').getContext("2d");
    var S1z =  new Chart(ctxS1z, configS1z);
    function updateS1z(){
      var time =(new Date()).getTime();
        configS1z.data.datasets.forEach(function(dataset){
        dataset.data.shift();
        dataset.data.push({x: time, y: ValorAceleracionS1z});
      });
      S1z.update();
    }
    setInterval(updateS1z,100);
////////////////////////////////////
//Grafcia S2
////////////////////////////////////
//Grafcia S2X
var configS2x = {
    type: 'line',
    data: {
      datasets: [{
        label: 'Aceleración [m/s2]',
        backgroundColor: "rgb(231, 235, 54)",
        borderColor: "rgb(231, 235, 54)",
        data: datos(0),
        fill: false,
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      scales: {
        xAxes: [{
          type: "time",
          scaleLabel: {
            display: true,
            labelString: 'Tiempo'
          },
          ticks: {
                    autoSkip: true,
                    maxTicksLimit: 5,
                    maxRotation: 0,
                    minRotation: 0
                  }
        }],
        yAxes: [{
          display: true,

          scaleLabel: {
            display: true,
            labelString: 'Aceleración [m/s2]'
          },
          ticks:{
            beginAtZero: false,
            steps: 0.1,
            stepValue:10,
            suggestedMax: 0.071,
            suggestedMin: 0.04
          }
        }]
      },
      legend: {display: false},
              tooltips:{
                enabled: false
              }
    }
  };
  var ctxS2x = document.getElementById('S2x').getContext("2d");
  var S2x =  new Chart(ctxS2x, configS2x);

  function updateS2x(){
    var time =(new Date()).getTime();
    configS2x.data.datasets.forEach(function(dataset){
      dataset.data.shift();
      dataset.data.push({x: time, y: ValorAceleracionS2x});
    });
    S2x.update();
  }
  setInterval(updateS2x,100);
////////////////////////////////////
//Grafcia S2Y
////////////////////////////////////
var configS2y = {
    type: 'line',
    data: {
      datasets: [{
        label: 'Aceleración [m/s2]',
        backgroundColor: "rgb(74, 235, 54)",
        borderColor: "rgb(74, 235, 54)",
        data: datos(0),
        fill: false,
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      scales: {
        xAxes: [{
          type: "time",
          scaleLabel: {
            display: true,
            labelString: 'Tiempo'
          },
          ticks: {
                    autoSkip: true,
                    maxTicksLimit: 5,
                    maxRotation: 0,
                    minRotation: 0
                  }
        }],
        yAxes: [{
          display: true,

          scaleLabel: {
            display: true,
            labelString: 'Aceleración [m/s2]'
          },
          ticks:{
            beginAtZero: false,
            steps: 0.1,
            stepValue:10,
            suggestedMax: 0.07,
            suggestedMin: 0.05
          }
        }]
      },
      legend: {display: false},
              tooltips:{
                enabled: false
              }
    }
  };
    var ctxS2y = document.getElementById('S2y').getContext("2d");
    var S2y =  new Chart(ctxS2y, configS2y);
    function updateS2y(){
      var time =(new Date()).getTime();
        configS2y.data.datasets.forEach(function(dataset){
        dataset.data.shift();
        dataset.data.push({x: time, y: ValorAceleracionS2y});
      });
      S2y.update();
    }
    setInterval(updateS2y,100);
////////////////////////////////////
//Grafcia S2Z
////////////////////////////////////
var configS2z = {
    type: 'line',
    data: {
      datasets: [{
        label: 'Aceleración [m/s2]',
        backgroundColor: "rgb(0, 0, 0)",
        borderColor: "rgb(0, 0, 0)",
        data: datos(0),
        fill: false,
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      scales: {
        xAxes: [{
          type: "time",
          scaleLabel: {
            display: true,
            labelString: 'Tiempo'
          },
          ticks: {
                    autoSkip: true,
                    maxTicksLimit: 5,
                    maxRotation: 0,
                    minRotation: 0
                  }
        }],
        yAxes: [{
          display: true,

          scaleLabel: {
            display: true,
            labelString: 'Aceleración [m/s2]'
          },
          ticks:{
            beginAtZero: false,
            steps: 0.1,
            stepValue:10,
            suggestedMax: -0.05,
            suggestedMin: -0.07
          }
        }]
      },
      legend: {display: false},
              tooltips:{
                enabled: false
              }
    }
  };
    var ctxS2z = document.getElementById('S2z').getContext("2d");
    var S2z =  new Chart(ctxS2z, configS2z);
    function updateS2z(){
      var time =(new Date()).getTime();
        configS2z.data.datasets.forEach(function(dataset){
        dataset.data.shift();
        dataset.data.push({x: time, y: ValorAceleracionS2z});
      });
      S2z.update();
    }
    setInterval(updateS2z,100);
////////////////////////////////////
//Grafcia S3
////////////////////////////////////
//Grafcia S3X
var configS3x = {
    type: 'line',
    data: {
      datasets: [{
        label: 'Aceleración [m/s2]',
        backgroundColor: "rgb(231, 235, 54)",
        borderColor: "rgb(231, 235, 54)",
        data: datos(0),
        fill: false,
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      scales: {
        xAxes: [{
          type: "time",
          scaleLabel: {
            display: true,
            labelString: 'Tiempo'
          },
          ticks: {
                    autoSkip: true,
                    maxTicksLimit: 5,
                    maxRotation: 0,
                    minRotation: 0
                  }
        }],
        yAxes: [{
          display: true,

          scaleLabel: {
            display: true,
            labelString: 'Aceleración [m/s2]'
          },
          ticks:{
            beginAtZero: false,
            steps: 0.1,
            stepValue:10,
            suggestedMax: -0.51,
            suggestedMin: -0.48
          }
        }]
      },
      legend: {display: false},
              tooltips:{
                enabled: false
              }
    }
  };
  var ctxS3x = document.getElementById('S3x').getContext("2d");
  var S3x =  new Chart(ctxS3x, configS3x);

  function updateS3x(){
    var time =(new Date()).getTime();
    configS3x.data.datasets.forEach(function(dataset){
      dataset.data.shift();
      dataset.data.push({x: time, y: ValorAceleracionS3x});
    });
    S3x.update();
  }
  setInterval(updateS3x,100);
////////////////////////////////////
//Grafcia S3Y
////////////////////////////////////
var configS3y = {
    type: 'line',
    data: {
      datasets: [{
        label: 'Aceleración [m/s2]',
        backgroundColor: "rgb(74, 235, 54)",
        borderColor: "rgb(74, 235, 54)",
        data: datos(0),
        fill: false,
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      scales: {
        xAxes: [{
          type: "time",
          scaleLabel: {
            display: true,
            labelString: 'Tiempo'
          },
          ticks: {
                    autoSkip: true,
                    maxTicksLimit: 5,
                    maxRotation: 0,
                    minRotation: 0
                  }
        }],
        yAxes: [{
          display: true,

          scaleLabel: {
            display: true,
            labelString: 'Aceleración [m/s2]'
          },
          ticks:{
            beginAtZero: false,
            steps: 0.1,
            stepValue:10,
            suggestedMax: 0.04,
            suggestedMin: 0.02
          }
        }]
      },
      legend: {display: false},
              tooltips:{
                enabled: false
              }
    }
  };
    var ctxS3y = document.getElementById('S3y').getContext("2d");
    var S3y =  new Chart(ctxS3y, configS3y);
    function updateS3y(){
      var time =(new Date()).getTime();
        configS3y.data.datasets.forEach(function(dataset){
        dataset.data.shift();
        dataset.data.push({x: time, y: ValorAceleracionS3y});
      });
      S3y.update();
    }
    setInterval(updateS3y,100);
////////////////////////////////////
//Grafcia S3Z
////////////////////////////////////
var configS3z = {
    type: 'line',
    data: {
      datasets: [{
        label: 'Aceleración [m/s2]',
        backgroundColor: "rgb(0, 0, 0)",
        borderColor: "rgb(0, 0, 0)",
        data: datos(0),
        fill: false,
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      scales: {
        xAxes: [{
          type: "time",
          scaleLabel: {
            display: true,
            labelString: 'Tiempo'
          },
          ticks: {
                    autoSkip: true,
                    maxTicksLimit: 5,
                    maxRotation: 0,
                    minRotation: 0
                  }
        }],
        yAxes: [{
          display: true,

          scaleLabel: {
            display: true,
            labelString: 'Aceleración [m/s2]'
          },
          ticks:{
            beginAtZero: false,
            steps: 0.1,
            stepValue:10,
            suggestedMax: -0.04,
            suggestedMin: -0.01
          }
        }]
      },
      legend: {display: false},
              tooltips:{
                enabled: false
              }
    }
  };
    var ctxS3z = document.getElementById('S3z').getContext("2d");
    var S3z =  new Chart(ctxS3z, configS3z);
    function updateS3z(){
      var time =(new Date()).getTime();
        configS3z.data.datasets.forEach(function(dataset){
        dataset.data.shift();
        dataset.data.push({x: time, y: ValorAceleracionS3z});
      });
      S3z.update();
    }
    setInterval(updateS3z,100);
//////////////////////////////
///Notificacion
/////////////////////////////
