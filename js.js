var headwon = 0;
var tailwon = 0;
var timeflip = 0;
var heads = 0;
var tails = 0;

document.onload = function() {
    headwon = 0;
    tailwon = 0;
    timeflip = 0;
};

function flipacoin() {
    var hr = document.getElementById("heads-number");
    var tr = document.getElementById("tails-number");
    var htf = document.getElementsByClassName("mart-0")[0];
    var ttf = document.getElementsByClassName("mart-0")[1];
    var hw = document.getElementsByClassName("hw")[0];
    var tw = document.getElementsByClassName("tw")[0];
    var tf = document.getElementsByClassName("tf")[0];
    var rath = document.getElementById("headratio");
    var ratt = document.getElementById("tailratio");
    var inp = document.getElementsByTagName("input")[0].value;

    if (inp > 999999) {
        document.getElementsByClassName("error")[0].style.display = "block";
        return;
    } else {
        document.getElementsByClassName("error")[0].style.display = "none";
    }
    heads = tails = 0;

    htf.innerHTML = ttf.innerHTML = inp;

    for (let index = 0; index < inp; index++) {
        if(Math.floor(Math.random() * 2) == 0) {
            heads = heads + 1;
        } else {
            tails = tails + 1;
        }
    }

    hr.innerHTML = heads;
    tr.innerHTML = tails;

    if (heads > tails) {
        headwon = headwon + 1;
    }
    if (tails > heads) {
        tailwon++;
    }
    if (tails !== heads) {
        timeflip++;
    }

    hw.innerHTML = headwon;
    tw.innerHTML = tailwon;

    

    tf.innerHTML = timeflip;

    rath.innerHTML = ((heads / inp) * 100).toFixed(4);
    ratt.innerHTML = ((tails / inp) * 100).toFixed(4);
    
}

function resetbtn() {
    var hr = document.getElementById("heads-number");
    var tr = document.getElementById("tails-number");
    var htf = document.getElementsByClassName("mart-0")[0];
    var ttf = document.getElementsByClassName("mart-0")[1];
    var hw = document.getElementsByClassName("hw")[0];
    var tw = document.getElementsByClassName("tw")[0];
    var tf = document.getElementsByClassName("tf")[0];
    var rath = document.getElementById("headratio");
    var ratt = document.getElementById("tailratio");
    heads = tails = headwon = tailwon = timeflip = 0;
    hr.innerHTML = tr.innerHTML = htf.innerHTML = ttf.innerHTML = hw.innerHTML = tw.innerHTML = tf.innerHTML = rath.innerHTML = ratt.innerHTML = 0; 
}