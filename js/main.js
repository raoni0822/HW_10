$(function () {

    $('.slide_posters ul').slick({
        arrows: false,
        autoplay: true,
        dots: true,
    })

    $('.foodMenu_tab>ul>li>a').on('click', function () {
        $('')
    })


    $('.food_slide').slick({
        arrows: false,
        slidesToShow: 4,
        infinite: false,


    })

    $('.tabmenu_list li').on('click', function () {
        var idx = $(this).index();
        $('.slide_list>li').removeClass('on');
        $('.slide_list>li').eq(idx).addClass('on');

        $('.food_slide').slick('slickGoTo', 0);

        $('.tabmenu_list li').removeClass('on')
        $(this).addClass('on')
    })

    $('#mainSubway-foodMenu .slideArrow li:nth-child(1)').on('click', function () {
        $('.food_slide').slick('slickPrev')
    })
    $('#mainSubway-foodMenu .slideArrow li:nth-child(2)').on('click', function () {
        $('.food_slide').slick('slickNext')
    })

});

//window.addEventListner('DOMcontentLoaded')
// const TAB = document.querySelectorAll('.tabmenu_list li');
// const LIST = document.querySelectorAll('.slide_list>li');
// console.log(TAB, LIST);

// TAB.forEach((it, idx) => {
//     it.addEventListener('click', () => {
//         LIST.forEach(it => it.classList.remove('on'))
//         LIST[idx].classList.add('on')
//     });
// });