//VISUAL - Badge 스크롤 효과 & TO-TOP 숨김 처리
const badgeEl = document.querySelector('header .badges')
const toTopEl = document.querySelector('#to-top');

// _.throttle(사용하려는 함수, 시간)
window.addEventListener('scroll', _.throttle(function(){
  console.log(window.scrollY);
  if(window.scrollY > 500 ) {
    //배지 숨기기
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none',
    });
    gsap.to(toTopEl, .2, { // TO-TOP 기능
      x: 0,
      opacity: 1,
    });
  } else{
    //배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block',
    });
    gsap.to(toTopEl, .2, {
      x: 100,
      opacity: 0,
    });
  };
}, 300));

// TO-TOP - 클릭 시 상단 이동
toTopEl.addEventListener('click', function(){
  // 브라우저 탭에 존재하는 전역 최상위 객체 window 선택 
  gsap.to(window, .7, {
    scrollTo: 0,
  })
})



//NOTICE - 이미지 순서대로 나타나는 효과
const fadeEls = document.querySelectorAll('.visual .fade-in')

fadeEls.forEach(function(fadeEl, index){ // gsap.to로 index를 따라 순차적으로 출력
  gsap.to(fadeEl, 1, {
    opacity: 1,
    delay: (index + 1 ) * 0.5, // 0.5, 1.0, 1.5, 1.6을 입력한 것과 같음
  });
});



//NOTICE - 상하 SLIDE 효과 (SWIPER)
new Swiper('.notice-line .swiper', { //new 키워드로 생성, new Swiper(선택자, 옵션)
  direction: 'vertical', //수직 정렬
  autoplay: true,
  loop: true,
});



// PROMOTION - 좌우 SLIDE 효과 (SWIPER)
new Swiper('.promotion .swiper', {
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수 
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드 가운데 보이기
  autoplay: {
    delay: 3000,
  }, // 자동 재생
  loop: true, // 첫 번째, 마지막을 반복시킴
  pagination: {
    el: '.promotion .swiper-pagination', //선택자 선택
    clickable: true, //페이지 번호 요소 선택자
  },
  navigation: {
    prevEl: '.promotion .swiper-prev', //이전으로 이동
    nextEl: '.promotion .swiper-next', //다음으로 이동
  },
});



// AWARDS - 좌우 SLIDE 효과 (SWIPER)
new Swiper('.awards .swiper', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  centeredSlides: true,
  navigation: {
    prevEl: '.awards .swiper-prev', //이전으로 이동
    nextEl: '.awards .swiper-next', //다음으로 이동
  },
});



// PROMOTION - 스타벅스 프로모션 클릭 시 숨기는 효과
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.notice .toggle-promotion');

let isHidePromotion = false; //isHidePromotion을 초기값으로 false를 지정

promotionToggleBtn.addEventListener('click', function () {
  //isHidePromotion의 반대값 !을 입력해서 true로 지정
  isHidePromotion = !isHidePromotion;
  if( isHidePromotion ) {
    //숨김 처리!
    promotionEl.classList.add('hide')
  }else{
    //보이게 처리!
    promotionEl.classList.remove('hide')
  };
});
//클릭 시 isHidePromotion는 true로 출력되고, 데이터는 true 값으로 존재함



// YOUTUBE FLOATING - 둥둥 떠다니는 요소 효과
function random(min, max) {
  // 범위 랜덤 함수(소수점 2자리까지)
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
};

function floatingObject(selector, delay, size){
  gsap.to(selector, //선택자
    random(1.5, 2.5), // 애니메이션 동작 시간에 위 함수를 사용
    { // 옵션
    y: size, //
    repeat: -1, // 무한 반복
    yoyo: true, //반대로 반복재생
    ease: Power1.easeInOut, //easing 효과 적용
    delay: random(0, delay), // 멈추는 시간 설정
  });
};

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', 0.5, 15);
floatingObject('.floating3', 1.5, 20);



// ScrollMagic - 스크롤 위치를 계산해서 html 요소에 애니메이션 추가
const spyEls = document.querySelectorAll('section.scroll-spy');

spyEls.forEach(function(spyEl){
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, // 보여짐의 여부를 감시할 요소를 지정
      triggerHook: .6, // 어떤 지점에서 감시가 될 것인지 설정
    })
    .setClassToggle(spyEl, 'show') // 스크롤 위치를 감시하다가 spyEl에 class="show" 추가
    .addTo(new ScrollMagic.Controller())
});