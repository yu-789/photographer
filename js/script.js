//ハンバーガーメニュー
$('#hamburger').on('click', function() {
  $('body').toggleClass('open');
  });

$("a").click(function() {
    $('body').removeClass('open');
}) 


// スライダー

// スマホのNEWSの方
const slider1 = new Swiper('.slider1', {
  // Optional parameters
  // direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});


 // PCのWORKの方
 var galleryTop = new Swiper('.main-image02__body', {
  // loop: true, // 繰り返し指定
  // navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  // },
  thumbs: {
      swiper: {
          el: '.main-image02-thumbs',
          // slidesPerView: 5,
          // spaceBetween:5,
          centerInsufficientSlides: true, // センター揃え
          virtualTranslate: true, //スワイプすると謎に横に消えてくのがこれで治った

      }
  }
});




// スクロール位置で背景色を変える
$(window).scroll(function(){
  var timing = 1; //　変化するタイミングを微調整する

  //aboutからworkの間はこれ
  if ($(window).scrollTop() > $('#about').offset().top - timing &&　$(window).scrollTop() < $('#work').offset().top){
    $("body").css("background", "#2E3743");
  }

  //newsからbiographyの間はこれ
  else if ($(window).scrollTop() > $('#news').offset().top - timing &&　$(window).scrollTop() < $('#biography').offset().top){
    $("body").css("background", "#411B1B");
  }

  //biographyからcontactの間はこれ
  else if ($(window).scrollTop() > $('#biography').offset().top - timing &&　$(window).scrollTop() < $('#contact').offset().top){
    $("body").css("background", "#3B3E29");
  }

  //それ以外はこれ
  else
    $("body").css("background", "#030303");

});



// フェードイン

  $(window).scroll(function () {
      const wHeight = $(window).height();
      const scrollAmount = $(window).scrollTop();
      $('.scrollanime').each(function () {
          const targetPosition = $(this).offset().top;
          if(scrollAmount > targetPosition - wHeight) {
              $(this).addClass("fadeInDown");
          }
      });
      $('.scrollanime2').each(function () {
        const targetPosition = $(this).offset().top;
        if(scrollAmount > targetPosition - wHeight) {
            $(this).addClass("fadeInDown2");
        }
    });
  });















// PAGE TOP
var topBtn = $('#page-top');
    topBtn.hide();
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    //スクロールしてトップ
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    $('#page-top *').removeAttr('style');


