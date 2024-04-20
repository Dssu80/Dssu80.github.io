
$(document).ready(function () {

  // 點擊按鈕時顯示或隱藏DIV
  $("#btn").click(function(){
    $("#content").toggle();
  });

  //共用選單 . 內容
  $(document).ready(function(){
      $("#menu").load("include/menu.html");
      $("#side").load("include/side_menu.html");
      $("#footer").load("include/footer.html");
      $("#test").load("include/test.html"); // 預覽用  上線麻煩刪除
      $("#test_2").load("include/test_2.html"); // 預覽用  上線麻煩刪除
  });

  //活动说明彈窗
  $(".semi-list").click(function () {
    $(".early").addClass("active");
  });

  $(".final-list").click(function () {
    $(".finals").addClass("active");
  });

  $(".activity").click(function () {
    $(".legend").addClass("active");
  });

  $(".prize").click(function () {
    $(".record").addClass("active");
  });

  $(".detail-btn").click(function () {
    $(".competition").addClass("active");
  });

  //影片彈窗
  $(".video_bth").click(function () {
    $(".md_video").addClass("active");
  });

  //小遊戲彈窗
  $(".poker_btn").click(function () {
    $(".poker").addClass("active");
    fixed();
  });



  //彈窗取消
  $(".md-close,.md .md-overlay,.know").click(function () {
    $(".front,.back").removeClass("active");
    $(".md").removeClass("active");
    $(".poker-result .win").removeClass("shake");
    $(".poker-play .poker_box_item img").removeClass("flickering");  //中獎顯示 - 閒
    $(".poker-bank .poker_box_item img").removeClass("flickering");  //中獎顯示 - 庄
    $(".poker-play .play-win").removeClass("conic conic-demo");  //中獎顯示 - 閒
    $(".poker-bank .bank-win").removeClass("conic conic-demo");  //中獎顯示 - 庄
    $(".poker-play .play-win .orb").removeClass("active");  //中獎顯示 - 閒
    $(".poker-bank .bank-win .orb").removeClass("active");  //中獎顯示 - 庄
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



  // 表格切換
  $('.ranking_tab li').click(function (e) {
    var $tabIndex = $(this).index();
    $(this).addClass('active').siblings(".ranking_tab li").removeClass('active');
    $('.ranking_table').eq($tabIndex).fadeIn().siblings(".ranking_table").hide();
  });


  //浮動按鈕 隨捲軸移動
	$(window).on('scroll', function(){
		scrollTop = $(window).scrollTop();
		if(scrollTop >50){
			$('.side_menu').stop().animate({'top' : scrollTop + 110 + 'px'}, 400);
		}else{
			$('.side_menu').stop().animate({'top' : '110px'}, 400);
		}
	});


  //lighrbox
  $(document).on('lity:resize', function (event, instance) {
    console.log('Lightbox resized');
  });

  (function ($) {
    $.fn.visible = function (partial) {
      var $t = $(this),
        $w = $(window),
        viewTop = $w.scrollTop(),
        viewBottom = viewTop + $w.height(),
        _top = $t.offset().top,
        _bottom = _top + $t.height(),
        compareTop = partial === true ? _bottom : _top,
        compareBottom = partial === true ? _top : _bottom;
      return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
    };
  })(jQuery);


  var win = $(window);
  var allMods = $(".sign-rule img , .betting-rule img");
  var allGrow = $("#grow-rule td")
  var allGrow2 = $("#grow-rule2 td")

  win.scroll(function (event) {

    allMods.each(function (i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass("come-in");
      }
    });

    allGrow.each(function (i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass("grow-up");
      }
    });
    allGrow2.each(function (i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass("grow-up2");
      }
    });
  });


  // 錨點
  $(function () {
    $('.rule-scroll').click(function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top -100
          }, 1000);
          return false;
        }
      }
    });
  });
});


//範例下拉 
$(document).ready(function () {
  $("#slide").click(function () {
    $(".exm-box").slideToggle("slow");
    return false;
  });
  $("#slide2").click(function () {
    $(".exm-box2").slideToggle("slow");
    return false;
  });
  $("#slide3").click(function () {
    $(".exm-box3").slideToggle("slow");
    return false;
  });
  $(".arrow").click(function () {
    $(this).parent().parent().find(".rank-info").slideToggle("slow").parent().parent().siblings().find(".rank-info").slideUp("slow");
    $(this).toggleClass("active").parent().parent().parent().siblings().find(".arrow").removeClass("active");
    return false;
  });
});


//選單底色切換
$(document).ready(function(){
  $(window).scroll(function() {
      var top = $("#carousel-nav").offset()>0; //获取指定位置
      var scrollTop = $(window).scrollTop();  //获取当前滑动位置
      if(scrollTop > 60){                 //滑动到该位置时执行代码
        $("header").attr("id","active-yd-bar");
      }
      else{
        $("header").removeAttr("id");
      };
      var top = $("#submenu-nav").offset()>0; //获取指定位置
      var scrollTop = $(window).scrollTop();  //获取当前滑动位置
      if(scrollTop > 60){                 //滑动到该位置时执行代码
        $(".r_menu").attr("id","active-rule-bar");
      }
      else{
        $(".r_menu").removeAttr("id");
      }
  });
});


//小遊戲
$(document).ready(function () {
  $(".game_btn").click(function () {
    // 按鈕
    $(this).addClass('active').removeClass('ldx').parent().parent().siblings().find('.game_btn').removeClass('active').removeClass('ldx').hide();
    // 閒翻牌
    setTimeout(function () {
      $(".poker-play .back,.poker-play .front").addClass("active");
    }, 500);
    // 庄翻牌
    setTimeout(function () {
      $(".poker-bank .back,.poker-bank .front").addClass("active");
    }, 2000);
    // 閒贏
    setTimeout(function () {
      $(".poker-play .play-win img ,.poker-play .play-win ").addClass("active");
      $(".poker-play .poker_box_item .front img").addClass("flickering");  //中獎顯示
      $(".poker-play .play-win img").addClass("shake");  //中獎顯示
      $(".poker-play .play-win").addClass("conic conic-demo");  //中獎顯示
      $(".poker-play .play-win .orb").addClass("active");  //中獎顯示
    }, 3500);
    // 庄贏
    setTimeout(function () {
      $(".poker-bank .bank-win img ,.poker-bank .bank-win ").addClass("active");
      //$(".poker-bank .poker_box_item .front img").addClass("flickering");  //中獎顯示
      //$(".poker-bank .bank-win img").addClass("shake");  //中獎顯示
      //$(".poker-bank .bank-win").addClass("conic conic-demo");  //中獎顯示
      //$(".poker-bank .bank-win .orb").addClass("active");  //中獎顯示
    }, 3500);
    //結果彈窗 
    setTimeout(function () {
      $(".poker-result").addClass("active");
      $(".poker-result .win").addClass("shake");
    }, 5000);
    //金幣噴發 
    setTimeout(function () {
      clickSpark.setParticleCount(50);
      clickSpark.setParticleSize(52);
      clickSpark.setParticleSpeed(52);
      clickSpark.setParticleImagePath('images/game/coin.png');
      clickSpark.fireParticles($('.sparklingDiv'));
    }, 5000);
    setTimeout(function () {
      clickSpark.setParticleCount(80);
      clickSpark.setParticleSize(82);
      clickSpark.setParticleSpeed(82);
      clickSpark.setParticleImagePath('images/game/coin.png');
      clickSpark.fireParticles($('.sparklingDiv'));
    }, 7000);
  });
  $(".poker-result .md-close,.poker-result .md-overlay,.poker-result .ks,.know").click(function () {
    $(".poker-play .play-win img ,.poker-play .play-win ").removeClass("active");
    $(".poker-bank .bank-win img ,.poker-bank .bank-win ").removeClass("active");
    $(".game_btn").removeClass("active").addClass('ldx');
    $(".game_btn").show();
  });
});


//lightbox
$(document).on('lity:resize', function (event, instance) {
  console.log('Lightbox resized');
});


// 更多內容 more
$(function () {
  $(".item").slice(0, 10).show(); // 設定顯示數量
  $("body").on('click','.load-more', function (e) {
      e.preventDefault();
      $(".item:hidden").slice(0, 3).slideDown(); // 點擊單次顯示數量
      if ($(".item:hidden").length == 0) {
          $(".load-more").css('visibility', 'hidden');
      }
      $('html,body').animate({
          scrollTop: $(this).offset().top
      }, 1000);
  });
});


//區塊隱藏
$(function hide() {
  $('.prompt').fadeOut(5000);
});
