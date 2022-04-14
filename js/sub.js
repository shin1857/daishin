// 2단계 메뉴 (전체 슬라이드)
$(function () {
    $('.depth1 > li').hover(
      function () {
  
        $('.bg').stop().slideDown(200);
        $('.depth2').stop().slideDown(200);
      },
      function () {
        $('.bg').stop().slideUp(200);
        $('.depth2').stop().slideUp(200);
      }
    );});