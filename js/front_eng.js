// equalise heights
$.fn.equalizeHeights = function () {
    $(this).css("height", "");
    return this.height(Math.max.apply(this, $(this).map(function (i, e) {
        return $(e).height() + 15
    }).get()));
}

window.androidcheck = function () {
    return (/Android/i).test(navigator.userAgent || navigator.vendor || window.opera);
}

// mobile check function
window.mobilecheck = function () {
    var check = false;
    (function (a, b) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
}
window.touchcheck = function () {
    var check = false;
    (function (a, b) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
}

// shake plugin
jQuery.fn.shake = function () {
    this.each(function (i) {
        $(this).css({
            "position": "relative"
        });
        for (var x = 1; x <= 3; x++) {
            $(this).animate({
                left: -10
            }, 10).animate({
                left: 0
            }, 50).animate({
                left: 10
            }, 10).animate({
                left: 0
            }, 50);
        }
    });
    return this;
}

// SVG magic checkboxes
if (document.createElement('svg').getAttributeNS) {

    var checkbxsCross = Array.prototype.slice.call(document.querySelectorAll('form.ac-cross input[type="checkbox"]')),
        radiobxsFill = Array.prototype.slice.call(document.querySelectorAll('form.ac-fill input[type="radio"]')),
        radiobxsFill2 = Array.prototype.slice.call(document.querySelectorAll('form.ac-fill2 input[type="radio"]')),
        checkbxsCheckmark = Array.prototype.slice.call(document.querySelectorAll('form.ac-checkmark input[type="checkbox"]')),
        radiobxsCircle = Array.prototype.slice.call(document.querySelectorAll('form.ac-circle input[type="radio"]')),
        checkbxsBoxfill = Array.prototype.slice.call(document.querySelectorAll('form.ac-boxfill input[type="checkbox"]')),
        radiobxsSwirl = Array.prototype.slice.call(document.querySelectorAll('form.ac-swirl input[type="radio"]')),
        checkbxsDiagonal = Array.prototype.slice.call(document.querySelectorAll('form.ac-diagonal input[type="checkbox"]')),
        checkbxsList = Array.prototype.slice.call(document.querySelectorAll('form.ac-list input[type="checkbox"]')),
        pathDefs = {
            cross: ['M 10 10 L 90 90', 'M 90 10 L 10 90'],
            fill: ['M15.833,24.334c2.179-0.443,4.766-3.995,6.545-5.359 c1.76-1.35,4.144-3.732,6.256-4.339c-3.983,3.844-6.504,9.556-10.047,13.827c-2.325,2.802-5.387,6.153-6.068,9.866 c2.081-0.474,4.484-2.502,6.425-3.488c5.708-2.897,11.316-6.804,16.608-10.418c4.812-3.287,11.13-7.53,13.935-12.905 c-0.759,3.059-3.364,6.421-4.943,9.203c-2.728,4.806-6.064,8.417-9.781,12.446c-6.895,7.477-15.107,14.109-20.779,22.608 c3.515-0.784,7.103-2.996,10.263-4.628c6.455-3.335,12.235-8.381,17.684-13.15c5.495-4.81,10.848-9.68,15.866-14.988 c1.905-2.016,4.178-4.42,5.556-6.838c0.051,1.256-0.604,2.542-1.03,3.672c-1.424,3.767-3.011,7.432-4.723,11.076 c-2.772,5.904-6.312,11.342-9.921,16.763c-3.167,4.757-7.082,8.94-10.854,13.205c-2.456,2.777-4.876,5.977-7.627,8.448 c9.341-7.52,18.965-14.629,27.924-22.656c4.995-4.474,9.557-9.075,13.586-14.446c1.443-1.924,2.427-4.939,3.74-6.56 c-0.446,3.322-2.183,6.878-3.312,10.032c-2.261,6.309-5.352,12.53-8.418,18.482c-3.46,6.719-8.134,12.698-11.954,19.203 c-0.725,1.234-1.833,2.451-2.265,3.77c2.347-0.48,4.812-3.199,7.028-4.286c4.144-2.033,7.787-4.938,11.184-8.072 c3.142-2.9,5.344-6.758,7.925-10.141c1.483-1.944,3.306-4.056,4.341-6.283c0.041,1.102-0.507,2.345-0.876,3.388 c-1.456,4.114-3.369,8.184-5.059,12.212c-1.503,3.583-3.421,7.001-5.277,10.411c-0.967,1.775-2.471,3.528-3.287,5.298 c2.49-1.163,5.229-3.906,7.212-5.828c2.094-2.028,5.027-4.716,6.33-7.335c-0.256,1.47-2.07,3.577-3.02,4.809'],
            checkmark: ['M16.667,62.167c3.109,5.55,7.217,10.591,10.926,15.75 c2.614,3.636,5.149,7.519,8.161,10.853c-0.046-0.051,1.959,2.414,2.692,2.343c0.895-0.088,6.958-8.511,6.014-7.3 c5.997-7.695,11.68-15.463,16.931-23.696c6.393-10.025,12.235-20.373,18.104-30.707C82.004,24.988,84.802,20.601,87,16'],
            circle: ['M34.745,7.183C25.078,12.703,13.516,26.359,8.797,37.13 c-13.652,31.134,9.219,54.785,34.77,55.99c15.826,0.742,31.804-2.607,42.207-17.52c6.641-9.52,12.918-27.789,7.396-39.713 C85.873,20.155,69.828-5.347,41.802,13.379'],
            boxfill: ['M6.987,4.774c15.308,2.213,30.731,1.398,46.101,1.398 c9.74,0,19.484,0.084,29.225,0.001c2.152-0.018,4.358-0.626,6.229,1.201c-5.443,1.284-10.857,2.58-16.398,2.524 c-9.586-0.096-18.983,2.331-28.597,2.326c-7.43-0.003-14.988-0.423-22.364,1.041c-4.099,0.811-7.216,3.958-10.759,6.81 c8.981-0.104,17.952,1.972,26.97,1.94c8.365-0.029,16.557-1.168,24.872-1.847c2.436-0.2,24.209-4.854,24.632,2.223 c-14.265,5.396-29.483,0.959-43.871,0.525c-12.163-0.368-24.866,2.739-36.677,6.863c14.93,4.236,30.265,2.061,45.365,2.425 c7.82,0.187,15.486,1.928,23.337,1.903c2.602-0.008,6.644-0.984,9,0.468c-2.584,1.794-8.164,0.984-10.809,1.165 c-13.329,0.899-26.632,2.315-39.939,3.953c-6.761,0.834-13.413,0.95-20.204,0.938c-1.429-0.001-2.938-0.155-4.142,0.436 c5.065,4.68,15.128,2.853,20.742,2.904c11.342,0.104,22.689-0.081,34.035-0.081c9.067,0,20.104-2.412,29.014,0.643 c-4.061,4.239-12.383,3.389-17.056,4.292c-11.054,2.132-21.575,5.041-32.725,5.289c-5.591,0.124-11.278,1.001-16.824,2.088 c-4.515,0.885-9.461,0.823-13.881,2.301c2.302,3.186,7.315,2.59,10.13,2.694c15.753,0.588,31.413-0.231,47.097-2.172 c7.904-0.979,15.06,1.748,22.549,4.877c-12.278,4.992-25.996,4.737-38.58,5.989c-8.467,0.839-16.773,1.041-25.267,0.984 c-4.727-0.031-10.214-0.851-14.782,1.551c12.157,4.923,26.295,2.283,38.739,2.182c7.176-0.06,14.323,1.151,21.326,3.07 c-2.391,2.98-7.512,3.388-10.368,4.143c-8.208,2.165-16.487,3.686-24.71,5.709c-6.854,1.685-13.604,3.616-20.507,4.714 c-1.707,0.273-3.337,0.483-4.923,1.366c2.023,0.749,3.73,0.558,5.95,0.597c9.749,0.165,19.555,0.31,29.304-0.027 c15.334-0.528,30.422-4.721,45.782-4.653'],
            swirl: ['M49.346,46.341c-3.79-2.005,3.698-10.294,7.984-8.89 c8.713,2.852,4.352,20.922-4.901,20.269c-4.684-0.33-12.616-7.405-14.38-11.818c-2.375-5.938,7.208-11.688,11.624-13.837 c9.078-4.42,18.403-3.503,22.784,6.651c4.049,9.378,6.206,28.09-1.462,36.276c-7.091,7.567-24.673,2.277-32.357-1.079 c-11.474-5.01-24.54-19.124-21.738-32.758c3.958-19.263,28.856-28.248,46.044-23.244c20.693,6.025,22.012,36.268,16.246,52.826 c-5.267,15.118-17.03,26.26-33.603,21.938c-11.054-2.883-20.984-10.949-28.809-18.908C9.236,66.096,2.704,57.597,6.01,46.371 c3.059-10.385,12.719-20.155,20.892-26.604C40.809,8.788,58.615,1.851,75.058,12.031c9.289,5.749,16.787,16.361,18.284,27.262 c0.643,4.698,0.646,10.775-3.811,13.746'],
            diagonal: ['M16.053,91.059c0.435,0,0.739-0.256,0.914-0.768 c3.101-2.85,5.914-6.734,8.655-9.865C41.371,62.438,56.817,44.11,70.826,24.721c3.729-5.16,6.914-10.603,10.475-15.835 c0.389-0.572,0.785-1.131,1.377-1.521'],
            list: ['M1.986,8.91c41.704,4.081,83.952,5.822,125.737,2.867 c17.086-1.208,34.157-0.601,51.257-0.778c21.354-0.223,42.706-1.024,64.056-1.33c18.188-0.261,36.436,0.571,54.609,0.571', 'M3.954,25.923c9.888,0.045,19.725-0.905,29.602-1.432 c16.87-0.897,33.825-0.171,50.658-2.273c14.924-1.866,29.906-1.407,44.874-1.936c19.9-0.705,39.692-0.887,59.586,0.45 c35.896,2.407,71.665-1.062,107.539-1.188']
        },
        animDefs = {
            cross: {
                speed: .2,
                easing: 'ease-in-out'
            },
            fill: {
                speed: .8,
                easing: 'ease-in-out'
            },
            checkmark: {
                speed: .2,
                easing: 'ease-in-out'
            },
            circle: {
                speed: .2,
                easing: 'ease-in-out'
            },
            boxfill: {
                speed: .8,
                easing: 'ease-in'
            },
            swirl: {
                speed: .8,
                easing: 'ease-in'
            },
            diagonal: {
                speed: .2,
                easing: 'ease-in-out'
            },
            list: {
                speed: .3,
                easing: 'ease-in-out'
            }
        };

    function createSVGEl(def) {
        var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        if (def) {
            svg.setAttributeNS(null, 'viewBox', def.viewBox);
            svg.setAttributeNS(null, 'preserveAspectRatio', def.preserveAspectRatio);
        } else {
            svg.setAttributeNS(null, 'viewBox', '0 0 100 100');
        }
        svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        return svg;
    }

    function controlCheckbox(el, type, svgDef) {
        var svg = createSVGEl(svgDef);
        el.parentNode.appendChild(svg);

        el.addEventListener('change', function () {
            if (el.checked) {
                draw(el, type);
            } else {
                reset(el);
            }
        });
    }

    function controlRadiobox(el, type) {
        var svg = createSVGEl();
        el.parentNode.appendChild(svg);
        el.addEventListener('change', function () {
            resetRadio(el);
            draw(el, type);
        });
    }

    checkbxsCross.forEach(function (el, i) {
        controlCheckbox(el, 'cross');
    });
    radiobxsFill.forEach(function (el, i) {
        controlRadiobox(el, 'fill');
    });
    radiobxsFill2.forEach(function (el, i) {
        controlRadiobox(el, 'fill');
    });
    checkbxsCheckmark.forEach(function (el, i) {
        controlCheckbox(el, 'checkmark');
    });
    radiobxsCircle.forEach(function (el, i) {
        controlRadiobox(el, 'circle');
    });
    checkbxsBoxfill.forEach(function (el, i) {
        controlCheckbox(el, 'boxfill');
    });
    radiobxsSwirl.forEach(function (el, i) {
        controlRadiobox(el, 'swirl');
    });
    checkbxsDiagonal.forEach(function (el, i) {
        controlCheckbox(el, 'diagonal');
    });
    checkbxsList.forEach(function (el) {
        controlCheckbox(el, 'list', {
            viewBox: '0 0 300 100',
            preserveAspectRatio: 'none'
        });
    });

    function draw(el, type) {
        var paths = [],
            pathDef,
            animDef,
            svg = el.parentNode.querySelector('svg');

        switch (type) {
            case 'cross':
                pathDef = pathDefs.cross;
                animDef = animDefs.cross;
                break;
            case 'fill':
                pathDef = pathDefs.fill;
                animDef = animDefs.fill;
                break;
            case 'checkmark':
                pathDef = pathDefs.checkmark;
                animDef = animDefs.checkmark;
                break;
            case 'circle':
                pathDef = pathDefs.circle;
                animDef = animDefs.circle;
                break;
            case 'boxfill':
                pathDef = pathDefs.boxfill;
                animDef = animDefs.boxfill;
                break;
            case 'swirl':
                pathDef = pathDefs.swirl;
                animDef = animDefs.swirl;
                break;
            case 'diagonal':
                pathDef = pathDefs.diagonal;
                animDef = animDefs.diagonal;
                break;
            case 'list':
                pathDef = pathDefs.list;
                animDef = animDefs.list;
                break;
        };

        paths.push(document.createElementNS('http://www.w3.org/2000/svg', 'path'));

        if (type === 'cross' || type === 'list') {
            paths.push(document.createElementNS('http://www.w3.org/2000/svg', 'path'));
        }

        for (var i = 0, len = paths.length; i < len; ++i) {
            var path = paths[i];
            svg.appendChild(path);

            path.setAttributeNS(null, 'd', pathDef[i]);

            var length = path.getTotalLength();
            // Clear any previous transition
            //path.style.transition = path.style.WebkitTransition = path.style.MozTransition = 'none';
            // Set up the starting positions
            path.style.strokeDasharray = length + ' ' + length;
            if (i === 0) {
                path.style.strokeDashoffset = Math.floor(length) - 1;
            } else path.style.strokeDashoffset = length;
            // Trigger a layout so styles are calculated & the browser
            // picks up the starting position before animating
            path.getBoundingClientRect();
            // Define our transition
            path.style.transition = path.style.WebkitTransition = path.style.MozTransition = 'stroke-dashoffset ' + animDef.speed + 's ' + animDef.easing + ' ' + i * animDef.speed + 's';
            // Go!
            path.style.strokeDashoffset = '0';
        }
    }

    function reset(el) {
        Array.prototype.slice.call(el.parentNode.querySelectorAll('svg > path')).forEach(function (el) {
            el.parentNode.removeChild(el);
        });
    }

    function resetRadio(el) {
        Array.prototype.slice.call(document.querySelectorAll('input[type="radio"][name="' + el.getAttribute('name') + '"]')).forEach(function (el) {
            var path = el.parentNode.querySelector('svg > path');
            if (path) {
                path.parentNode.removeChild(path);
            }
        });
    }

}
// end of SVG magic checkboxes

function repaintMe() {
    $('.tile').not('.tile-project, .tile-stream').height($('.tile-small').width());
    $('.tile-project').equalizeHeights();
    $('.polaroidtext').equalizeHeights();
    $('.tile-obcasnik').equalizeHeights();
    $('.polaroid .image').height($('.polaroid .image').width());
    $('.pravica').height($('.pravica').width());
    $('.card-dolzni').each(function (i, e) {
        $(e).height($(e).width());
    });

    $('.tile-background').each(function (i, e) {
        $(e).css({
            'background-image': 'url(' + $(this).data('img') + ')'
        });
    });

    $('#menucontent').height($(window).height());

    $('#podpri').css('color', $('.footerlink').css('color'));

    $('#megavideo').height($(window).height()).width($(window).width());

    $('.obcasniktileimage, .dolzniimage').each(function (i, e) {
        $(e).css('background-image', 'url(' + $(e).data('img') + ')');
    });

    $('.projectnumber').width($('.projectnumbercontainer').width() - $('.projectnumbercontainer .arrow-project').width() - 15);

    if ($(window).width() < 992) {
        $('.tile-big').removeClass('tile-big').addClass('tile-small tile-big-disabled');
    } else {
        $('.tile-big-disabled').removeClass('tile-small tile-big-disabled').addClass('tile-big');
    }
}

langLinkMapping = {
    projects: 'projekti',
    people: 'krivi',
    support: 'dolzni',
    consensus: 'konsenz',
    formalities: 'formalnosti',
}

function onLanguageToggle() {
    var path = window.location.pathname;
    path = path.slice(4, path.indexOf('/', 4));
    if (path === '') {
        window.location.href = '/';
    } else if (langLinkMapping[path]) {
        window.location.href = '/' + langLinkMapping[path];
    } else {
        window.location.href = $(this).data('href');
    }
}

// document ready
$(document).ready(function () {

    $('.languagetoggle').on('click', function (event) {
        event.preventDefault();
        onLanguageToggle();
    });

    repaintMe();
    window.onresize = function () {
        repaintMe();
    }

    // agree with cookies
    $('.confirmcookies').on('click', function () {
        $('.cookiewarning').animate({
            'margin-left': 2000
        }, 500, function () {
            $('.cookiewarning').slideUp(200);
            window.updateConsent && window.updateConsent();
        });
    });
    // get more info about cookies
    $('.cookiemoreinfo').on('click', function () {
        window.open('/en/cookies/', '_blank');
    });
    // hide cookies banner if consented
    if (window.getConsent && window.getConsent()) {
        $('.cookiewarning').hide();
    }

    if (window.androidcheck()) {
        $('.polaroid .image').addClass('hover');
    }

    // ga za krivi
    $('.polaroid').on('hover', function () {
        ga('send', {
            'hitType': 'event',
            'eventCategory': 'krivi',
            'eventAction': 'hover',
            'eventLabel': $(this).children('.image').attr('id')
        });
    });

    $('.pravica').on('click', function () {

        // ga za pravice
        ga('send', {
            'hitType': 'event',
            'eventCategory': 'konsenz',
            'eventAction': $(this).data('href')
        });

        if ($('#' + $(this).data('href')).hasClass('open')) {
            $('.pravicatooltip').removeClass('open');
            $('.pravicaexpander').attr('style', '');
            $('.pravicatooltip')
                .removeClass('left')
                .removeClass('middle')
                .removeClass('right');
            $('.pravicacontent.open').removeClass('open');
        } else {
            if ($('.pravicatooltip').hasClass('open')) {
                $('.pravicatooltip').removeClass('open');
                $('.pravicaexpander').attr('style', '');
                $('.pravicatooltip').removeClass('left').removeClass('middle').removeClass('right');

                var thisy = $(this);
                window.setTimeout(function () {
                    $('.pravicacontent.open').removeClass('open');
                    $('#' + thisy.data('href')).addClass('open');
                    $('.pravicatooltip').css({
                        'top': thisy.offset().top + thisy.height() + 30,
                        'height': $('#' + thisy.data('href')).height() + 90
                    }).addClass('open').addClass(thisy.data('tooltip'));
                    thisy.next().css({
                        'height': $('#' + thisy.data('href')).height() + 110
                    });
                }, 500);
            } else {
                $('.pravicacontent.open').removeClass('open');
                $('#' + $(this).data('href')).addClass('open');
                $('.pravicatooltip').css({
                    'top': $(this).offset().top + $(this).height() + 30,
                    'height': $('#' + $(this).data('href')).height() + 90
                }).addClass('open').addClass($(this).data('tooltip'));
                $(this).next().css({
                    'height': $('#' + $(this).data('href')).height() + 110
                });
            }
        }
    });

    $('.tooltipclose').on('click', function () {
        $('.pravicatooltip').removeClass('open');
        $('.pravicaexpander').attr('style', '');
        $('.pravicatooltip').removeClass('left').removeClass('middle').removeClass('right');
    });

    $('.popupopen').on('click', function () {

        //        window.location.href = window.location.href + '#popup-' + $(this).data('href');

        $('.popup').height($(window).height());
        $('#' + $(this).data('href')).addClass('open');

        //        // ga za newsletter
        //        if ($(this).attr('id') === 'newsletter') {
        //            ga('send', {
        //                'hitType': 'event',
        //                'eventCategory': document.title,
        //                'eventAction': 'signup',
        //                'eventLabel': 'pravice',
        //                'eventValue': 1
        //            })
        //        }

        return false;
    });
    $('.tile-project').on('click', function () {

        // ga za projekte
        ga('send', {
            'hitType': 'event',
            'eventCategory': 'projekti_popup',
            'eventAction': $(this).attr('id'),
            'eventLabel': 'globina',
            'eventValue': 0
        });

        $('.popup').height($(window).height());
        $('#' + $(this).data('href')).addClass('open');
        window.location.hash = 'popup-' + $(this).data('href');
        return false;
    });

    $('.popupclose, .btn-zapri').on('click', function () {
        $('.popup').removeClass('open');
        var scr = document.body.scrollTop;
        window.location.hash = "";
        document.body.scrollTop = scr;
    });

    $('.btn-projekt').on('click', function () {
        ga('send', {
            'hitType': 'event',
            'eventCategory': 'projekti_popup',
            'eventAction': $(this).parents('.popup-projekt').attr('id').split('info')[0],
            'eventLabel': 'globina',
            'eventValue': 1
        });
    });

    //social
    $('.social, .btn-projekt').on('click', function () {

        switch ($(this).data('href')) {
            case 'https://www.facebook.com/danesjenovdan':
                ga('send', {
                    'hitType': 'event',
                    'eventCategory': document.title,
                    'eventAction': 'footer_click',
                    'eventLabel': 'facebook'
                });
                break;
            case 'https://twitter.com/danesjenovdan':
                ga('send', {
                    'hitType': 'event',
                    'eventCategory': document.title,
                    'eventAction': 'footer_click',
                    'eventLabel': 'twitter'
                });
                break;
            case 'https://github.com/danesjenovdan':
                ga('send', {
                    'hitType': 'event',
                    'eventCategory': document.title,
                    'eventAction': 'footer_click',
                    'eventLabel': 'github'
                });
                break;
            case 'https://vimeo.com/user26914674':
                ga('send', {
                    'hitType': 'event',
                    'eventCategory': document.title,
                    'eventAction': 'footer_click',
                    'eventLabel': 'vimeo'
                });
                break;
            case 'https://www.youtube.com/channel/UCWMqx3p_QtWjdDRq58Hfh_w':
                ga('send', {
                    'hitType': 'event',
                    'eventCategory': document.title,
                    'eventAction': 'footer_click',
                    'eventLabel': 'youtube'
                });
                break;
            case 'https://agrument.danesjenovdan.si/rss/':
                ga('send', {
                    'hitType': 'event',
                    'eventCategory': document.title,
                    'eventAction': 'footer_click',
                    'eventLabel': 'agrument_rss'
                });
                break;
        }

        window.open($(this).data('href'), '_blank')
    });
    $('.fb').on('click', function () {

        ga('send', {
            'hitType': 'event',
            'eventCategory': 'obcasnik',
            'eventAction': 'share',
            'eventLabel': 'facebook'
        });

        url = 'https://www.facebook.com/dialog/share?app_id=301375193309601&display=popup&href=' + encodeURIComponent(window.location.href) + '&redirect_uri=' + encodeURIComponent(window.location.href) + '&ref=responsive';
        window.open(url, '_blank');
        return false;
    });
    $('.tw').on('click', function () {

        ga('send', {
            'hitType': 'event',
            'eventCategory': 'obcasnik',
            'eventAction': 'share',
            'eventLabel': 'twitter'
        });

        url = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(document.title + ' ' + window.location.href);
        window.open(url, '_blank');
        return false;
    });
    $('.gp').on('click', function () {
        url = 'https://plus.google.com/share?url=' + document.title + ' ' + encodeURIComponent(window.location.href);
        window.open(url, '_blank');
        ga('send', 'event', 'social', 'gplus');
        return false;

        ga('send', {
            'hitType': 'event',
            'eventCategory': 'obcasnik',
            'eventAction': 'share',
            'eventLabel': 'google_plus'
        });

    });

    $('.tile').not('.tile-obcasnik-full, .tile-project, #tile-video, .tile-stream, .tile-nolink').on('click', function () {
        if (!$(this).data('target')) {
            window.location.href = $(this).data('href');
        } else {
            window.open($(this).data('href'), '_blank')
        }
    });

    $('#menu').on('click', function () {
        $('#obcasnik').animate({
            'top': '-82px'
        }, 200);
        $('#menu').animate({
            'top': -50
        }, 200, function () {
            $('body').css('overflow-x', 'hidden');
            $('.container-fluid').animate({
                'left': 250
            }, 400);

            $('.arrow-obcasnik-right, .arrow-obcasnik-left').animate({
                'opacity': 0
            }, 400);

            $('#menucontent').animate({
                'left': 0
            }, 400);
        });

    });
    $('#menutitleback, #menutitle').on('click', function () {
        ga('send', {
            'hitType': 'event',
            'eventCategory': 'menu',
            'eventAction': document.title,
            'eventLabel': 'landing'
        });

        window.location.href = '/en/'
    });

    $('#menuclose').on('click', function () {
        $('.container-fluid').animate({
            'left': 0
        }, 400);

        $('.arrow-obcasnik-right, .arrow-obcasnik-left').animate({
            'opacity': 1
        }, 400);

        $('#menucontent').animate({
            'left': -250
        }, 400, function () {
            $('body').css('overflow-x', 'auto');
            $('#menu').animate({
                'top': 0
            }, 200);
            $('#obcasnik').animate({
                'top': '-32px'
            }, 200);
        });

    });
    $('.menuitem-agrument').on('click', function () {
        var _this = $(this);
        $('.container-fluid').animate({
            'left': 0
        }, 400);
        $('#menucontent').animate({
            'left': -250
        }, 400, function () {
            $('#menu, #obcasnik').animate({
                'top': 0
            }, 200);
            //                $('html, body').animate({
            //                    'scrollTop': $('#footer').offset().top
            //                }, 500);


            ga('send', {
                'hitType': 'event',
                'eventCategory': 'menu',
                'eventAction': document.title,
                'eventLabel': _this.data('menu')
            });

            window.location.href = 'https://agrument.danesjenovdan.si/';
        });
    });
    $('.menuitem').not('menuitem-agrument').on('click', function () {
        var _this = $(this);
        $('.container-fluid').animate({
            'left': 0
        }, 400);
        $('#menucontent').animate({
            'left': -250
        }, 400, function () {
            $('#menu, #obcasnik').animate({
                'top': 0
            }, 200);
            //                $('html, body').animate({
            //                    'scrollTop': $('#footer').offset().top
            //                }, 500);

            if (window.location.href.indexOf(_this.data('menu')) === -1) {

                ga('send', {
                    'hitType': 'event',
                    'eventCategory': 'menu',
                    'eventAction': document.title,
                    'eventLabel': _this.data('menu')
                });

                window.location.href = '/en/' + _this.data('menu');
            } else {
                $('#menu, #obcasnik').animate({
                    'top': 0
                }, 200);
            }
        });
    });

    $('#submitemail').on('click', function () {
        if ($('.hider').hasClass('open')) {
            ga('send', {
                'hitType': 'event',
                'eventCategory': document.title,
                'eventAction': 'signup',
                'eventLabel': 'pravice',
                'eventValue': 1
            });
        } else {
            ga('send', {
                'hitType': 'event',
                'eventCategory': document.title,
                'eventAction': 'signup',
                'eventLabel': 'pravice',
                'eventValue': 0
            });
        }
        $.post('https://hooks.slack.com/services/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',
            JSON.stringify({
                'text': 'Yo @channel! Nekdo se je sign-upal na newsletter.',
                'attachments': [
                    {
                        'fallback': 'Your client is stupid, go vote.',
                        'color': 'good',
                        'parse': 'full',
                        'fields': [
                            {
                                'title': $('#newsletteremail').val(),
                                'value': 'Podpis? ' + $('#dodajme').val(),
                                'short': false
                            }
                        ]
                    }
                ]
            }), function (r) {
                startConfetti();
                window.setTimeout(function () {
                    $('#submitemail').parents('.popup').removeClass('open');
                }, 100)
                console.log(r);
            });
        return false;
    });

    $('#podpri').on('click', function () {

        ga('send', {
            'hitType': 'event',
            'eventCategory': document.title,
            'eventAction': 'footer_click',
            'eventLabel': 'podpri_nas'
        });

        window.location.href = '/en/support/'
    });

    $('#izkaznica > a').on('click', function () {
        ga('send', {
            'hitType': 'event',
            'eventCategory': document.title,
            'eventAction': 'footer_click',
            'eventLabel': 'formalnosti'
        });
    });

    $('.tab').on('click', function () {

        // ga za filtriranje krivi
        ga('send', {
            'hitType': 'event',
            'eventCategory': 'krivi',
            'eventAction': 'filter',
            'eventLabel': $(this).data('href')
        });

        if ($(this).hasClass('selected')) {
            return false;
        } else {
            if ($(this).data('href') == 'all') {
                $('.polaroid').parent().show();
            } else {
                $('.polaroid').parent().not('.' + $(this).data('href')).hide();
                $('.' + $(this).data('href')).show();
            }
            $('.selected').removeClass('selected');
            $(this).addClass('selected');
            return false;
        }
    });

    $('#polaroidti').on('click', function () {
        window.location.href = $(this).data('href');
    });

    $('.harmonikatitle').on('click', function () {
        if (!$(this).parent().parent().next().children().children('.harmonikacontent').hasClass('open')) {
            $(this).parent().parent().next().children().children('.harmonikacontent').addClass('open');
            $(this).addClass('open');
        } else {
            $(this).parent().parent().next().children().children('.harmonikacontent').removeClass('open');
            $(this).removeClass('open');
        }
        return false;
    });

    $('#moresupporters').on('click', function () {
        if (!$(this).hasClass('open')) {
            $(this).addClass('open');
            $('#podporniki').append(podpisniki);
        } else {
            $(this).removeClass('open');
            $('#podporniki').text($('#podporniki').text().split(podpisniki)[0]);
        }
    });

    $('#btn-pravica-video, #tile-video').on('click', function () {

        // ga za pravica video
        ga('send', {
            'hitType': 'event',
            'eventCategory': 'konsenz',
            'eventAction': 'video_pravice'
        });

        $('#megavideo').addClass('open');
        player.api('play');
    });

    $(document).on('keyup', function (e) {
        if (e.keyCode == 27) { // 27 == ESC key
            if ($('#megavideo').length) {
                $('#megavideo').removeClass('open');
                player.api('pause');
            }
            $('.popup').removeClass('open');
            var scr = document.body.scrollTop;
            window.location.hash = "";
            document.body.scrollTop = scr;
        }
    });

    window.addEventListener("hashchange", function (e) {
        if (window.location.hash.indexOf("#popup-") === 0) {
            var id = window.location.hash.slice(7);
            $('.popup').removeClass('open');
            $('#' + id + '.popup').addClass("open");
        }
    }, false);

    $('#submitsignature').on('click', function () {
        if ($('#signatureemail').val() != '') {
            $('#podpisipravice').parent().height($('#podpisipravice').parent().height());
            $.get('https://spam.djnd.si/deliver-email/?email=' + $('#signatureemail').val(), function(r) {
                if (r === '1') {
                    ga('send', {
                        'hitType': 'event',
                        'eventCategory': 'gdpr',
                        'eventAction': 'deliver-email-konsenz'
                    });
                    $('#hvalapravice').html('<br>Hvala!<br><br>Na ta e-naslov ti bomo poslali personalizirano povezavo do spletne strani za urejanje nastavitev.');
                    $('#podpisipravice').slideUp(500, function () {
                        $('#hvalapravice').slideDown();
                    });
                } else {
                    ga('send', {
                        'hitType': 'event',
                        'eventCategory': 'gdpr',
                        'eventAction': 'deliver-email-error'
                    });
                    alert('There was an error :(');
                }
            });
        } else {
            $('form').shake();
        }
        return false;
    });

    // refresh form konsenz
    $('.hvalapravicerefresh').on('click', function () {
        $('#podpisipravice input').val('');
        $('#hvalapravice').slideUp(500, function () {
            $('#podpisipravice').slideDown();
        });

        return false;
    });

    $.get('https://agrument.danesjenovdan.si/getwordcount/', function (r) {
        $('#agrument .projectnumbernumber').text(r);
    });

    $.get('https://agrument.danesjenovdan.si/getlastagrument/', function (r) {
        $('#lastagrument').children('.agrumenttitle').text(r);
    });

    if ($(window).width() > 991) {
        $.get('https://agrument.danesjenovdan.si/getlastagrumenttextsmall/', function (r) {
            $('#lastagrument').children('.agrumenttitle').after(r);
            $('#lastagrument .agrumenttitle + p').addClass('tiletext');
        })
    }

    $('.arrow-obcasnik-left, .arrow-obcasnik-right, #sendemail').not('.nextproject, .previousproject').on('click', function () {
        window.location.href = $(this).data('href');
    });

    // listanje med projekti
    $('.nextproject').on('click', function () {
        var popup = $('.popup.open');

        popup.removeClass('open');

        window.setTimeout(function () {
            popup.next().addClass('open');
            window.location.hash = "popup-" + popup.next().attr('id');
        }, 500);
    });
    $('.previousproject').on('click', function () {
        var popup = $('.popup.open');

        popup.removeClass('open');

        window.setTimeout(function () {
            popup.prev().addClass('open');
            window.location.hash = "popup-" + popup.prev().attr('id');
        }, 500);

        return false;
    });

    // obcasnik title magic
    var titlevisible = false;
    $(window).scroll(function () {
        if (!titlevisible) {
            if ($(document).scrollTop() > 190) {
                titlevisible = true;
                $('.obcasnikbigtitle, .obcasniksmalltitle').animate({
                    'opacity': 1
                }, 500);
            }
        } else {
            if ($(document).scrollTop() < 190) {
                titlevisible = false;
                $('.obcasnikbigtitle, .obcasniksmalltitle').animate({
                    'opacity': 0
                });
            }
        }
    });

    // open popup
    if (window.location.href.indexOf('#popup-') != '') {
        $('.popup').height($(window).height());
        $('#' + window.location.href.split('#popup-')[1]).addClass('open');
    }

    // newsletter show name/lastname
    $('#dodajme').on('click', function () {
        if (!$('.hider').hasClass('open')) {
            $('#signup .hider').addClass('open');
            $('#submitemail').text('Oddaj in podpiši!');
        } else {
            $('#signup .hider').removeClass('open');
            $('#submitemail').text('Submit!');
        }
    });
    // newsletter android fix
    if (true) { // (window.androidcheck()) {
        $('#newslettername').on('focus', function () {
            window.setTimeout(function () {
                $('.popup.open').animate({
                    'padding-bottom': '+=200px',
                    'scrollTop': 200
                }, 500);
            }, 700);
        });
        $('#newslettername').on('blur', function () {
            $('.popup.open').animate({
                'padding-bottom': '-=200px',
                'scrollTop': 0
            }, 500);
        });
    }

    // documents
    $('#akt').on('click', function () {
        window.open('./dokumenti/Akt%20o%20ustanovitvi.pdf', '_blank');
    });
    $('#statut').on('click', function () {
        window.open('./dokumenti/Statut.pdf', '_blank');
    });
    $('#letno2013').on('click', function () {
        window.open('./dokumenti/2013/Letno%20porocilo%202013.pdf', '_blank');
    });
    $('#poslovno2013').on('click', function () {
        window.open('./dokumenti/2013/Poslovno%20porocilo%202013.pdf', '_blank');
    });
    $('#poslovno2014').on('click', function () {
        window.open('./dokumenti/2014/Poslovno%20porocilo%202014.pdf', '_blank');
    });
    $('#poslovno2015').on('click', function () {
        window.open('./dokumenti/2015/Poslovno%20porocilo%202015.pdf', '_blank');
    });
    $('#poslovno2016').on('click', function () {
        window.open('./dokumenti/2016/Poslovno%20porocilo%202016.pdf', '_blank');
    });
    $('#poslovno2017').on('click', function () {
        window.open('/formalnosti/dokumenti/2017/Poslovno%20porocilo%202017.pdf', '_blank');
    });


    // dolzni popups across the site
    $('.dajmiredno').on('click', function () {
        window.open('/dolzni/#popup-velikaplacapopup', '_blank');
    });
    $('.dajmienkrat').on('click', function () {
        window.open('/dolzni/#popup-velikosrcepopup', '_blank');
    });
    $('.dajminaturalije').on('click', function () {
        window.open('/dolzni/#popup-naturalijepopup', '_blank');
    });
    $('.dajmirizle').on('click', function () {
        window.open('/dolzni/#popup-rizlepopup', '_blank');
    });
    $('.dajmimajico').on('click', function () {
        window.open('/dolzni/#popup-majicapopup', '_blank');
    });

    // fancybox
    // fancybox
    $('.fancyboxtab').on('click', function () {
        if (!$(this).hasClass('active')) {
            // hide old
            $('.content-' + $('.fancyboxcontent').data('order-1')).addClass('hidden');

            // show new
            $('.content-' + $(this).data('order')).removeClass('hidden');
            $('.content-' + $(this).data('order')).children().addClass('hidden');
            $($('.content-' + $(this).data('order')).children()[0]).removeClass('hidden');

            // update title
            $('.fancyboxtitle').text($('.content-' + $(this).data('order') + '-1').data('title'));

            // update state
            $('.fancyboxcontent').data('order-2', 1);
            $('.fancyboxcontent').data('order-1', $(this).data('order'));


            $('.fancyboxtab.active').removeClass('active');
            $(this).addClass('active');
        }
    });

});

// podpisniki
var podpisniki = '';

// confetti
// Modified from https://code.google.com/p/pamelafox-samplecode/ (r343).
// The original code is under the Apache 2.0 license.
// http://opensource.org/licenses/Apache-2.0

var CONFETTIS_PER_SHAKE = 80;
var MAX_CONFETTIS = 81;

function startConfetti() {
    if (window.currentConfettis >= MAX_CONFETTIS)
        return;

    var confettiElements = [];
    for (var i = 0; i < CONFETTIS_PER_SHAKE; i++) {
        var confettiElement = makeConfetti(!i);
        document.body.appendChild(confettiElement);
        confettiElements[i] = confettiElement;
    }
    window.currentConfettis += CONFETTIS_PER_SHAKE;
    setTimeout(removeConfettis, 12 * 1000, confettiElements);
}

function removeConfettis(confettiElements) {
    window.currentConfettis -= CONFETTIS_PER_SHAKE;

    for (var i = 0; i < CONFETTIS_PER_SHAKE; ++i) {
        document.body.removeChild(confettiElements[i]);
    }
    confettiElements = 0;
}

/*
  Receives the lowest and highest values of a range and
  returns a random integer that falls within that range.
*/
function randomInteger(low, high) {
    return low + Math.floor(Math.random() * (high - low + 1));
}

/*
   Receives the lowest and highest values of a range and
   returns a random float that falls within that range.
*/
function randomFloat(low, high) {
    return low + Math.random() * (high - low);
}

function randomItem(items) {
    return items[randomInteger(0, items.length - 1)]
}

/* Returns a duration value for the falling animation.*/
function durationValue(value) {
    return value + 's';
}

function makeConfetti(is_first) {
    var confettis = ['2726', '2736', '2665', '25CF', '25AA', '25B4', '2605'];
    var colors = ['#ccac55', '#e4d2a3', '#467871', '#704a45', '#1d7373', '#c2d8d8', '#6ba8a0', '#e3c3bf', '#704a45', '#dd786b', '#ccac55'];
    var sizes = ['tiny', 'tiny', 'small', 'small', 'small', 'small', 'medium', 'medium', 'medium', 'medium', 'medium', 'medium', 'medium', 'medium'];

    /* Start by creating a wrapper div, and an empty span  */
    var confettiElement = document.createElement('div');
    confettiElement.className = 'confetti ' + randomItem(sizes);

    var confetti = document.createElement('span');
    confetti.innerHTML = '&#x' + randomItem(confettis) + ';';
    confetti.style.color = randomItem(colors);

    confettiElement.appendChild(confetti);

    /* Randomly choose a side to anchor to, keeps the middle more dense and fits liquid layout */
    var anchorSide = (Math.random() < 0.5) ? 'left' : 'right';

    /* Figure out a random duration for the fade and drop animations */
    var fadeAndDropDuration = durationValue(randomFloat(1, 4));

    // how long to wait before the confettis arrive
    var confettiDelay = is_first ? 0 : durationValue(0);

    confettiElement.style.webkitAnimationName = 'fade, drop';
    confettiElement.style.webkitAnimationDuration = fadeAndDropDuration + ',' + fadeAndDropDuration;
    confettiElement.style.webkitAnimationDelay = confettiDelay;

    /* Position the confetti at a random location along the screen, anchored to either the left or the right*/
    confettiElement.style[anchorSide] = randomInteger(5, 80) + '%';

    var jitterNames = ['jitterA', 'jitterB', 'jitterC', 'jitterD'];
    var spinAnimationName = randomItem(jitterNames);
    var spinDuration = durationValue(randomFloat(2, 4));

    confetti.style.webkitAnimationName = spinAnimationName;
    confetti.style.webkitAnimationDuration = spinDuration;
    confetti.style.webkitAnimationDelay = confettiDelay + 2;

    /* Return this confetti element so it can be added to the document */
    return confettiElement;
}
window.currentConfettis = 0;

// vimeo
if (window.$f) {
    player = $f($('#thevideo')[0]);
    player.addEvent('ready', function () {
        player.addEvent('pause', onPause);
        console.log(player);
    });

    function onPause(id) {
        $('#megavideo').removeClass('open');
        $('.popup').removeClass('open');
    }
}




// SLACK API
function postToSlack(text, title, value, callback) {
    $.post('https://hooks.slack.com/services/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',
        JSON.stringify({
            'text': text,
            'attachments': [
                {
                    'fallback': 'Your client is stupid, check it out on the web.',
                    'color': 'good',
                    'parse': 'full',
                    'fields': [
                        {
                            'title': title,
                            'value': value,
                            'short': false
                        }
                    ]
                }
            ]
        }),
        function (r) {
            callback();
        });
}

$('.js-ahmad-counter').load('https://api.djnd.si/getNumberOfSignatures/?peticija=ahmad');

$.getJSON('https://api.djnd.si/getKuraSignatures/', function(r) {
  $('.js-kura-counter').text(r.counter);
});

$('[data-href="signup"]').on('click', function() {
    window.location.href = '/jaz/';
});
