const $doc = document;
const $animationTarget = $doc.querySelectorAll('.animationTarget');
let $animationEl = '';

// スクロールするごとに高さを取得
console.log("画面の高さ", window.innerHeight);
$doc.addEventListener('scroll', function(){
    for(let i = 0; i < $animationTarget.length; i++){
        // 上からの高さ取得
        const getElementDistance = $animationTarget[i].
        getBoundingClientRect().top + $animationTarget[i].clientHeight * .5;
        if (innerHeight > getElementDistance){
            $animationTarget[i].classList.add('show');
        }
    }
})
