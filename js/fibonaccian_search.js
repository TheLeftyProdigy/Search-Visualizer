let tweener = function () {
    TweenLite.to(".back-button", 2.3, {css: {backgroundColor: "#c22118"}, ease: Power2.easeOut});
    TweenLite.to("body",2.3,{css:{opacity:1},ease:Power2.easeOut});
};

window.onload = tweener;

let data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let out = [];
let middle;


function fibbSearch(arr,x, n){
    let fibMMm2=0;
    let fibMMm1=1;
    let fibM = fibMMm2 + fibMMm1;

    while(fibM<n){
        fibMMm2 = fibMMm1;
        fibMMm1 = fibM;
        fibM  = fibMMm2 + fibMMm1;
    }
    let offset=-1;
    while (fibM > 1)
    {
        let i = Math.min(offset+fibMMm2, n-1);
        out.push(i);

        if (arr[i] < x)
        {
            fibM  = fibMMm1;
            fibMMm1 = fibMMm2;
            fibMMm2 = fibM - fibMMm1;
            offset = i;
        }

        else if (arr[i] > x)
        {
            fibM  = fibMMm2;
            fibMMm1 = fibMMm1 - fibMMm2;
            fibMMm2 = fibM - fibMMm1;
        }

        else return i;
    }
    if(fibMMm1 && arr[offset+1]===x){
        return offset+1;
    }
    return -1;
}


let index = -1;
let iterations = 0;

$(document).ready(function () {


    let text_no = $('#iterations');
    let curr_no =$('#curr');

    $(document).on('keypress', '#input', function (e) {

        if (e.keyCode === 13) {
            index = -1;
            iterations = 0;
            out = [];
            text_no.text("Iteration Number: 0");
            curr_no.text("Current Page: None");
            $('#flipbook').turn("page", 1);
            let target = this.value;
            console.log("input=" + target);
            let closestPoint = fibbSearch(data, target, 20);

            console.log("Closest Point is " + closestPoint);

            if (parseInt(closestPoint) !== out[out.length - 1])
                out.push(closestPoint);
            console.log("Out array is " + out);
        }
    });


    $('#next').click(function () {
        index += 1;

        // iterations++;

        if(iterations<out.length && iterations>=0)
        {
            iterations++;
            text_no.text("Iteration Number: "+ (iterations));
        }
        else if(iterations>=out.length)
        {
            iterations = 1;
            text_no.text("Iteration Number: "+ (iterations));
        }

        if (index >= out.length) {
            index = 0;
            $('#flipbook').turn("page", out[index] + 2);
            console.log("Value of index is " + index);
            console.log(out[index]);
            curr_no.text("Current Page: "+ out[index]);
            // $('#flipbook').turn("page", out[index]);
        }
        else {
            // $('#flipbook').turn("page", out[index]);
            $('#flipbook').turn("page", out[index] + 2);
            console.log("Value of index is " + index);
            console.log(out[index]);
            curr_no.text("Current Page: "+ out[index]);
        }
    });

    $('#previous').click(function () {
        index -= 1;

        // if(iterations<out.length && iterations>=0)
        // {
        //     iterations++;
        //     text_no.text("Iteration Number: "+ (iterations));
        // }
        // else if(iterations>=out.length)
        // {
        //     iterations = 1;
        //     text_no.text("Iteration Number: "+ (iterations));
        // }

        if(iterations<=1)
        {
            iterations = out.length;
            text_no.text("Iteration Number: "+ (iterations));
        }
        else if(iterations===0)
        {
            iterations = out.length;
            text_no.text("Iteration Number: "+ (iterations));
        }
        else
        {
            iterations--;
            text_no.text("Iteration Number: "+ (iterations));
        }

        if (index < 0) {
            index = out.length - 1;
            $('#flipbook').turn("page", out[index] + 2);
            console.log("Value of index is " + index);
            console.log(out[index]);
            curr_no.text("Current Page: "+ out[index]);
        }
        else if (index >= out.length) {
            index = index - 1;
            $('#flipbook').turn("page", out[index] + 2);
            console.log("Value of index is " + index);
            console.log(out[index]);
            curr_no.text("Current Page: "+ out[index]);
        }
        else {
            $('#flipbook').turn("page", out[index] + 2);
            console.log("Value of index is " + index);
            console.log(out[index]);
            curr_no.text("Current Page: "+ out[index]);
        }
    });


});



