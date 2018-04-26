let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let out = [];
let middle;

function BinarySearch(data, target, start, end) {
    // middle = Math.floor((start + end) / 2);
    let sum = start+end;
    if(sum%2 === 0)
    {
        middle = (start+end)/2;
    }
    else {
        middle = ((start+end)+1)/2;
    }
    out.push(middle);
    if (target === middle) return data[middle];
    if (end - 1 === start) return Math.abs(data[start] - target) > Math.abs(data[end] - target) ? data[end] : data[start];
    if (target > data[middle]) return BinarySearch(data, target, middle, end);
    if (target < data[middle]) return BinarySearch(data, target, start, middle);
}

let index = -1;

$(document).ready(function () {


    $(document).on('keypress', '#input', function (e) {

        if (e.keyCode === 13) {
            out = [];
            let target = this.value;
            console.log("input="+target);
            let closestPoint = BinarySearch(data, target, 0, data.length - 1);
            console.log(out);
            console.log(closestPoint);
            out.push(closestPoint);
        }
    });


    $('#next').click(function () {
        index += 1;
        if (index >= out.length) {
            index = 0;
            $('#flipbook').turn("page", out[index] + 2);
            console.log("Value of index is " + index);
            console.log(out[index]);
            // $('#flipbook').turn("page", out[index]);
        }
        else {
            // $('#flipbook').turn("page", out[index]);
            $('#flipbook').turn("page", out[index] + 2);
            console.log("Value of index is " + index);
            console.log(out[index]);
        }
    });

    $('#previous').click(function () {
        index -= 1;
        if (index < 0) {
            index = out.length - 1;
            $('#flipbook').turn("page", out[index] + 2);
            console.log("Value of index is " + index);
            console.log(out[index]);
        }
        else if (index >= out.length) {
            index = index - 1;
            $('#flipbook').turn("page", out[index] + 2);
            console.log("Value of index is " + index);
            console.log(out[index]);
        }
        else {
            $('#flipbook').turn("page", out[index] + 2);
            console.log("Value of index is " + index);
            console.log(out[index]);
        }
    });


});



