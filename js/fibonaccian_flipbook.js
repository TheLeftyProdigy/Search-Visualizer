// function loadApp() {
//     // Create the flipbook
//     let jqueryObj = $;
//     jqueryObj('.flipbook').turn({
//         // Width
//         width:922,
//
//         // Height
//         height:600,
//
//         // Elevation
//         elevation: 50,
//
//         // Enable gradients
//         gradients: true,
//
//         // Auto center this flipbook
//         autoCenter: true
//     });
//     console.log("running");
// }
//
//
// $(document).ready(function(){
//     loadApp();
// });
$(document).ready(function () {
    $("#flipbook").turn({
        width: 800,
        height: 600,
        autoCenter: true
    });
});

