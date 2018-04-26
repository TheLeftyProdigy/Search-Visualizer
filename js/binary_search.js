let data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let out = [];
let middle;

function BinarySearch(data, target, start, end) {
    // middle = Math.floor((start + end) / 2);
    let sum = start + end;
    if (sum % 2 === 0) {
        middle = (start + end) / 2;
    }
    else {
        middle = ((start + end) - 1) / 2;
    }
    out.push(middle);
    if (parseInt(target) === middle) return data[middle];
    if (end - 1 === start) return Math.abs(data[start] - target) > Math.abs(data[end] - target) ? data[end] : data[start];

    if (parseInt(target) > data[middle]) return BinarySearch(data, target, middle + 1, end);
    if (parseInt(target) < data[middle]) return BinarySearch(data, target, start, middle - 1);
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
            let closestPoint = BinarySearch(data, target, 1, 20);

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



