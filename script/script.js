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

// main-swiper-slide
// const 변수명 = new Swiper('적용대상')
// const 변수명 = new Swiper('적용대상,'{속성:값, 속성:값})
const pawin_slide = new Swiper('#pawin_slide',{
    //자동재생
    autoplay:{
        delay:10000, //슬라이드 간격(밀리초) 기본3초
    disableOnInteraction:false,//버튼 클릭 후 자동재생 유지
    },
    loop:true, //자연스럽게 한 방향으로 넘어가듯이 하기.
    direction:'horizontal',
    //effect:'fade', //제자리 변경 슬라이드 효과
    //direction:'vertical', //방향 아래로 바꾸기.
    navigation: {
        nextEl: '#pawin_slide .swiper-button-next',
        prevEl: '#pawin_slide .swiper-button-prev',
    },
});
const pawin_slide2 = new Swiper('#pawin_slide2',{
    autoplay:{delay:3000,
    disableOnInteraction:false},
    effect:'fade',
    loop:true, direction:'horizontal',
})
const test = new Swiper('#test',{
    autoplay:{delay:1000},
    direction:'vertical',
    navigation: {//이전, 다음 내비게이션 연결
        //next, prev 객체 연결 시 부모를 안적으면
        //body 안에 있는 모든 swiper-next,prev를 인식하기 때문에
        //개별인식가능한 부모이름을 반드시 앞에 먼저 작성한다.
        nextEl: '#test .swiper-button-next',
        prevEl: '#test .swiper-button-prev',
    }
})
// 입양 정보 slide
const dog_info_slide = new Swiper('#dog_info_slide',{
    slidesPerView:'auto',//breakpoint 옵션 추가시 'auto'로 설정. 그렇지 않으면 숫자로 표시 //한 번에 슬라이드가 4개 보이는 명령어.
    spaceBetween:20,//여백
    //swiper-slide 반응형웹 옵션
    breakpoints:{
        //해상도:{옵션:값} 작은값에서 큰값 순서대로 작성하게 되어있음.
        400:{slidesPerView:2},//400~899
        // 700:{slidesPerView:2}, //700이상일 때
        900:{slidesPerView:3}, //900이상일 때
        1160:{slidesPerView:4}//1160px이상일 경우 슬라이드 4개가 보이게 하겠다.
    },
    autoplay:{delay:1000},
    loop:true,

})