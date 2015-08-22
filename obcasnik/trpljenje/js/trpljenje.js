// youtube

var videocountry;
var videostep;

// get api
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// initiate player
var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('trpljenjevideoplayer', {
        height: '390',
        width: '640',
        videoId: times['zda'][0]['snippetdata']['videoid'],
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// player ready
function onPlayerReady(event) {}

// state change
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {
        if (videostep < times[videocountry].length) {
            videostep = videostep + 1;
            player.loadVideoById({
                'videoId': times[videocountry][videostep - 1].snippetdata.videoid,
                'startSeconds': times[videocountry][videostep - 1].snippetdata.start,
                'endSeconds': times[videocountry][videostep - 1].snippetdata.stop
            });
            console.log(videocountry, videostep);
        }
    }
}

$(document).ready(function () {
    $('#donate3').on('click', function () {
        $.cookie('dolzniCart2', JSON.stringify({
            'items': []
        }), {
            'expires': 30,
            'path': '/'
        });
        addItem2('Enkratna donacija 3 €', 1, '', 3);
        window.open('http://danesjenovdan.si/dolzni/donacija/', '_blank');
    });

    $('.popovermofo').popover({
        'trigger': 'hover'
    });

    $('.voditeljchoice').on('mouseenter', function () {
        $(this).parent().addClass('hover-' + $(this).data('order'));
    });
    $('.voditeljchoice').on('mouseleave', function () {
        $(this).parent().removeClass('hover-' + $(this).data('order'));
    });

    $('.voditeljchoice').on('click', function () {
        var _this = this;
        videocountry = $(_this).data('id');
        videostep = 1;
        player.loadVideoById({
            'videoId': times[videocountry][videostep - 1].snippetdata.videoid,
            'startSeconds': times[videocountry][videostep - 1].snippetdata.start,
            'endSeconds': times[videocountry][videostep - 1].snippetdata.stop
        });
        console.log(videocountry, videostep);
    });

});

// chart
google.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Kategorija', 'ZDA', 'Rusija', 'Francija', 'Velika Britanija', 'Nemčija', 'Italija', 'Kitajska', 'Izrael'],
        ['Poraba za vojsko v USD na prebivalko/-ca', 2023, 621, 961, 908, 596, 535, 138, 2037],
        ['Izvoz orožja v USD na prebivalko/-ca', 88.57, 69.69, 69.67, 79.2, 37.21, 38.44, 1.62, 297.79]

          ]);

    var options = {
        title: 'Militariziranost največjih izvoznic orožja - Poraba za vojsko in izvoz orožja v USD na prebivalko/-ca',
        colors: ['#C2D8D8', '#E4D2A3', '#E3C3BF', '#6BA8A0', '#CCAC55', '#EDE6E5', '#1D7373', '#DD786B'],
        legend: {
            position: 'top',
            maxLines: 2
        },
        orientation: 'vertical',
        vAxis: {
            textPosition: 'none'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

    chart.draw(data, options);
}