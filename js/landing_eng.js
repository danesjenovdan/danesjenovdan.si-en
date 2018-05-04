(function () {
  function fetchAgrumentShortUrl(element) {
    var date = $(element).parent().parent().parent().parent().data('date').trim();
    $.ajax({
      method: "POST",
      url: "https://djnd.si/yomamasofat/",
      data: {
        fatmama: 'https://agrument.danesjenovdan.si/' + date + '/'
      },
      success: function (resp) {
        $(element).val(resp);
      }
    });
  }

  function generateSocialButtons(element, titleElement) {
    var link = $(element).val();
    var title = $(titleElement).text();
    $('.fb, .tw, .gp').off('click');
    $('.fb').on('click', function () {
      ga('send', {
        'hitType': 'event',
        'eventCategory': 'agrument',
        'eventAction': 'share',
        'eventLabel': 'facebook'
      });

      var url = 'https://www.facebook.com/dialog/share?app_id=301375193309601&display=popup&href=' + encodeURIComponent(link) + '&redirect_uri=' + encodeURIComponent(link) + '&ref=responsive';
      window.open(url, '_blank');
      return false;
    });
    $('.tw').on('click', function () {
      ga('send', {
        'hitType': 'event',
        'eventCategory': 'agrument',
        'eventAction': 'share',
        'eventLabel': 'twitter'
      });

      var url = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(title + ' ' + link);
      window.open(url, '_blank');
      return false;
    });
    $('.gp').on('click', function () {
      ga('send', {
        'hitType': 'event',
        'eventCategory': 'agrument',
        'eventAction': 'share',
        'eventLabel': 'google_plus'
      });

      var url = 'https://plus.google.com/share?url=' + encodeURIComponent(title + ' ' + link);
      window.open(url, '_blank');
      return false;
    });
  }

  var templates = {
    makeProjectTile: function (title, text, url, image) {
      return '\
        <div class="col-md-4 col-sm-6 flex-col">\
          <div class="landing-tile">\
            <a href="' + url + '" target="_blank" class="landing-tile__link">\
              <div class="landing-tile__image" style="background-image: url(\'' + image + '\');">\
                <span class="icon-arrow-right"></span>\
              </div>\
              <div class="landing-tile__content">\
                <h1 class="landing-tile__title">' + title + '</h1>\
                <div class="landing-tile__text">' + text + '</div>\
              </div>\
            </a>\
          </div>\
        </div>\
      ';
    },
    makeAgrumentTile: function (title, text, date, image, imageSource, imageSourceUrl) {
      return '\
        <div class="col-md-12">\
          <div class="landing-tile tile-obcasnik-full tile-newagrument" data-date="' + date + '">\
            <h1 class="newagrumenttitle">' + title + '</h1>\
            <img src="' + image + '" class="img-responsive img-newagrument">\
            <div class="newagrumentimgsource"><a href="' + imageSourceUrl + '" target="_blank">' + imageSource + '</a></div>\
            <div class="row">\
              <div class="col-md-3">\
                <p class="newagrumentdate">' + date + '</p>\
                <p class="newagrumentcopyme">Skopiraj povezavo!</p>\
                <div class="newagrumenturlcontainer">\
                  <input class="form-control newagrumenturl" value="https://agrument.danesjenovdan.si/' + date + '">\
                </div>\
                <div class="agrumentsocialcontainer">\
                  <div class="circle-agrument bck-green circle fb">\
                    <div class="pulse"></div>\
                    <div class="icon icon-facebook"></div>\
                  </div>\
                  <div class="circle-agrument bck-green circle tw">\
                    <div class="pulse"></div>\
                    <div class="icon icon-twitter"></div>\
                  </div>\
                  <div class="circle-agrument bck-green circle gp">\
                    <div class="pulse"></div>\
                    <div class="icon icon-googleplus"></div>\
                  </div>\
                </div>\
              </div>\
              <div class="col-md-9">' + text + '</div>\
            </div>\
          </div>\
        </div>\
      ';
    },
    makeParlameterTile: function (title, text, url) {
      return '\
        <div class="col-md-12">\
          <div class="landing-tile">\
            <a href="' + url + '" target="_blank" class="landing-tile__link">\
              <div class="landing-tile__content row">\
                <div class="col-xs-4">\
                  <img src="/img/parlameter_logo.png" class="img-responsive">\
                </div>\
                <div class="col-xs-8">\
                  <i>A web tool for a user-friendly analysis of parliamentary data.</i>\
                </div>\
              </div>\
              <hr class="landing-tile__separator">\
              <div class="landing-tile__content">\
                <h3 class="landing-tile__title landing-tile__title--small">' + title + '</h3>\
                <div class="landing-tile__text landing-tile__text--small">' + text + '</div>\
              </div>\
            </a>\
          </div>\
        </div>\
      ';
    },
    makeNewsTile: function (title, text, url, date) {
      if (text.substr(0, 3) === '<p>' && text.substr(-4) === '</p>') {
        text = text.slice(3, -4);
      }
      // TODO: fix this when news site exists
      if (true || text.length >= 445) {
        // text = text.slice(0, 445) + '...';
        text += ' <a href="' + url + '" class="landing-tile__link-more">MORE <span class="icon-arrow-down-right"></span></a>';
      }
      return '\
        <div class="col-md-12">\
          <div class="landing-tile landing-tile--news">\
            <div class="landing-tile__content">\
              <h3 class="landing-tile__title"><a href="' + url + '" class="col-gray">' + title + '</a></h3>\
              <div class="landing-tile__date">' + date + '</div>\
              <div class="landing-tile__text"><p>' + text + '</p></div>\
            </div>\
          </div>\
        </div>\
      ';
    },
  }

  $.getJSON('https://api.djnd.si/djndLanding/ANG_projects/3/')
    .done(function (json) {
      if (json.status != 'OK') {
        return;
      }
      var container = $('#landing-append-projects');
      for (var i = 0; i < json.data.length; i++) {
        var data = json.data[i];
        var tile = templates.makeProjectTile(data.title, data.label, data.url, data.image);
        container.append(tile);
      }
    });

  // $.getJSON('https://agrument.danesjenovdan.si/getfullagrument/')
  //   .done(function (json) {
  //     var container = $('#landing-append-agrument');
  //     var tile = templates.makeAgrumentTile(json.title, json.content, json.date, json.image, json.source, json['source-url']);
  //     container.append(tile);

  //     var urlElement = container.find('.newagrumenturl');
  //     var titleElement = container.find('.newagrumenttitle')
  //     generateSocialButtons(urlElement, titleElement);
  //     fetchAgrumentShortUrl(urlElement);
  //   });

  $.getJSON('https://api.djnd.si/djndLanding/ANG_parlameter/1/')
    .done(function (data) {
      var container = $('#landing-append-parlameter');
      var tile = templates.makeParlameterTile(data.title, data.label, data.url);
      container.append(tile);
    });

  $.getJSON('https://api.djnd.si/djndLanding/ANG_news/4/')
    .done(function (json) {
      if (json.status != 'OK') {
        return;
      }
      var container = $('#landing-append-news');
      for (var i = 0; i < json.data.length; i++) {
        var data = json.data[i];
        var tile = templates.makeNewsTile(data.title, data.label, data.url, data.date);
        container.append(tile);
      }
    });
}());
