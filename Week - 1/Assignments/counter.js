let maxOfCounter = 2;

function func() {
    console.log(maxOfCounter);
    maxOfCounter--;
    if (maxOfCounter < 0) {
        clearInterval(intervalID);
    }
}

let intervalID = setInterval(func, 1000);

