// 1. 모바일 메뉴 숨기기
// 객체 = 모바일메뉴 m_nav_open
// 객체.속성 style.display
// 2. 햄버거 메뉴 클릭 시 모바일 메뉴 보이기
// 객체 = 햄버거메뉴m_nav , 모바일 메뉴 m_nav_open
// 속성 style.display = 'block' ;
// 이벤트 click
// 메서드 
// 3. X 버튼 클릭 시 모바일 메뉴 숨기기
// 객체 = X버튼 close, 모바일메뉴m_nav_open
const mNavOpen = document.querySelector('.m_nav_open');
const mNav = document.querySelector('.m_nav');
const close = document.querySelector('#close')
console.log(mNavOpen, mNav, close)
// 1. 모바일 메뉴 숨기기
mNavOpen.style.display = 'none' ;
// 2. 햄버거 메뉴 클릭 시 모바일 메뉴 보이기
//객체.이벤트
mNav.addEventListener('click',function(){
    mNavOpen.style.display = 'block';
});
// 3. X 버튼 클릭 시 모바일 메뉴 숨기기
// 객체 = X버튼 close, 모바일메뉴m_nav_open
close.addEventListener('click',function(){
    mNavOpen.style.display = 'none';
});