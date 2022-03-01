jQuery(window).load(function() {
	
	//Menu Bar
    $(".os-menubar #nav > li > a").click(function (e) { // binding onclick
        if ($(this).parent().hasClass('selected')) {
            $(".os-menubar #nav .selected div div").slideUp(100); // hiding popups
            $(".os-menubar #nav .selected").removeClass("selected");
        } else {
            $(".os-menubar #nav .selected div div").slideUp(100); // hiding popups
            $(".os-menubar #nav .selected").removeClass("selected");
            if ($(this).next(".subs").length) {
                $(this).parent().addClass("selected"); // display popup
                $(this).next(".subs").children().slideDown(200);
            }
        }
        e.stopPropagation();
    });
    $("body").click(function () { // binding onclick to body
        $(".os-menubar #nav .selected div div").slideUp(100); // hiding popups
        $(".os-menubar #nav .selected").removeClass("selected");
    });

	//Date and Time
            var a = new Date();
            var days = new Array(7);
            days[0] = "SUN";
            days[1] = "MON";
            days[2] = "TUE";
            days[3] = "WED";
            days[4] = "THU";
            days[5] = "FRI";
            days[6] = "SAT";
            var r = days[a.getDay()];
            document.getElementById("date-wrapper").innerHTML = r;

});
setInterval(function() {
            var date = new Date();
            $('#clock-wrapper').html(
                ('0' + date.getHours()).slice(-2) + ":" + ('0' + date.getMinutes()).slice(-2) + ":" + ('0' + date.getSeconds()).slice(-2)
            );
        }, 500);
function toggleFullScreen(){if(!document.fullscreenElement&&!document.mozFullScreenElement&&!document.webkitFullscreenElement&&!document.msFullscreenElement){if(document.documentElement.requestFullscreen){document.documentElement.requestFullscreen()}else if(document.documentElement.msRequestFullscreen){document.documentElement.msRequestFullscreen()}else if(document.documentElement.mozRequestFullScreen){document.documentElement.mozRequestFullScreen()}else if(document.documentElement.webkitRequestFullscreen){document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)}}else{if(document.exitFullscreen){document.exitFullscreen()}else if(document.msExitFullscreen){document.msExitFullscreen()}else if(document.mozCancelFullScreen){document.mozCancelFullScreen()}else if(document.webkitExitFullscreen){document.webkitExitFullscreen()}}}	
$(document).ready(function() {
  
  $('#desktop-screen .icon').draggable({
    containment: 'parent',
    opacity: 0.7,
    helper: 'clone',
    scroll: false,
    start: function() {
      $(this).addClass('dragging')
    },
    stop: function(event, ui) {
      $(this).removeClass('dragging');
      $(this).css("top",ui.position.top).css("left",ui.position.left);
    }
  });
  $('#trash').droppable({
    accept: '#desktop-screen .icon',
    drop: function( event, ui ) {
      ui.draggable.remove();
      $(this).removeClass('trash-empty').addClass('trash');
    },
    hoverClass: 'drop-hover'
  });
  $('#desktop-screen .icon').click(function() {
    $('#desktop-screen .icon').removeClass('clicked');
    $(this).addClass('clicked');
  });
  $('#desktop-screen').click(function(e) {
    if(e.target !== this) {
      return;
    }
    $('#desktop-screen .icon').removeClass('clicked');
  });
  
});