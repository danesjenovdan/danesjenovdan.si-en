$(document).ready(function () {

    $('.fancyboxrestcontainer')
        .height($('.fancyboxrestcontainer').parent().height());

    window.onresize = function () {
        $('.fancyboxrestcontainer')
            .height($('.fancyboxrestcontainer').parent().height());
    }
    
    $('#donate1').on('click', function () {
        $.cookie('dolzniCart2', JSON.stringify({
            'items': []
        }), {
            'expires': 30,
            'path': '/'
        });
        addItem2('Enkratna donacija 1 €', 1, '', 1);
        window.open('http://danesjenovdan.si/dolzni/donacija/', '_blank');
    });
    
    $('.popovermofo').popover({
        'trigger': 'hover'
    });
});

google.load("visualization", "1", {
    packages: ["treemap"]
});
google.setOnLoadCallback(drawCharts);

var data1, data2, data3, data4, data5, data6, data7, data8, data9, data10;

var URL1 = 'https://docs.google.com/spreadsheets/d/1Ytafbx8njyXRNUbcgncxVyKL3k1FIO8WyW_lvBQKtOM/edit?usp=sharing&sheet=po lastnikih - MOSS&headers=1#';
var URL2 = 'https://docs.google.com/spreadsheets/d/1Ytafbx8njyXRNUbcgncxVyKL3k1FIO8WyW_lvBQKtOM/edit?usp=sharing&sheet=po lastnikih - FB share&headers=1#';
var URL3 = 'https://docs.google.com/spreadsheets/d/1Ytafbx8njyXRNUbcgncxVyKL3k1FIO8WyW_lvBQKtOM/edit?usp=sharing&sheet=po lastnikih - FB like&headers=1#';
var URL4 = 'https://docs.google.com/spreadsheets/d/1Ytafbx8njyXRNUbcgncxVyKL3k1FIO8WyW_lvBQKtOM/edit?usp=sharing&sheet=po lastnikih - FB comment&headers=1#';
var URL5 = 'https://docs.google.com/spreadsheets/d/1Ytafbx8njyXRNUbcgncxVyKL3k1FIO8WyW_lvBQKtOM/edit?usp=sharing&sheet=po lastnikih - TW&headers=1#';
var URL6 = 'https://docs.google.com/spreadsheets/d/1Ytafbx8njyXRNUbcgncxVyKL3k1FIO8WyW_lvBQKtOM/edit?usp=sharing&sheet=po websiteih - MOSS&headers=1#';
var URL7 = 'https://docs.google.com/spreadsheets/d/1Ytafbx8njyXRNUbcgncxVyKL3k1FIO8WyW_lvBQKtOM/edit?usp=sharing&sheet=po websiteih - FB share&headers=1#';
var URL8 = 'https://docs.google.com/spreadsheets/d/1Ytafbx8njyXRNUbcgncxVyKL3k1FIO8WyW_lvBQKtOM/edit?usp=sharing&sheet=po websiteih - FB like&headers=1#';
var URL9 = 'https://docs.google.com/spreadsheets/d/1Ytafbx8njyXRNUbcgncxVyKL3k1FIO8WyW_lvBQKtOM/edit?usp=sharing&sheet=po websiteih - FB comment&headers=1#';
var URL10 = 'https://docs.google.com/spreadsheets/d/1Ytafbx8njyXRNUbcgncxVyKL3k1FIO8WyW_lvBQKtOM/edit?usp=sharing&sheet=po websiteih - TW&headers=1#';

function drawCharts() {
    drawChart1();
    drawChart2();
    drawChart3();
    drawChart4();
    drawChart5();
    drawChart6();
    drawChart7();
    drawChart8();
    drawChart9();
    drawChart10();
}

// Lastniki MOSS
function drawChart1() {
    var query = new google.visualization.Query(URL1);
    query.send(handleQueryResponse1);
}

function handleQueryResponse1(response) {
    data1 = response.getDataTable();
    var tree = new google.visualization.TreeMap(document.getElementById('chart_div1'));

    tree.draw(data1, {
        minColor: '#D57768',
        midColor: '#D57768',
        maxColor: '#D57768',
        headerHeight: 0,
        fontColor: '#ffffff',
        showScale: false,
        generateTooltip: showFullTooltip1
    });
}

function showFullTooltip1(row, size, value) {
    return '<div style="background:#FAEEEC; padding:10px; ">' +
        '<span style="font-family:Courier"><b>' + data1.getValue(row, 0) + '</b><br>' + data1.getValue(row, 4) +
        '</span><br>' +
        data1.getColumnLabel(2) +
        ' * število objav: ' + Math.round(size)
}

// lastniki FB share
function drawChart2() {
    var query = new google.visualization.Query(URL2);
    query.send(handleQueryResponse2);
}

function handleQueryResponse2(response) {
    data2 = response.getDataTable();
    var tree = new google.visualization.TreeMap(document.getElementById('chart_div2'));

    tree.draw(data2, {
        minColor: '#D57768',
        midColor: '#D57768',
        maxColor: '#D57768',
        headerHeight: 0,
        fontColor: '#FFFFFF',
        showScale: false,
        generateTooltip: showFullTooltip2
    });
}

function showFullTooltip2(row, size, value) {
    return '<div style="background:#FAEEEC; padding:10px; ">' +
        '<span style="font-family:Courier"><b>' + data2.getValue(row, 0) + '</b><br>' + data2.getValue(row, 4) +
        '</span><br>' +
        data2.getColumnLabel(2) +
        ': ' + Math.round(size)
}

// lastniki FB like
function drawChart3() {
    var query = new google.visualization.Query(URL3);
    query.send(handleQueryResponse3);
}

function handleQueryResponse3(response) {
    data3 = response.getDataTable();
    var tree = new google.visualization.TreeMap(document.getElementById('chart_div3'));

    tree.draw(data3, {
        minColor: '#D57768',
        midColor: '#D57768',
        maxColor: '#D57768',
        headerHeight: 0,
        fontColor: '#FFFFFF',
        showScale: false,
        generateTooltip: showFullTooltip3
    });
}

function showFullTooltip3(row, size, value) {
    return '<div style="background:#FAEEEC; padding:10px; ">' +
        '<span style="font-family:Courier"><b>' + data3.getValue(row, 0) + '</b><br>' + data3.getValue(row, 4) +
        '</span><br>' +
        data3.getColumnLabel(2) +
        ': ' + Math.round(size)
}

// lastniki FB comment
function drawChart4() {
    var query = new google.visualization.Query(URL4);
    query.send(handleQueryResponse4);
}

function handleQueryResponse4(response) {
    data4 = response.getDataTable();
    var tree = new google.visualization.TreeMap(document.getElementById('chart_div4'));

    tree.draw(data4, {
        minColor: '#D57768',
        midColor: '#D57768',
        maxColor: '#D57768',
        headerHeight: 0,
        fontColor: '#FFFFFF',
        showScale: false,
        generateTooltip: showFullTooltip4
    });
}

function showFullTooltip4(row, size, value) {
    return '<div style="background:#FAEEEC; padding:10px; ">' +
        '<span style="font-family:Courier"><b>' + data4.getValue(row, 0) + '</b><br>' + data4.getValue(row, 4) +
        '</span><br>' +
        data4.getColumnLabel(2) +
        ': ' + Math.round(size)
}

// lastniki FB comment
function drawChart5() {
    var query = new google.visualization.Query(URL5);
    query.send(handleQueryResponse5);
}

function handleQueryResponse5(response) {
    data5 = response.getDataTable();
    var tree = new google.visualization.TreeMap(document.getElementById('chart_div5'));

    tree.draw(data5, {
        minColor: '#D57768',
        midColor: '#D57768',
        maxColor: '#D57768',
        headerHeight: 0,
        fontColor: '#FFFFFF',
        showScale: false,
        generateTooltip: showFullTooltip5
    });
}

function showFullTooltip5(row, size, value) {
    return '<div style="background:#FAEEEC; padding:10px; ">' +
        '<span style="font-family:Courier"><b>' + data5.getValue(row, 0) + '</b><br>' + data5.getValue(row, 4) +
        '</span><br>' +
        data5.getColumnLabel(2) +
        ': ' + Math.round(size)
}

// sajti MOSS
function drawChart6() {
    var query = new google.visualization.Query(URL6);
    query.send(handleQueryResponse6);
}

function handleQueryResponse6(response) {
    data6 = response.getDataTable();
    var tree = new google.visualization.TreeMap(document.getElementById('chart_div6'));

    tree.draw(data6, {
        minColor: '#D57768',
        midColor: '#D57768',
        maxColor: '#D57768',
        headerHeight: 0,
        fontColor: '#ffffff',
        showScale: false,
        generateTooltip: showFullTooltip6
    });
}

function showFullTooltip6(row, size, value) {
    return '<div style="background:#FAEEEC; padding:10px; ">' +
        '<span style="font-family:Courier"><b>' + data6.getValue(row, 0) + '</b><br>' + data6.getValue(row, 4) +
        '</span><br>' +
        data6.getColumnLabel(2) +
        ' * število objav: ' + Math.round(size)
}

// lastniki FB share
function drawChart7() {
    var query = new google.visualization.Query(URL7);
    query.send(handleQueryResponse7);
}

function handleQueryResponse7(response) {
    data7 = response.getDataTable();
    var tree = new google.visualization.TreeMap(document.getElementById('chart_div7'));

    tree.draw(data7, {
        minColor: '#D57768',
        midColor: '#D57768',
        maxColor: '#D57768',
        headerHeight: 0,
        fontColor: '#FFFFFF',
        showScale: false,
        generateTooltip: showFullTooltip7
    });
}

function showFullTooltip7(row, size, value) {
    return '<div style="background:#FAEEEC; padding:10px; ">' +
        '<span style="font-family:Courier"><b>' + data7.getValue(row, 0) + '</b><br>' + data7.getValue(row, 4) +
        '</span><br>' +
        data7.getColumnLabel(2) +
        ': ' + Math.round(size)
}

// lastniki FB like
function drawChart8() {
    var query = new google.visualization.Query(URL8);
    query.send(handleQueryResponse8);
}

function handleQueryResponse8(response) {
    data8 = response.getDataTable();
    var tree = new google.visualization.TreeMap(document.getElementById('chart_div8'));

    tree.draw(data8, {
        minColor: '#D57768',
        midColor: '#D57768',
        maxColor: '#D57768',
        headerHeight: 0,
        fontColor: '#FFFFFF',
        showScale: false,
        generateTooltip: showFullTooltip8
    });
}

function showFullTooltip8(row, size, value) {
    return '<div style="background:#FAEEEC; padding:10px; ">' +
        '<span style="font-family:Courier"><b>' + data8.getValue(row, 0) + '</b><br>' + data8.getValue(row, 4) +
        '</span><br>' +
        data8.getColumnLabel(2) +
        ': ' + Math.round(size)
}

// lastniki FB comment
function drawChart9() {
    var query = new google.visualization.Query(URL9);
    query.send(handleQueryResponse9);
}

function handleQueryResponse9(response) {
    data9 = response.getDataTable();
    var tree = new google.visualization.TreeMap(document.getElementById('chart_div9'));

    tree.draw(data9, {
        minColor: '#D57768',
        midColor: '#D57768',
        maxColor: '#D57768',
        headerHeight: 0,
        fontColor: '#FFFFFF',
        showScale: false,
        generateTooltip: showFullTooltip9
    });
}

function showFullTooltip9(row, size, value) {
    return '<div style="background:#FAEEEC; padding:10px; ">' +
        '<span style="font-family:Courier"><b>' + data9.getValue(row, 0) + '</b><br>' + data9.getValue(row, 4) +
        '</span><br>' +
        data9.getColumnLabel(2) +
        ': ' + Math.round(size)
}

// lastniki FB comment
function drawChart10() {
    var query = new google.visualization.Query(URL10);
    query.send(handleQueryResponse10);
}

function handleQueryResponse10(response) {
    data10 = response.getDataTable();
    var tree = new google.visualization.TreeMap(document.getElementById('chart_div10'));

    tree.draw(data10, {
        minColor: '#D57768',
        midColor: '#D57768',
        maxColor: '#D57768',
        headerHeight: 0,
        fontColor: '#FFFFFF',
        showScale: false,
        generateTooltip: showFullTooltip10
    });
}

function showFullTooltip10(row, size, value) {
    return '<div style="background:#FAEEEC; padding:10px; ">' +
        '<span style="font-family:Courier"><b>' + data10.getValue(row, 0) + '</b><br>' + data10.getValue(row, 4) +
        '</span><br>' +
        data10.getColumnLabel(2) +
        ': ' + Math.round(size)
}