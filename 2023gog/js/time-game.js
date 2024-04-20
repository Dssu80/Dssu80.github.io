
// 倒數計時-距离开始还剩下 - 紅包遊戲
$(document).ready(function () {
    function setTimer() {
        /* enter the event date down there */
        let timeLeft = getTimeLeft(2023, 10, 30, 0, 0, 0, 0);
    
        days.innerHTML = timeLeft[0];
        hrs.innerHTML = timeLeft[1];
        mins.innerHTML = timeLeft[2];
        seconds.innerHTML = timeLeft[3];
    }
    
    getTimeLeft = (year, month, day, hour, minute, second, milisecond) => {
    
        const currentDate = new Date();
        const expectedDate = new Date(year, month, day, hour, minute, second, milisecond);
        const timeLeft = expectedDate.getTime() - currentDate.getTime();
    
        if (timeLeft > 0) {
    
            let s = timeLeft / 1000;
            let mins = s / 60;
            let hrs = mins / 60;
            let days = hrs / 24;
    
            let secondsLeft = Math.floor(s % 60);
            let minsLeft = Math.floor(mins % 60);
            let hrsLeft = Math.floor(hrs % 24);
            let daysLeft = Math.floor(days);
    
            return [daysLeft, hrsLeft, minsLeft, secondsLeft];
    
        } else {
            return ['X', 'X', 'X', 'X'];
        }
    }
    
    const seconds = document.getElementById('game-seconds');
    const days = document.getElementById('game-days');
    const hrs = document.getElementById('game-hrs');
    const mins = document.getElementById('game-mins');
    
    window.onload = setTimer();
    setInterval(setTimer, 1000);
    
});

