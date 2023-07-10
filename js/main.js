$(function(){
  // #headerにopenクラスがあれば削除、なければ追加
$('.toggle_btn').on('click' , function(){
  if ($('#header').hasClass('open')){
    $('#header').removeClass('open');
  } else {
    $('#header').addClass('open');
  }
});

// mask タグがクリックされると、#header 要素から open クラスが取り除かれます
$('#mask').on('click', function(){
  $('#header').removeClass('open');
});

// #navi 内の a タグがクリックされると、#header 要素から open クラスが取り除かれます。
$('#navi a').on('click', function(){
  $('#header').removeClass('open');
});


// ページ内のリンクがクリックされたときに、対応する位置までスムーズにスクロールする効果を実現

// $('a[href^="#"]')は、href属性の値が「#」で始まるすべての<a>要素を選択
// let href = $(this).attr("href")は、クリックされた<a>要素のhref属性の値を取得
// let target = $(href == "#" || href == "" ? 'html' : href)は、取得したhref属性の値に基づいて、スクロール先の要素を選択します。もしhrefが「#」または空文字列の場合は、ページの先頭（html要素）が対象になります。
// let position = target.offset().topは、対象要素のページ上の位置（画面上端からのピクセル数）を取得
// $("html, body").animate({scrollTop: position}, 600, "swing")は、ページをスムーズにアニメーションしながら指定した位置にスクロールさせます。アニメーションの時間は600ミリ秒で、「swing」というイージング関数を使用
// return falseは、クリックイベントが伝播しないようにし、ページの移動をキャンセル
$('a[href^="#"]').click(function(){
  let href= $(this).attr("href");
  let target= $(href == "#" || href == "" ? 'html' : href);
  let position = target.offset().top;
  $("html, body").animate({scrollTop:position}, 600, "swing");
  return false;
});


// カルーセル（slick）
// pickupスライダー 「slick-area」という要素にSlickプラグインを適用し、スライダーを作成します。
// .slick({...})は、Slickプラグインを適用します。中括弧内に指定


$('.slick-area').slick({
  arrows: false,  // arrows: false：左右の矢印ナビゲーションを非表示に
  centerMode: true, // centerMode: true：表示されるスライドが中央に配置
  centerPadding: '100px',// スライドの両側に横方向の余白
  slidesToShow: 3,// slidesToShow: 3：画面に表示されるスライドの数
  responsive: [
    {
      // ビューポートの幅が768ピクセル以下の場合に、スライドの配置と表示数を調整
      breakpoint: 768,
      settings: {
        centerPadding: '50px',
        slidesToShow: 1
      }
    }
  ]
});

// featureのフェード表示
// ウィンドウのスクロールが発生するたびに、指定された関数が実行

$(window).scroll(function(){
  $('.fadein').each(function(){
    let scroll = $(window).scrollTop();
    let target = $(this).offset().top;
    let windowHeight = $(window).height();
    if (scroll > target - windowHeight + 200) {
      $(this).css('opacity','1');
      $(this).css('transform','translateY(0)');
    }
  });
});

});