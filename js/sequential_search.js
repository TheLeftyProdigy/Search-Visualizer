let tweener = function () {
    TweenLite.to(".back-button", 2.3, {css: {backgroundColor: "#4B88A2"}, ease: Power2.easeOut});
};

window.onload = tweener;

// let x;
// $(document).ready(function () {
//     $(".box").click(function () {
//         x = $(this).attr("class");
//         x = x.replace(' box', '');
//         x = x.replace('c', '');
//         console.log(x)
//     });
// });

$(document).ready(function () {
    $(".box").click(function () {
        $(".chosen").css("background",$(this).css("background"));
    });
});
