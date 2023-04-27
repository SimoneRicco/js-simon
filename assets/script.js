
function countDown() {
    let now = new Date();
    let finalDate = new Date(2023, 04, 28, 9, 30, 0);
    let difference = finalDate.getTime() - now.getTime();

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    let textDay = Math.floor(difference / day);
    let textHour = Math.floor((difference % day) / hour);
    let textMinute = Math.floor((difference % hour) / minute);
    let textSecond = Math.floor((difference % minute) / second);
    
    document.querySelector(".time-missing").innerHTML = `Countdown: ${textDay}, ${textHour}, ${textMinute}, ${textSecond}`;
}
setInterval(countDown, 1000);
