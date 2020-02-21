


(function($) {
  $(document).ready(function() {

    // var introText = new TimelineLite, 
    // mySplitText = new SplitText("#introLineOne", {type:"words,chars"}), 
    // chars = mySplitText.chars; //an array of all the divs that wrap each character

   

  var $arrayOfText = [];

  // var textContent = $('#introText');
  // $arrayOfText.push(textContent.children(0).find('span'));  
  // for(var i = 0; textContent.find('h2').length > i; i++ ) {
  //     var current = $('#line' + i);

  //     for(var e = 0; current.find('span').length > e; e++) {
  //       $arrayOfText.push(current.children(e));
  //     }
      
  // }
  // var lineOne = $('#line0');
  // for(var i = 0; i < lineOne.children().length; i++ ) {
  //     // var $current[i];
  //     console.log($('#line0 span'));

  // }
       

    function setupSite() {

    };    

    function setupIntro() {

      var $introContainer = $('.intro-module');
      var $text = $('#introText');
      var $arrow = $('.intro-module .arrow');
   

      $( "#line0 span" ).each(function() {
        $arrayOfText.push($(this));
      });
      $( "#line1 span" ).each(function() {
        $arrayOfText.push($(this));
      });
      $( "#line2 span" ).each(function() {
        $arrayOfText.push($(this));
      });

      
       var introA = new TimelineMax({delay:0.4, repeat:0,  });
           introA.to($introContainer, 0.3, {
            className: '+=part-2',
           })
           // .to($text, 0.4, {
           //  height: "auto",
           // })
          .staggerTo($arrayOfText, 0.7, {
             opacity: 1,
             ease: Power2.easeInOut,
            
          }, 0.2)
          .to($arrow, 0.2, {
            opacity: 1,
          });

          var introB = new TimelineMax({delay:0.65, repeat:0,  });
          introB.staggerTo($arrayOfText, 0.6, {
             ease: Power3.easeInOut,
             y: 0,
          }, 0.2)
        
    };   
      
   



    var activeMenu = false;
    function menuChange() {
      activeMenu = false;
    }

    function menuAnimation(r) {
      var $menuLeftItem = $('.menu-container .left-container'); 
      var $menuMiddleItem = $('.menu-container .center-container'); 
      var $menuRightItem = $('.menu-container .right-container'); 
      var $closeButton = $('.menu-container .close-menu-button'); 
    

      var openMenu = new TimelineMax({delay: 0.1, repeat:0, paused: true, onComplete:menuChange });
         openMenu.to($menuLeftItem, 0.8, {
          y: 0,
          ease: Power3.easeInOut,
         }, 0.3)
         .to($menuLeftItem, 1, {
          opacity: 1,
          ease: Power3.easeInOut,
         }, 0.4)
        .to($menuMiddleItem, 0.8, {
          y: 0,
          ease: Power3.easeInOut,
         }, 0.6)
         .to($menuMiddleItem, 1, {
          opacity: 1,
          ease: Power3.easeInOut,
         }, 0.7)
         .to($menuRightItem, 0.8, {
          y: 0,
          ease: Power3.easeInOut,
         }, 0.8)
         .to($menuRightItem, 1, {
          opacity: 1,
          ease: Power3.easeInOut,
         }, 0.9 )
        .to($closeButton, 0.5, {
          className: '+=active',
         }, 1 );


        if(r == true) {
          var closeMenu = new TimelineMax({delay: 0.3, repeat:0 });
         closeMenu.to($menuLeftItem, 0.1, {
            opacity: 0,
            y: 100,
         })
         .to($menuMiddleItem, 0.1, {
          opacity: 0,
          y: 100,
         })
         .to($menuRightItem, 0.1, {
          opacity: 0,
          y: 100,
         })
         .to($closeButton, 0.5, {
           className: '-=active',
         }, 1 );
        
        } else {
         openMenu.play();
          
        }
    }
 
    $('.open-menu').on('click', function() {
     
      $('body').toggleClass( "active-menu" );
      console.log("active");
      activeMenu = true;

      menuAnimation();
       

    });

    $('.close-menu').on('click', function() {
     if(activeMenu == false) {
      $('body').toggleClass( "active-menu" );
            console.log("Close");

            menuAnimation(true);      
     }

    });

    $('.sort-open').on('click', function() {
     
      $('body').toggleClass( "active-sort" );
      console.log("open sort options");
            
    }); 

    $('.sort-close').on('click', function() {
     
      $('body').toggleClass( "active-sort" );
            
    }); 

     


    $('.product-part-5 .right-side .attributes .attributes-nav span').on('click', function() {
     
      if( !$(this).hasClass('active') ) {

        $('.attributes-nav span.active').removeClass('active');
        $(this).addClass('active');

        $('.attributes .table-container').toggleClass('active');
      }

    });
    
    
    var showIndex = {
      active: 0,
      next: 1,
      prev: -1,
      total: 0,
      functional: true,
      upArrow: false,
      downArrow: true,
      arrayImages: null,
      setup: false
    };

    var slider = {
      setup: function() {
        showIndex.total = countC('showcase-name-container');
        showIndex.setup = true;
      }, 
      moveSlider: function() {
        if(showIndex.setup == false) {
          slider.setup();
        }


        console.log("move");

        var $arrayActiveElements = [];

        var $arrayUpNextElements = [];

        var $arrayNewNextElements = [];

        var NameParentElement = $('#showcase-name-container');
        var NameParentInfoElement = $('#showcase-info-container');
        var NameParentPictureElement = $('#showcase-picture-container');
                      
        // var $NameActiveElement = NameParentElement.children().eq(showIndex.active);
        $arrayActiveElements.push(NameParentElement.children().eq(showIndex.active));
        $arrayActiveElements.push(NameParentInfoElement.children().eq(showIndex.active));
        $arrayActiveElements.push(NameParentPictureElement.children().eq(showIndex.active));

        $arrayUpNextElements.push(NameParentElement.children().eq(showIndex.next));
        $arrayUpNextElements.push(NameParentInfoElement.children().eq(showIndex.next));
        $arrayUpNextElements.push(NameParentPictureElement.children().eq(showIndex.next));

        if(showIndex.total == showIndex.next) {
          showIndex.next = -1;
        } 
      
        var $NameNewNextElement = NameParentElement.children().eq(showIndex.next + 1);
        
        // console.log(showIndex.next + 1);
        // console.log($NameNewNextElement);
        // console.log(NameUpNextElement);
        // NameActiveElement.removeClass('active').addClass('not-active');
        // NameUpNextElement.removeClass('next').addClass('active');


        // NameNewNextElement.removeClass('not-active').addClass('next');

        // var tl = new TimelineMax({delay:0.5, repeat:3, repeatDelay:2});

        var tl = new TimelineMax({delay:0.1, repeat:0,  });
        tl.staggerTo($arrayActiveElements, 0, {
          className:'-=active',
        },)
        .to($arrayUpNextElements,0, {
          className: '+=active',
        })
        .to($arrayUpNextElements,0, {
          className: '-=next',
        })
        .to($NameNewNextElement,0, {
          className: '+=next',
        });



       
      
         // showIndex.next = showIndex.next + 1; 
         // showIndex.active = showIndex.active + 1; 
        
       
        // console.log("Old-Active" + showIndex.active);
        // console.log("Old-Next" + showIndex.next);

       
       
        if(showIndex.total == showIndex.active) {
          showIndex.active = 0;
        } else {
          showIndex.active = showIndex.active + 1; 
        }
        if(showIndex.total == showIndex.next) {
          showIndex.next = 0;
        } else {
          showIndex.next = showIndex.next + 1; 
        }
    
    
         console.log("New-Active" + showIndex.active);
        console.log("New-Next" + showIndex.next);
      },

      sort: function() {

        console.log("Old-Active" + showIndex.active);
        console.log("Old-Next" + showIndex.next);

        if(showIndex.total == showIndex.next) {
          showIndex.next = 0;
        } else {
          showIndex.next = showIndex.next + 1; 
        }
      
        if(showIndex.total == showIndex.active) {
          showIndex.active = 0;
        } else {
          showIndex.active = showIndex.active + 1; 
        }
       
        console.log("Active" + showIndex.active);
        console.log("Next" + showIndex.next);
        
        // var index = $( '#showcase-name-container .product-name' ).index('active');
        // showIndex.active = showIndex.active + 1;

      }


    }
    
    var activeAnimation = false;

    var hoverSlider = {
      update: function(el) {
        // var $NameNewNextElement = NameParentElement.children().eq(showIndex.next + 1);
        console.log(el.index());
        var target = el.index(); 

        var $arrayActiveElements = [];

        var NameParentElement = $('.showcase-module-subpages .right-content-container .name-container .product-name');
        var NameParentInfoElement = $('.showcase-module-subpages .right-content-container .info-container');
        var NameParentPictureElement = $('.showcase-module-subpages .picture-container');

        $('.showcase-module-subpages .right-content-container .name-container .product-name .product.active').removeClass('active');
        $('.showcase-module-subpages .right-content-container .info-container .info.active').removeClass('active');
        $('.showcase-module-subpages .picture-container .image.active').removeClass('active');          
     
        $arrayActiveElements.push(NameParentElement.children().eq(target));
        $arrayActiveElements.push(NameParentInfoElement.children().eq(target));
        $arrayActiveElements.push(NameParentPictureElement.children().eq(target));

     

        var tl = new TimelineMax({delay:0.1, repeat:0,  });
        tl.staggerTo($arrayActiveElements, 0.1, {
          className:'+=active',

        }, 0);
       
        setTimeout(function() {
          activeAnimation = false;
        }, 800);

      }
    }

    // slider.moveSlider();
    console.log(showIndex.total);
    
    function countC(i) {
      return $('#' + i).children().length - 1;
    }
    
    $('#showcase-name-container .product-name').on('click', function() {
      if($(this).hasClass('next')) {
        slider.moveSlider();
      }
    });
    
    $( ".showcase-module-subpages .right-content-container .name-container .product-name .product" ).mouseover(function() {
       if($(this).hasClass('active') || activeAnimation == true) {
        return false;
       } else {
        activeAnimation = true;
        hoverSlider.update($(this));
       }

    });


    $(window).load(function() {
      setupIntro()

    });




  });

  function productLetterAnimation(b) {

      var $animated = false; 

  
     
      var $arrayOfLetters = [];
      var $container = $(b).find('span');
      console.log("active letter animations");
    


      // $(letters).each(function() {
      //   $arrayOfLetters.push($(this));
      // });
    

      var bannerA = new TimelineMax({delay:0, repeat:0,  });
      bannerA.staggerTo($container, 0.4, {
         ease: Power3.easeInOut,
         opacity: 1,
      }, 0.2)
  }

    $(window).on('load scroll', function(e) {
    

      var top = $(window).scrollTop();
      top = top - 200;
      var bottom = top + $(window).height();

  
  
      

      $('.scroll-animate-product').each(function() {
          var e = $(this);
          var offset = e.offset().top - 30;
          var offsetBottom = offset + e.height() ;
          var delay = 50;
          var banner;
         


          if(offset >= top && offset < bottom) {
             setTimeout(function() {
              e.addClass('vis');
            }, delay);
            if(e.find('banner-letter-container')) {
              banner = e; 
              productLetterAnimation(banner);
            }

          } else
          if(offset < top && offsetBottom > bottom) {
             setTimeout(function() {
              e.addClass('vis');
              }, delay);
             if(e.find('banner-letter-container')) {
               banner = e; 
              productLetterAnimation(banner);
            }
          } else 
          if(offsetBottom > top && offsetBottom < bottom) {
             setTimeout(function() {
              e.addClass('vis');
              }, delay);
             if(e.find('banner-letter-container')) {
               banner = e; 
              productLetterAnimation(banner);
            }
          }
      });
  });


   $(window).load(function() {
     


console.log(document.body.clientHeight);
 var _containerHeight = document.body.clientHeight;
var _width, _height, _scrollHeight;
var letters = document.getElementsByTagName('span');
var _movingElements = [];
var _scrollPercent = 0;
var pre = prefix();
var _jsPrefix  = pre.lowercase;
if(_jsPrefix == 'moz') _jsPrefix = 'Moz'
var _cssPrefix = pre.css;
var _positions = [
  {
    name: 'iconScrollOne', 
    start: {
      percent: 0.1, x: 0.1, y: 0.15
    },
    end: {
      percent: 0.8, x: 0.1, y: 0.6
    }
  },
  
]

resize();
initMovingElements();

function initMovingElements() {
  for (var i = 0; i < _positions.length; i++) {
    _positions[i].diff = {
      percent: _positions[i].end.percent - _positions[i].start.percent,
      x: _positions[i].end.x - _positions[i].start.x,
      y: _positions[i].end.y - _positions[i].start.y,
    }
    _positions[i].target = {};
    _positions[i].current = {};
    var el = document.getElementsByClassName(_positions[i].name)[0];
    _movingElements.push(el);
  }
}

function resize() {
  _width = window.innerWidth;
  _height = window.innerHeight;
  _scrollHeight = _containerHeight-_height;
}

// function rotateLetters() {
//   for (var i = 0; i < letters.length; i++) {
//     letters[i].style[_jsPrefix+'Transform'] = 'rotateY('+(_scrollPercent*500)+'deg)'
//   }
// }

function updateElements() {
  for (var i = 0; i < _movingElements.length; i++) {
    var p = _positions[i];
    if(_scrollPercent <= p.start.percent) {
      p.target.x = p.start.x*_width;
      p.target.y = p.start.y*_containerHeight;
    } else if(_scrollPercent >= p.end.percent) {
      p.target.x = p.end.x*_width;
      p.target.y = p.end.y*_containerHeight;
    } else {
      p.target.x = p.start.x*_width + (p.diff.x*(_scrollPercent-p.start.percent)/p.diff.percent*_width);
      p.target.y = p.start.y*_containerHeight + (p.diff.y*(_scrollPercent-p.start.percent)/p.diff.percent*_containerHeight);
    }
    
    // lerp
    if(!p.current.x) {
      p.current.x = p.target.x;
      p.current.y = p.target.y;
    } else {
      p.current.x = p.current.x + (p.target.x - p.current.x)*0.1;
      p.current.y = p.current.y + (p.target.y - p.current.y)*0.1;
    }
    _movingElements[i].style[_jsPrefix+'Transform'] = 'translate3d('+p.current.x+'px, '+
        p.current.y+'px, 0px)';
  }
}



function loop() {
  _scrollOffset = window.pageYOffset || window.scrollTop;
  _scrollPercent = _scrollOffset/_scrollHeight || 0;
  // rotateLetters();
  updateElements();
  
  requestAnimationFrame(loop);
}

loop();

window.addEventListener('resize', resize);

/* prefix detection http://davidwalsh.name/vendor-prefix */

function prefix() {
  var styles = window.getComputedStyle(document.documentElement, ''),
    pre = (Array.prototype.slice
      .call(styles)
      .join('') 
      .match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])
    )[1],
    dom = ('WebKit|Moz|MS|O').match(new RegExp('(' + pre + ')', 'i'))[1];
  return {
    dom: dom,
    lowercase: pre,
    css: '-' + pre + '-',
    js: pre[0].toUpperCase() + pre.substr(1)
  };
}




    });


  $(window).on('load scroll', function(e) {
    

      var top = $(window).scrollTop();
      top = top - 200;
      var bottom = top + $(window).height();

      

      $('.scroll-animate').each(function() {
          var e = $(this);
          var offset = e.offset().top - 30;
          var offsetBottom = offset + e.height() ;
          var delay = 50;
          
          if(offset >= top && offset < bottom) {
             setTimeout(function() {
              e.addClass('vis');
            }, delay);
          } else
          if(offset < top && offsetBottom > bottom) {
             setTimeout(function() {
              e.addClass('vis');
              }, delay);
          } else 
          if(offsetBottom > top && offsetBottom < bottom) {
             setTimeout(function() {
              e.addClass('vis');
              }, delay);
          }
      });
  });

  



})(jQuery);


