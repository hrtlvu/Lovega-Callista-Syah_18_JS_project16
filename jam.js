function theTime(){
    let clockElement = document.getElementById('jamdigital')
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();

    // membuat jam selalu 2 digit
    if (h < 10){
        h = "0" + h;
    }
    if (m < 10){
        m = "0" + m;
    }
    if (s < 10){
        s = "0" + s;
    }

    // hh:mm:ss
    let timeString = h + ":" + m + ":" + s;
    clockElement.textContent = timeString;

    // ubah warna border
    if (s % 2 === 0){
        clockElement.style.borderColor = "red"
    } else {
        clockElement.style.borderColor = "blue"
    }
}
window.onload = function() {
    theTime();
    setInterval(theTime, 1000);
}