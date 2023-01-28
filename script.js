function dateTime() {
    let FullDate = new Date();
    let hr = FullDate.getHours();
    let min = FullDate.getMinutes();
    let sec = FullDate.getSeconds();
    let aa = document.getElementById("AmPm")

    if (hr => 12) {
        aa.innerHTML = "PM"
    }else{
        aa.innerHTML = "AM"
    }
    if (hr > 12) {
        hr = hr -12;
    }
    if(hr < 10){
        hr = "0" + hr
    }
    document.getElementById("hr").innerHTML = hr;
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;

}
setInterval(dateTime, 10);