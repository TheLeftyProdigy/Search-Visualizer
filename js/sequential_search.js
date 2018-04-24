let tweener = function () {
    TweenLite.to(".back-button", 2.3, {css: {backgroundColor: "#4B88A2"}, ease: Power2.easeOut});
};

window.onload = tweener;