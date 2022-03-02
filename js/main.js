function changeTimezone(date, ianatz) {

    // suppose the date is 12:00 UTC
    var invdate = new Date(date.toLocaleString('en-US', {
        timeZone: ianatz
    }));

    // then invdate will be 07:00 in Toronto
    // and the diff is 5 hours
    var diff = date.getTime() - invdate.getTime();

    // so 12:00 in Toronto is 17:00 UTC
    return new Date(date.getTime() - diff); // needs to substract

}
  
function currentTime() {
    let date = new Date();
    let westCoast = changeTimezone(date, "America/Tijuana");
    let hh = westCoast.getHours();
    let mm = westCoast.getMinutes();
    let session = "am";

    if(hh == 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "pm";
    }

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    
    let time = hh + " : " + mm + " " + session;

    document.getElementById("currentTime").innerHTML = time;
    let t = setTimeout(function(){ currentTime() }, 1000);
}
currentTime();