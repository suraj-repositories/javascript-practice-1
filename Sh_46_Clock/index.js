
const myLabel = document.getElementById("myLabel");

update();
setInterval(update,1000);

function update(){

    let date = new Date();
    myLabel.innerHTML = formatTime(date);

    function formatTime(){
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let amOrPm = hours>= 12 ? "pm":"am";

        hours = (hours % 12) || 12;

        hours = formatzeros(hours);
        minutes = formatzeros(minutes);
        seconds = formatzeros(seconds);

        return `${hours}:${minutes}:${seconds} ${amOrPm}`;
    }
    function formatzeros(time){
        time = time.toString();
        return time.length < 2 ? "0" + time : time;
    }
}