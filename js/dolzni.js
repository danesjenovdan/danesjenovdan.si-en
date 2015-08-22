var majicaHTML = [	'<div class="vozicekitemcontainer">',
					'<div class="vozicekitemimage" data-img="../../img/majica1.jpg" style="background-image: url(../../img/majica1.jpg); "></div>',
					'<h1 class="vozicekitemtitle">Majica</h1>',
					'<p class="vozicekitemproperty">{{ itemtype }}</p>',
					'<p class="vozicekitemproperty">velikost {{ itemsize }}</p>',
					'<div class="vozicekitemcountercontainer">',
					'<div class="vozicekitemcounter" data-name="{{ itemname }}"><span class="artikelnumber">{{ itemquantity }}</span><div class="plusone" onclick="addItem($(this).parent().data(\'name\')); renderCart();"></div><div class="minusone" onclick="removeItem(getItemIdByName($(this).parent().data(\'name\'))); renderCart();"></div></div>',
					'<div class="vozicekitemremove" data-name="{{ itemname }}" onclick="removeItemFamily(getItemIdByName($(this).data(\'name\'))); renderCart();">Odstrani <span class="odstranix">×</span></div>',
					'</div>',
					'</div>'].join('\n'); // TODO update picture
					
var rizleHTML = [	'<div class="vozicekitemcontainer">',
					'<div class="vozicekitemimage" data-img="../../img/rizle1.jpg" style="background-image: url(../../img/rizle1.jpg); "></div>',
					'<h1 class="vozicekitemtitle">Rizle</h1>',
					'<p class="vozicekitemproperty">&nbsp;</p>',
					'<p class="vozicekitemproperty">&nbsp;</p>',
					'<div class="vozicekitemcountercontainer">',
					'<div class="vozicekitemcounter" data-name="{{ itemname }}"><span class="artikelnumber">{{ itemquantity }}</span><div class="plusone" onclick="addItem($(this).parent().data(\'name\')); renderCart();"></div><div class="minusone" onclick="removeItem(getItemIdByName($(this).parent().data(\'name\'))); renderCart();"></div></div>',
					'<div class="vozicekitemremove" data-name="{{ itemname }}" onclick="removeItemFamily(getItemIdByName($(this).data(\'name\'))); renderCart();">Odstrani <span class="odstranix">×</span></div>',
					'</div>',
					'</div>'].join('\n'); // TODO update picture

var racunHTML = [	'<div class="vozicekracunitemcontainer">',
					'<div class="vozicekracunitem">{{ itemname }}</div>',
					'<div class="vozicekracunprice">{{ itemtotalprice }} €</div>',
					'</div>'].join('\n');



function createCart() {
    $.cookie('dolzniCart2', JSON.stringify({'items': []}), {'expires': 30, 'path': '/'});
    if (!$.cookie('dolzniCart')) {
        $.cookie('dolzniCart', JSON.stringify({'items': []}), {'expires': 30, 'path': '/'});
    } else {
        renderCart();
    }
}

function addItem(name, quantity, details, price) {
    if ($.cookie('dolzniCart') === '') {
        createCart();
    }
	items = JSON.parse($.cookie('dolzniCart')).items;
	
	if (items.length === 0) { // empty cart
		items.push({'name': name, 'quantity': quantity, 'details': details, 'price': price});

		$.cookie('dolzniCart', JSON.stringify({'items': items}), {'expires': 30, 'path': '/'});
	} else { // something already in cart
		$.each(items, function(i, e) {
			if (e['name'] === name) {
				items[i]['quantity'] = parseInt(items[i]['quantity']) + 1;
			
				$.cookie('dolzniCart', JSON.stringify({'items': items}), {'expires': 30, 'path': '/'});
				
				return false;
			} else if (i + 1 === items.length){
				items.push({'name': name, 'quantity': quantity, 'details': details, 'price': price});

				$.cookie('dolzniCart', JSON.stringify({'items': items}), {'expires': 30, 'path': '/'});
			}
		});
	}
}

function addItem2(name, quantity, details, price) {
    if ($.cookie('dolzniCart2') === '') {
        createCart();
    }
	items = JSON.parse($.cookie('dolzniCart2')).items;
	
	if (items.length === 0) { // empty cart
		items.push({'name': name, 'quantity': quantity, 'details': details, 'price': price});

		$.cookie('dolzniCart2', JSON.stringify({'items': items}), {'expires': 30, 'path': '/'});
	} else { // something already in cart
		$.each(items, function(i, e) {
			if (e['name'] === name) {
				items[i]['quantity'] = parseInt(items[i]['quantity']) + 1;
			
				$.cookie('dolzniCart2', JSON.stringify({'items': items}), {'expires': 30, 'path': '/'});
				
				return false;
			} else if (i + 1 === items.length){
				items.push({'name': name, 'quantity': quantity, 'details': details, 'price': price});

				$.cookie('dolzniCart2', JSON.stringify({'items': items}), {'expires': 30, 'expires': 30, 'path': '/'});
			}
		});
	}
}

function removeItem(id) {
	items = JSON.parse($.cookie('dolzniCart')).items;
	
	if (items[id].quantity > 1) {
		items[id]['quantity'] = items[id]['quantity'] - 1;
	} else {
		items.splice(id, 1);
	}
	
	$.cookie('dolzniCart', JSON.stringify({'items': items}), {'expires': 30, 'path': '/'});
}

function removeItemFamily(id) {
	items = JSON.parse($.cookie('dolzniCart')).items;
	
	items.splice(id, 1);
	
	$.cookie('dolzniCart', JSON.stringify({'items': items}), {'expires': 30, 'path': '/'});
}

function getItemIdByName(name) {
	items = JSON.parse($.cookie('dolzniCart')).items;
	var returner = -1;
	
	$.each(items, function(i, e) {
		if (e['name'] === name) {
			returner = i;
		}
	});
	
	return returner;
}

function incrementQuantity(name) {
	items = JSON.parse($.cookie('dolzniCart')).items;
	
	items[getItemIdByName(name)]['quantity'] = parseInt(items[getItemIdByName(name)]['quantity'] + 1);
	
	$.cookie('dolzniCart', JSON.stringify({'items': items}), {'expires': 30, 'path': '/'});
}

function calculatePrice() {
	items = JSON.parse($.cookie('dolzniCart')).items;
	var price = 0;
	
	$.each(items, function(i, e) {
        if (e['name'].indexOf('donacija') === -1) {
            price = price + (parseInt(e['price']) * parseInt(e['quantity']));
        }
	});
	
	return price;
}

function countItems() {
	items = JSON.parse($.cookie('dolzniCart')).items;
	var count = 0;
	
	$.each(items, function(i, e) {
        if (e['name'].indexOf('donacija') === -1) {
            count = count + parseInt(e['quantity']);
        }
	});
	
	return count;
}

function renderMajica(itemtype, itemsize, itemquantity, itemname) {
	return majicaHTML.replace('{{ itemtype }}', itemtype).replace('{{ itemsize }}', itemsize).replace('{{ itemquantity }}', itemquantity).replace(/\{\{ itemname \}\}/g, itemname);
}

function renderRizle(itemquantity, itemname) {
	return rizleHTML.replace('{{ itemquantity }}', itemquantity).replace(/\{\{ itemname \}\}/g, itemname);
}

function renderRacun(itemname, itemtotalprice) {
	return racunHTML.replace('{{ itemname }}', itemname).replace('{{ itemtotalprice }}', itemtotalprice);
}

function renderCart() {
	items = JSON.parse($.cookie('dolzniCart')).items;
	
	if (items.length === 0) {
		$('#row-cart, .vozicek').removeClass('open');
	} else {
		$('#row-cart').addClass('open');
	}
	$('#cartcounter').text(countItems());
	
	// pobriši voziček
	$('.vozicekitemcontainer').remove();
	$('.vozicekracunitemcontainer').remove();

	// dodaj artikle
	$.each(items, function(i, e) {
		if (e['name'].indexOf('donacija') == -1) {
			if (e['name'].indexOf('majica') != -1) {
				// majica je
			
				majicaid = getItemIdByName(e['name']);
				// zgoraj
				$('.vozicekracun').before(renderMajica(items[majicaid]['details']['type'], items[majicaid]['details']['size'], items[majicaid]['quantity'], items[majicaid]['name']));
				// na računu
				$('.vozicekracun').prepend(renderRacun('Majica ' + items[majicaid]['details']['size'] + ' ' + items[majicaid]['details']['type'] + ' kroj', (parseInt(items[majicaid]['quantity']) * parseInt(items[majicaid]['price']))));
			} else {
				// rizle so
			
				rizleid = getItemIdByName(e['name']);
				// zgoraj
				$('.vozicekracun').before(renderRizle(items[rizleid]['quantity'], items[rizleid]['name']));
				// na računu
				$('.vozicekracun').prepend(renderRacun('Rizle', (items[rizleid]['quantity'] * items[rizleid]['price'])));
			}
		}
	});
	
	// končna cena
	$('.vozicekracuntotalprice').text(calculatePrice() + ' €');
	
}

$(document).ready(function() {

	createCart();

	$('.velikosrcetile').on('click', function() {
		$(this).siblings().each(function(i, e) {
			if ($(e).hasClass('selected')) {
				$(e).removeClass('selected');
			}
		})
		$(this).toggleClass('selected');
		
		// activate button
	});
	
	$('.input-drugo').on('focusout', function() {
		var reg = /^\d+$/;
		if (reg.test($(this).val())) {
			$(this).parent().siblings('.selected').removeClass('selected');
			$(this).parent().addClass('selected');
		} else {
			$(this).parent().shake();
			$(this).removeClass(selected);
		}
	});
	
    $('#naturalijetextarea').on('focus', function() {
        if ($(this).val() === 'programiranje, analiza podatkov, statistika, vizuzalizacije, aktivizem, pravo, pisarna, blablabla') {
            $(this).val('');
        }
    });
    
	$('#submitnaturalije').on('click', function() {
		if ($('#naturalijeemail').val() != '' && $('#naturalijetextarea').val() != '') {
            
            // mandrill send mail
            sendTheNaturalijeMail(
                'vsi@danesjenovdan.si', 
                ('Piše: ' + $('#naturalijeemail').val() + '<br><br>' + $('#naturalijetextarea').val())
            );
            
			$.post('https://djnd.slack.com/services/hooks/incoming-webhook?token=EApBJ7B21GFJmytVv5ZoNqoV',
				JSON.stringify({
					'channel': '#api-monitor',
					'username': 'Apinator',
					'text': 'Yo Filip! Nekdo je obljubil naturalije!',
					'attachments': [
						{
							'fallback': 'Your client is stupid, go vote.',
							'color': 'good',
							'parse': 'full',
							'fields': [
								{
									'title': $('#naturalijeemail').val(),
									'value': $('#naturalijetextarea').val(),
									'short': false
								}
							]
						}
					]
				}), 
				function(r) {
                    startConfetti();
                    $('#naturalijepopup').removeClass('open');
					console.log(r);
				}
			);
		} else {
			$('.naturalijeform').shake();
		}
	});
	
	$('.btn-finish-majica').on('click', function() {
        
		if ($(this).parent().parent().children('.artikeltogglecontainer:nth-of-type(1)').children('.artikeltoggle').hasClass('dolzniselected') && $(this).parent().parent().children('.artikeltogglecontainer:nth-of-type(2)').children('.artikeltoggle').hasClass('dolzniselected')) {
			// everything OK
            
            // add to cart
            // determine what it's for
            if ($(this).parents('.popup').attr('id') === 'majicapopup') {
                // majica

                // generate data
                var name = 'majica';
                if ($(this).parent().siblings('.majicatype').children('.dolzniselected').text() === 'ohlapen') {
                    name = name + 'oh' + $(this).parent().siblings('.majicasize').children('.dolzniselected').text();
                } else {
                    name = name + 'op' + $(this).parent().siblings('.majicasize').children('.dolzniselected').text();
                }
                var quantity = $(this).parent().siblings('.artikeltogglecontainer').children('.artikelcounter').children('.artikelnumber').text();
                var details = {
                    'realname': 'Majica',
                    'type': $(this).parent().siblings('.majicatype').children('.dolzniselected').text(),
                    'size': $(this).parent().siblings('.majicasize').children('.dolzniselected').text()
                }

                // ga za majico step2
                ga('send', {
                    'hitType': 'event',
                    'eventCategory': 'majica',
                    'eventAction': 'step2',
                    'eventLabel': name
                });
                
                // add item
                addItem(name, quantity, details, 12);

            } else {
                alert('rizle');
                // ker ni drugega morajo bit rizle
                // generate data
                var name = 'rizle'
                var quantity = $(this).parent().siblings('.artikeltogglecontainer').children('.artikelcounter').children('.artikelnumber').text();
                var details = {}

                // add item
                addItem(name, quantity, details, 2);

            }
            
			$(this).parents('.popup').removeClass('open');
            
            window.open('vozicek#checkout', '_blank');
		} else {
			$(this).parent().parent().children('.artikeltogglecontainer, .artikellable').not('.noshake').shake();
		}
	});
    
    $('.btn-finish-rizle').on('click', function() {
        
        // ker ni drugega morajo bit rizle
        // generate data
        var name = 'rizle'
        var quantity = $(this).parent().siblings('.artikeltogglecontainer').children('.artikelcounter').children('.artikelnumber').text();
        var details = {}
        
        // ga za rizle step2
        ga('send', {
            'hitType': 'event',
            'eventCategory': 'rizle',
            'eventAction': 'step2',
            'eventLabel': 'rizle' + quantity
        });

        // add item
        addItem(name, quantity, details, 2);


        $(this).parents('.popup').removeClass('open');

        window.open('vozicek#checkout', '_blank');
	});
	
	$('.gallerymainimage, .gallerythumb, .vozicekitemimage, .pregleditemimage').each(function(i, e) {
		$(e).css('background-image', 'url(' + $(e).data('img') + ')');
	});
	$('.gallerythumb').on('click', function() {
		console.log($(this).data('img'));
		$(this).parents('.artikelgallerycontainer').children('.gallerymainimage').css({
			'background-image': 'url(' + $(this).data('img') + ')'
		});
	});
	
	$('#carticons').on('click', function() {
		renderCart();
		$('.vozicek').toggleClass('open');
	});
	
	$('.artikeltoggle').on('click', function() {
		$(this).siblings().each(function(i, e) {
			if ($(e).hasClass('dolzniselected')) {
				$(e).removeClass('dolzniselected');
			}
		})
		$(this).addClass('dolzniselected');
		
		// activate button
        
        // prevent shaking
        $(this).parent().addClass('noshake').prev().addClass('noshake');
	});
	
	// $('.btn-dolzni').not('#submitnaturalije').on('click', function() {
	// 	if (!$(this).siblings('.velikosrcetilecontainer').children().hasClass('selected')) {
	// 		$(this).prev().shake();
	// 	} else {
	// 		// all OK
	// 	}
	// });
	
	$('#submitenkratna').on('click', function() {
        $.cookie('dolzniCart2', JSON.stringify({'items': []}), {'expires': 30, 'path': '/'});
        
        console.log('clicked submit');
        
		if (!$(this).siblings('.velikosrcetilecontainer').children().hasClass('selected')) {
			$(this).prev().shake();
		} else {
            
            // ga za enkratno donacijo
            ga('send', {
                'hitType': 'event',
                'eventCategory': 'one_time_d',
                'eventAction': 'step2'
            });
            
			// all OK
			if ($(this).prev().children('.selected').hasClass('velikosrceinput')) {
				addItem2('Enkratna donacija ' + $(this).prev().children('.selected').children('.input-drugo').val() + ' €', 1, '', $(this).prev().children('.selected').children('.input-drugo').val());
			} else {
                var amount = $(this).prev().children('.selected').text().split(' ')[$(this).prev().children('.selected').text().split(' ').length - 2]
                console.log(amount);
				addItem2('Enkratna donacija ' + amount + ' €', 1, '', amount);
			}
            
            window.open('./donacija', '_blank');
            $('.popup.open').removeClass('open');
		}
	});

	$('#submitredna').on('click', function() {
        $.cookie('dolzniCart2', JSON.stringify({'items': []}), {'expires': 30, 'path': '/'});
        
		if (!$(this).siblings('.velikosrcetilecontainer').children().hasClass('selected')) {
			$(this).prev().shake();
		} else {
			// all OK
            
            // ga za redno donacijo
            ga('send', {
                'hitType': 'event',
                'eventCategory': 'regular_d',
                'eventAction': 'step2'
            });
            
			if ($(this).prev().children('.selected').hasClass('velikosrceinput')) {
				addItem2('Redna donacija ' + $(this).prev().children('.selected').children('.input-drugo').val() + ' €', 1, '', $(this).prev().children('.selected').children('.input-drugo').val());
			} else {
                var amount = $(this).prev().children('.selected').text().split(' ')[$(this).prev().children('.selected').text().split(' ').length - 2]
				addItem2('Redna donacija ' + amount + ' €', 1, '', amount);
			}
            
            window.open('donacija#redna', '_blank');
            $('.popup.open').removeClass('open');
		}
	});
	
	// add item to cart
	$('.artikelfinishorlink').on('click', function() {
		
		window.setTimeout(function() {
			renderCart();
		}, 500);
		
		// determine what it's for
		if ($(this).parents('.popup').attr('id') === 'majicapopup') {
			// majica
			
			if ($(this).parent().parent().parent().children('.artikeltogglecontainer:nth-of-type(1)').children('.artikeltoggle').hasClass('dolzniselected') && $(this).parent().parent().parent().children('.artikeltogglecontainer:nth-of-type(2)').children('.artikeltoggle').hasClass('dolzniselected')) {
				// everything OK
                
                
				// generate data
				var name = 'majica';
				if ($(this).parent().parent().siblings('.majicatype').children('.dolzniselected').text() === 'ohlapen') {
					name = name + 'oh' + $(this).parent().parent().siblings('.majicasize').children('.dolzniselected').text();
				} else {
					name = name + 'op' + $(this).parent().parent().siblings('.majicasize').children('.dolzniselected').text();
				}
				var quantity = $(this).parent().parent().siblings('.artikeltogglecontainer').children('.artikelcounter').children('.artikelnumber').text();
				var details = {
					'realname': 'Majica',
					'type': $(this).parent().parent().siblings('.majicatype').children('.dolzniselected').text(),
					'size': $(this).parent().parent().siblings('.majicasize').children('.dolzniselected').text()
				}
                
                // ga za majico step3
                ga('send', {
                    'hitType': 'event',
                    'eventCategory': 'majica',
                    'eventAction': 'step3',
                    'eventLabel': name
                });

				// add item
				addItem(name, quantity, details, 12);
				
				$(this).parents('.popup').removeClass('open');

			} else {
				$(this).parent().parent().parent().children('.artikeltogglecontainer, .artikellable').not('.noshake').shake();

			}

			return false;
			
		} else {
			// ker ni drugega morajo bit rizle
            
			// generate data
			var name = 'rizle'
			var quantity = $(this).parent().parent().siblings('.artikeltogglecontainer').children('.artikelcounter').children('.artikelnumber').text();
			var details = {}
			
            // ga za rizle step3
            ga('send', {
                'hitType': 'event',
                'eventCategory': 'rizle',
                'eventAction': 'step3',
                'eventLabel': 'rizle' + quantity
            });
            
			// add item
			addItem(name, quantity, details, 2);
			
			$(this).parents('.popup').removeClass('open');
			
			return false;
		}
		
	});
	
	// plus/minus
	$('.plusone').on('click', function() {
		$(this).siblings('.artikelnumber').text((parseInt($(this).siblings('.artikelnumber').text()) + 1));
	})
	$('.minusone').on('click', function() {
		if ($(this).siblings('.artikelnumber').text() != '1') {
			$(this).siblings('.artikelnumber').text((parseInt($(this).siblings('.artikelnumber').text()) - 1));
		}
	})
	
    
    // zaključi nakup
    $('.btn-zakljuci').on('click', function() {
        window.open('vozicek', '_blank');
    });
	
});