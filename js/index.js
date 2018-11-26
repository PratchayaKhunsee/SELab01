(function() {
    console.log('Prayut Chan-O-Cha is follwing you.');
    var section = document.querySelector('section'), nav = document.querySelector('nav');

    window.news = document.getElementById('news');
    window.maps = document.getElementById('maps');
    window.profile = document.getElementById('profile');
    window.graph = document.getElementById('graph');
    window.pics = document.getElementById('pics'); 
    window.vdo = document.getElementById('AV'); 

    window.moveToFirstTopic = function(){
        window.scrollTo(0,section.offsetTop-nav.offsetHeight);
    };

    window.moveTo = function(element){
        window.scrollTo(0,element.offsetTop-nav.offsetHeight);
    };


    // Drawing Chart

    Chart.defaults.global.defaultFontSize = 16;

    var GDP_Canvas = document.getElementById('chart-GDP').getContext('2d'),
        GDP_Chart = new Chart(GDP_Canvas,{
            type: 'line',
            data: {
                // labels: ['ไตรมาสที่ 1','ไตรมาสที่ 2','ไตรมาสที่ 3','ไตรมาสที่ 4'],
                datasets: [{
                    label: 'ปี 2560',
                    data: [null,3.4,3.9,4.3,4.0],
                    borderColor: 'rgba(175, 204, 255,1)',
                    borderWidth: 3,
                    backgroundColor: 'rgba(175, 204, 255,0.01)',
                },{
                    label: 'ปี 2561',
                    data: [4.0,4.9,4.6,3.3,null],
                    borderColor: 'rgba(50, 120, 245,1)',
                    borderWidth: 3,
                    backgroundColor: 'rgba(50, 120, 245,0.01)',
                }]
            },
            options: {
                responsive: true,
                scales: {
                    xAxes: [{
                        type: 'category',
                        labels: ['','ไตรมาสที่ 1','ไตรมาสที่ 2','ไตรมาสที่ 3','ไตรมาสที่ 4'],
                        gridLines: { display: false, }
                    }],
                    yAxes: [{
                        ticks: {
                            beginAtZero:true,
                            stepSize: 1
                        }
                    }],
                },
            }
        });


})();