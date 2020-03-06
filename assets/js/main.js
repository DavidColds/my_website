function validateForm() {
    var n = document.getElementById('name').value;
    var e = document.getElementById('email').value;
    var s = document.getElementById('subject').value;
    var m = document.getElementById('message').value;
    var onlyLetters = /^[a-zA-Z\s]*$/;
    var onlyEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    if (n == "" || n == null) {
        document.getElementById('nameLabel').innerHTML = ('Please enter your name');
        document.getElementById('name').style.borderColor = "red";
        return false;
    }


    if (!n.match(onlyLetters)) {
        document.getElementById('nameLabel').innerHTML = ('Please enter only letters');
        document.getElementById('name').style.borderColor = "red";
        return false;
    }

    if (e == "" || e == null) {
        document.getElementById('emailLabel').innerHTML = ('Please enter your email');
        document.getElementById('email').style.borderColor = "red";
        return false;
    }

    if (!e.match(onlyEmail)) {
        document.getElementById('emailLabel').innerHTML = ('Please enter a valid email address');
        document.getElementById('email').style.borderColor = "red";
        return false;
    }

    if (s == "" || s == null) {
        document.getElementById('subjectLabel').innerHTML = ('Please enter your subject');
        document.getElementById('subject').style.borderColor = "red";
        return false;
    }

    if (!s.match(onlyLetters)) {
        document.getElementById('subjectLabel').innerHTML = ('Please enter only letters');
        document.getElementById('subject').style.borderColor = "red";
        return false;
    }

    if (m == "" || m == null) {
        document.getElementById('messageLabel').innerHTML = ('Please enter your message');
        document.getElementById('message').style.borderColor = "red";
        return false;
    } else {
        return true;
    }

}




var dummyContent = $('.dummy-content').children(),
    i;


$('#add-content').click(function (e) {
    e.preventDefault();

    if ($(dummyContent[0]).is(":visible")) {
        for (i = 0; i < dummyContent.length; i++) {
            $(dummyContent[i]).fadeOut(600);
        }
    } else {
        for (i = 0; i < dummyContent.length; i++) {
            $(dummyContent[i]).delay(600 * i).fadeIn(600);
        }
    }

});



var $content = $('header .content')
, $blur    = $('header .overlay')
, wHeight  = $(window).height();

$(window).on('resize', function(){
wHeight = $(window).height();
});

window.requestAnimFrame = (function()
{
return  window.requestAnimationFrame       ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        function( callback ){
          window.setTimeout(callback, 1000 / 60);
        };
})();

function Scroller()
{
this.latestKnownScrollY = 0;
this.ticking            = false;
}

Scroller.prototype = {

init: function() {
  window.addEventListener('scroll', this.onScroll.bind(this), false);
  $blur.css('background-image',$('header:first-of-type').css('background-image'));
},


onScroll: function() {
  this.latestKnownScrollY = window.scrollY;
  this.requestTick();
},


requestTick: function() {
  if( !this.ticking ) {
    window.requestAnimFrame(this.update.bind(this));
  }
  this.ticking = true;
},

update: function() {
  var currentScrollY = this.latestKnownScrollY;
  this.ticking       = false;
  
  
  var slowScroll = currentScrollY / 2
    , blurScroll = currentScrollY * 2
    , opaScroll = 1.4 - currentScrollY / 400;
 if(currentScrollY > wHeight)
   $('nav').css('position','fixed');
 else
   $('nav').css('position','absolute');
  
  $content.css({
    'transform'         : 'translateY(' + slowScroll + 'px)',
    '-moz-transform'    : 'translateY(' + slowScroll + 'px)',
    '-webkit-transform' : 'translateY(' + slowScroll + 'px)',
    'opacity' : opaScroll
  });
  
  $blur.css({
    'opacity' : blurScroll / wHeight
  });
}
};


var scroller = new Scroller();  
scroller.init();



$(function() {
  $('.scroll-down').click (function() {
    $('html, body').animate({scrollTop: $('section.ok').offset().top }, 'slow');
    return false;
  });
});


  