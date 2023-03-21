// ドロップダウンメニュー
$(function(){
    $(".btn").click(function () {
    $(".nav-list").slideToggle();
    });
});

//　menuボタンの表記をmenuとcloseで書き換える
$(function(){
    $(".btn").click(function() {
        const btn = document.getElementById('menu-btn').innerHTML;
        if(btn === 'menu') {
            document.getElementById('menu-btn').textContent = 'close';
        } else if(btn === 'close') {
            document.getElementById('menu-btn').textContent = 'menu';
        }
    });
});

// スムーススクロール
$('a[href^="#"]').click(function () {
    const speed = 600;
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    let position = target.offset().top;
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
});