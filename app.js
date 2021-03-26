//setup
$.window.prepare({
    dock: 'bottom',       // change the dock direction: 'left', 'right', 'top', 'bottom'
    //dockArea: $('#MinimizerBar'), // set the dock area
    animationSpeed: 200,  // set animation speed
    minWinLong: 180,       // set minimized window long dimension width in pixel
	maxWidth: 600,
   maxHeight: 500,
   checkBoundary: true,
 });
 
 function PuffTunes() {
$("#wrapper").window({
   maximizable: false,
   icon: "http://www.fstoke.me/favicon.ico",
   title: "Professional JavaScript for Web Developers",
   checkBoundary: true,
   content: $("#CreditsWindow").html(), // load window_block2 html content
});
}
// assign the dock area

//load menubar
//$(document).ready(function(){
//    $('.menubar').load('menubar.html');
//    $.getScript("js/jquery.menu.js");
//});


//app

function PuffTunes() {
$("#wrapper").window({
   maximizable: false,
   icon: "http://www.fstoke.me/favicon.ico",
   title: "Professional JavaScript for Web Developers",
   checkBoundary: true,
   content: $("#CreditsWindow").html(), // load window_block2 html content
});
}

function CreditsDialog() {
$.window({
   maximizable: false,
   icon: "http://www.fstoke.me/favicon.ico",
   title: "Professional JavaScript for Web Developers",
   content: $("#CreditsWindow").html(), // load window_block2 html content
});
}

function createWindow() {
    $.window({
        showModal: false,
        modalOpacity: 0.5,
        icon: "http://www.google.com/favicon.ico",
        title: "Hello World!",
        content: "<h1>Hello World!</h1>",
        footerContent: "<div style='color:gray;'>this is the footer</div>",
    });
}
function ShutdownDialog() {
  $.window({
   icon: "http://www.fstoke.me/favicon.ico",
   title: "Professional JavaScript for Web Developers",
   content: $("#ShutdwnDialog").html(),
   minWidth: 100,
   minHeight: 100,
   resizable: false,
   maximizable: false,
   minimizable: false,
   headerClass: "shut_header",
});
}

function window1jq(){
    $.window({
        title: "Cyclops Studio",
        url: "http://apps.fstoke.me/",
        bookmarkable: true,
        showFooter: false,
    });
};

function ecommerce(){
    $.window({
        title: "Cyclops Studio",
        url: "http://apps.fstoke.me/",
        bookmarkable: true,
        showFooter: false,
    });
};

function window1th(){
    $.window({
        title: "create window with customized icon buttons",
        content: '<div style="padding:10px;">'+
       '<div id="demo_text" style="font-size:24px;">You can share something here...</div>'+
       '<img id="demo_logo" src="" alt="">'+
       "</div>",
        custBtns: myButtons,
        bookmarkable: true,
        maximizable: false,
        resizable: true,
        width: 280,
        height: 340,
    });
}
 
var myButtons = [
    // facebook button
    {
    id: "btn_facebook",           // required, it must be unique in this array data
    title: "share to facebook",   // optional, it will popup a tooltip by browser while mouse cursor over it
    clazz: "my_button",           // optional, don't set border, padding, margin or any style which will change element position or size
    style: "",                    // optional, don't set border, padding, margin or any style which will change element position or size
    image: "img/facebook.gif",    // required, the url of button icon(16x16 pixels)
    callback:                     // required, the callback function while click it
       function(btn, wnd) {
          wnd.getContainer().find("#demo_text").text("Share to facebook!");
          wnd.getContainer().find("#demo_logo").attr("src", "img/facebook_300x100.png");
       }
    },
    // twitter button
    {
    id: "btn_twitter",
    title: "share to twitter",
    clazz: "my_button",
    style: "background:#eee;",
    image: "img/twitter.png",
    callback:
       function(btn, wnd) {alert("Hello! I am an alert box!!");
       }
    }
 ];

 function newnewnew(){
    $.window({
        showModal: true,
        modalOpacity: 0.5,
        icon: "http://www.fstoke.me/favicon.ico",
        title: "Professional JavaScript for Web Developers",
        content: $("#window_block2").html(), // load window_block2 html content
        footerContent: "<img style='vertical-align:middle;'' src='img/star.png'> This is a nice plugin :^)",
        
     });
    }