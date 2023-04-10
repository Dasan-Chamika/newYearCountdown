let cDate;
let cDay;
let cMonth;
let cHours;
let cMinutes;
let cSeconds;
let nYear;
let cYear;
let daysPerYear;
let daysFeb;
let daysLeft;
let fHours;
let fMin;
let fSec;
let mode;


if ( localStorage.getItem("preMode") == null ){

    mode = 0;

} else if ( localStorage.getItem("preMode") == 0 ) {

    mode = 0;
    document.body.style.backgroundImage ="url(images/nightmode.jpg)";
    document.getElementById("main").style.color = "white";
    document.getElementById("footer").style.backgroundColor = "white";
    document.getElementById("footer").style.color = "black";
    document.getElementById("bulb-icon").className = "fa-regular fa-lightbulb";
    document.getElementById("bulb-icon").style.color = "white";

} else {

    mode = 1;
    document.body.style.backgroundImage ="url(images/bg.jpg)";
    document.getElementById("main").style.color = "black";
    document.getElementById("footer").style.backgroundColor = "black";
    document.getElementById("footer").style.color = "white";
    document.getElementById("bulb-icon").className = "fa-solid fa-lightbulb";
    document.getElementById("bulb-icon").style.color = "black";


}


let interval = window.setInterval(function(){

    cDate = new Date();
    cYear=cDate.getFullYear();
    nYear = cYear + 1;
    cDay = cDate.getDate();
    cHours = cDate.getHours() + 1;
    cMinutes = cDate.getMinutes();
    cSeconds = cDate.getSeconds();
    cMonth = cDate.getMonth() + 1;

    
    document.getElementById("nxtYear").innerHTML = nYear;

    if ( cYear % 4 == 0){

        daysPerYear = 366;
        daysFeb = 29;
    } else {

        daysPerYear = 365;
        daysFeb = 28;
    }

    // console.log(cMonth); <== use for testing

    switch(cMonth) {
        
        case 1:

            daysLeft = 365;
            break;

        case 2:

            daysLeft = 365 - ( 31 );
            break;

        case 3:
            
            daysLeft = 365 - ( 31 + daysFeb);
            break;

        case 4:
            
            daysLeft = 365 - ( 62 + daysFeb);
            break;       

        case 5:
            
            daysLeft = 365 - ( 92 + daysFeb);
            break;

        case 6:
            
            daysLeft = 365 - ( 123 + daysFeb);
            break;

        case 7:
            
            daysLeft = 365 - ( 153 + daysFeb);
            break;

        case 8:
            
            daysLeft = 365 - ( 184 + daysFeb);
            break;

        case 9:
            
            daysLeft = 365 - ( 215 + daysFeb);
            break;

        case 10:
            
            daysLeft = 365 - ( 245 + daysFeb);
            break;

        case 11:
            
            daysLeft = 365 - ( 276 + daysFeb);
            break;

        case 12:
            
            daysLeft = 365 - ( 306 + daysFeb);
            break;

    }

    fHours = 24 - cHours;
    fMin = 60 - cMinutes;
    fSec = 60 - cSeconds;

    document.getElementById("days").innerHTML = daysLeft - cDay;
    document.getElementById("hours").innerHTML =  timeFormat( fHours );
    document.getElementById("minutes").innerHTML = timeFormat( fMin ); 
    document.getElementById("seconds").innerHTML = timeFormat( fSec );


    function timeFormat ( time ) {
        return time < 10 ? ` 0${time}` : time;
    }

}, 1000);



function nightMode () {

    switch ( mode ){

        case 0:

            localStorage.setItem("preMode", mode);  
            mode = 1;
            document.body.style.backgroundImage ="url(images/nightmode.jpg)";
            document.getElementById("main").style.color = "white";
            document.getElementById("footer").style.backgroundColor = "white";
            document.getElementById("footer").style.color = "black";
            document.getElementById("bulb-icon").className = "fa-regular fa-lightbulb";
            document.getElementById("bulb-icon").style.color = "white";

            break;

        case 1:
            
            localStorage.setItem("preMode", mode);            
            mode = 0;
            document.body.style.backgroundImage ="url(images/bg.jpg)";
            document.getElementById("main").style.color = "black";
            document.getElementById("footer").style.backgroundColor = "black";
            document.getElementById("footer").style.color = "white";
            document.getElementById("bulb-icon").className = "fa-solid fa-lightbulb";
            document.getElementById("bulb-icon").style.color = "black";

            break;
        

    }

}