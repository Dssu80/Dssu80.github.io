// 倒數計時-距離結束剩下 - 賭神
$(document).ready(function () {
    function setTimer() {
        /* enter the event date down there */
        let timeLeft = getTimeLeft(2023, 10, 20, 0, 0, 0, 0);
    
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
    
    const days = document.getElementById('days');
    const hrs = document.getElementById('hrs');
    const mins = document.getElementById('mins');
    const seconds = document.getElementById('seconds');

    window.onload = setTimer();
    setInterval(setTimer, 1000);
    
});


// 倒數計時-距离年中赛开始还剩下 - 年中賽

$(document).ready(function () {
    function setTimer() {
        /* enter the event date down there */
        let timeLeft = getTimeLeft(2023, 3, 15, 0, 0, 0, 0);
    
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
    
    const days = document.getElementById('semi-days');
    const hrs = document.getElementById('semi-hrs');
    const mins = document.getElementById('semi-mins');
    const seconds = document.getElementById('semi-seconds');
    
    window.onload = setTimer();
    setInterval(setTimer, 1000);
    
});


// 倒數計時-距离決赛开始还剩下 - 總決賽
$(document).ready(function () {
    function setTimer() {
        /* enter the event date down there */
        let timeLeft = getTimeLeft(2023, 3, 15, 0, 0, 0, 0);
    
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
    
    const days = document.getElementById('final-days');
    const hrs = document.getElementById('final-hrs');
    const mins = document.getElementById('final-mins');
    const seconds = document.getElementById('final-seconds');
    
    window.onload = setTimer();
    setInterval(setTimer, 1000);
    
});