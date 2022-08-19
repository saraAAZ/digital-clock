function displayclock(){
    let dateTime = new Date();
    let hours = dateTime.getHours();
    let minutes = dateTime.getMinutes();
    let seconds = dateTime.getSeconds();
    let am_pm = document.getElementById('am-pm');
    if(hours >= 12){
        am_pm.innerHTML = 'pm';
    }else{
        am_pm.innerHTML = 'am';
    }
    //when it will become 24
    if(hours > 12){
        hours = hours - 12;
    }
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
}
setInterval(displayclock, 10);