// setInterval & clearInterval
const ThisInterval = function (str) {
     console.log(str, "Current Date: ", Date.now());
}

clearM = setInterval(ThisInterval, 2000, "Hi Bc");

clearInterval(clearM);