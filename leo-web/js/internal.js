
$(document).ready(function () {


  $(".mint_btn").click(function () {
    $(".mint_result").addClass("active");
    $("#status").delay(1500).fadeOut(1000);
    $("#preloader").delay(2500).fadeOut(500);
  });
  $(".wl_btn").click(function () {
    $(".wl_result").addClass("active");
    
  });


  // $(".box_btn").click(function () {
  //   $(".box_result").addClass("active");
  //   $(".mint_result").removeClass("active");
  //   $("#status-box").delay(1500).fadeOut(1000);
  //   $("#preloader-box").delay(1500).fadeOut(1000);
  // });

  $(".show_btn").click(function () {
    $(".show_result").addClass("active");
  });

  $(".md-close,.md .md-overlay").click(function () {
    $(".md").removeClass("active");
    $("#status").show();
    $("#preloader").show();
    $("#status-box").show();
    $("#preloader-box").show();
  });

  $(".menu_button,header .md-overlay,.menu_mob a").click(function () {
    $("header").toggleClass("active");
    $(".menu_mob").slideToggle();
  });

  $(function () {
    var $li = $('.menu li a');

    $li.click(function () {
      // $($(this).attr('href')).show().siblings('.tab-inner').hide();
      // event.preventDefault();
      $(this).addClass('active').parents().siblings().find('.active').removeClass('active');
    });

    var $mli = $('.menu_mob li a');

    $mli.click(function () {
      // $($(this).attr('href')).show().siblings('.tab-inner').hide();
      // event.preventDefault();
      $(this).addClass('active').parents().siblings().find('.active').removeClass('active');
    });



  
  });
  // bag slide
  $(document).ready(function () {
    $("#slide").click(function () {
      $(".mint-bag").toggleClass("ldx ldx-bounceAlt active");
      $(".mint-bag-area").slideToggle("slow").parent().find(".mint-bag-arrow").toggleClass("active");
      return false;
    });
  });


  $(document).ready(function () {
    $(".slide-faq").click(function () {
      $(this).parent().find(".faq-answer").slideToggle("slow").parent().find(".arrow").toggleClass("active");
      return false;
    });
  });


  //gotop
  $('.gotop').click(function () {
    $('html,body').animate({ scrollTop: '0px' }, 800);
  });
  //高度200 gotop出現
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 200) {
      $(".gotop").fadeIn();
    } else {
      $(".gotop").fadeOut();
    }
  });


  jQuery(document).ready(function ($) {
    var $timeline_block = $('.cd-timeline-block');

    //hide timeline blocks which are outside the viewport
    $timeline_block.each(function () {
      if ($(this).offset().top > $(window).scrollTop() + $(window).height() * 0.75) {
        $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
      }
    });

    //on scolling, show/animate timeline blocks when enter the viewport
    $(window).on('scroll', function () {
      $timeline_block.each(function () {
        if ($(this).offset().top <= $(window).scrollTop() + $(window).height() * 0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden')) {
          $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
        }
      });
    });
  });


  $(function () {
    // This will select everything with the class smoothScroll
    // This should prevent problems with carousel, scrollspy, etc...
    $('.header-scroll').click(function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top - 130
          }, 1000); // The number here represents the speed of the scroll in milliseconds
          return false;
        }
      }
    });
  });
  
  $(document).on("ready", function () {
    var urlHash = window.location.href.split("#")[1];
    $('html,body').animate({
        scrollTop: $('.' + urlHash + ', #' + urlHash +',[name='+urlHash+']').first().offset().top -130
    }, 1000);
});



  function wcqib_refresh_quantity_increments() {
    jQuery("div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)").each(function (a, b) {
      var c = jQuery(b);
      c.addClass("buttons_added"), c.children().first().before('<input type="button" value="-" class="minus" />'), c.children().last().after('<input type="button" value="+" class="plus" />')
    })
  }
  String.prototype.getDecimals || (String.prototype.getDecimals = function () {
    var a = this,
      b = ("" + a).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
    return b ? Math.max(0, (b[1] ? b[1].length : 0) - (b[2] ? +b[2] : 0)) : 0
  }), jQuery(document).ready(function () {
    wcqib_refresh_quantity_increments()
  }), jQuery(document).on("updated_wc_div", function () {
    wcqib_refresh_quantity_increments()
  }), jQuery(document).on("click", ".plus, .minus", function () {
    var a = jQuery(this).closest(".quantity").find(".qty"),
      b = parseFloat(a.val()),
      c = parseFloat(a.attr("max")),
      d = parseFloat(a.attr("min")),
      e = a.attr("step");
    b && "" !== b && "NaN" !== b || (b = 0), "" !== c && "NaN" !== c || (c = ""), "" !== d && "NaN" !== d || (d = 0), "any" !== e && "" !== e && void 0 !== e && "NaN" !== parseFloat(e) || (e = 1), jQuery(this).is(".plus") ? c && b >= c ? a.val(c) : a.val((b + parseFloat(e)).toFixed(e.getDecimals())) : d && b <= d ? a.val(d) : b > 0 && a.val((b - parseFloat(e)).toFixed(e.getDecimals())), a.trigger("change")
  });
  $('#qty_input').prop('disabled', true);

});

