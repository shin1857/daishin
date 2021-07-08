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
  );
  var slideIndex = 0;
  showSlides();
  
  function showSlides() {
      var i;
      var slides = document.getElementsByClassName("mySlide");
      var dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";  
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}    
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active2", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active2";
      setTimeout(showSlides, 5000);
  }
});