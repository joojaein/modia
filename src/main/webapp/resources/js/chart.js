google.charts.load('current', { 'packages': ['corechart'] });
//google.charts.setOnLoadCallback(drawChart);

var options = {
    vAxis: { minValue: 0 },
    chartArea: {left:20, right:20, top:20, bottom:20},
    width:document.body.clientWidth+"px",
    height: document.body.clientWidth+"px"*2/3,
    legend:{position:'top', alignment:'center', textStyle:{fontSize:13}},
    selectionMode: 'multiple', 
    tooltip: { trigger: 'selection' },
    aggregationTarget: 'none'
};

var dataVal=[
    ['', '가입자수', '방문자수'],
    ['8월', 10, 30],
    ['9월', 12, 40],
    ['10월', 18, 35],
    ['11월', 30, 90]
];


function drawChart() {
    var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
    var data = google.visualization.arrayToDataTable(dataVal);
    chart.draw(data, options);

    google.visualization.events.addListener(chart, 'select', selectHandler);
    function selectHandler() {
        var selection = chart.getSelection();
        selectArr = [];
        for (var i = 0; i < selection.length; i++) {
            var item = selection[i];
            console.log(item.row +" / " + item.column);
            if (item.row != null && item.column != null) {
                var isPushed=false;
                for(var j=0; j<item.row; j++){
                    if(selectArr[j]==null){
                        selectArr[j] = { row: item.row, column: item.column };
                        isPushed=true;
                        break;
                    }
                }
                if(!isPushed)
                    selectArr[item.row] = { row: item.row, column: item.column };
            }
        }
        chart.setSelection(selectArr);
    }
}

function drawChart_v(dataVal) {
    var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
    var data = google.visualization.arrayToDataTable(dataVal);
    chart.draw(data, options);

    google.visualization.events.addListener(chart, 'select', selectHandler);
    function selectHandler() {
        var selection = chart.getSelection();
        selectArr = [];
        for (var i = 0; i < selection.length; i++) {
            var item = selection[i];
            if (item.row != null && item.column != null) {
                selectArr[item.row] = { row: item.row, column: item.column };
            }
        }
        chart.setSelection(selectArr);
    }
}
