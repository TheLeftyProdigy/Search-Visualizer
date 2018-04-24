let tweener = function () {
    TweenLite.to("#seq-search", 2, {css: {margin: "70px", backgroundColor: "#4B88A2"}, ease: Power2.easeOut});
    TweenLite.to("#bin-search", 2, {css: {margin: "70px", backgroundColor: "#D3D4D9"}, ease: Power2.easeOut});
    TweenLite.to("#fib-search", 2, {css: {margin: "70px", backgroundColor: "#c22118"}, ease: Power2.easeOut});
};
window.onload = tweener;
