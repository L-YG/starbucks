//SEARCH
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  //logic
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused'); // 돋보기 투명도 처리를 위한 클래스 추가
  searchInputEl.setAttribute('placeholder', '통합검색'); // html에 속성 추가
});
searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused'); // 돋보기 투명도 처리 해제
  searchInputEl.setAttribute('placeholder', ''); // html에 속성 추가
});



// FOOTER - 년도 자동 변경
const thisYear = document.querySelector('footer .copyright .this-year')

thisYear.textContent = new Date().getFullYear()