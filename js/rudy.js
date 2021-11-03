timer = null; // stores ID of interval timer
function delayMsg2() {
    if (timer === null) {
        timer = setInterval((function(){document.getElementById("output").innerHTML += "Rudy!"}), 2000);
    }else {
        clearInterval(timer);
        timer = null;
    }
}
