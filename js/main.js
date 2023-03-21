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

//テキストのフェードイン
$(function() {
    // スクロールイベント
      $(window).scroll(function() {
        // フェードアニメーションを呼び出す
        fadeAnime();
      });
      
      // フェードアニメーションの設定
      function fadeAnime() {
        // .fadeUpTriggerが付いた要素に対して
        $('.fadeUpTrigger').each(function() {
          // 縦位置を取得し-50pxして、変数targetに代入する
          let target = $(this).offset().top -= 50;
          // スクロール量を取得し、変数scrollに代入する
          let scroll = $(window).scrollTop();
          // 表示画面の高さを取得し、変数windowHeightに代入する
          let windowHeight = $(window).height();
          // 要素の縦位置から表示画面の高さを引いて200pxを足した数字よりscrollのほうが大きい場合
          if(scroll > target - windowHeight + 200) {
            // .fadeUpを追加する
            $(this).addClass('fadeUp');
          } else {
            // そうでない場合は.fadeUpを削除する
            $(this).removeClass('fadeUp');
          }
        });
      };    
    });