var cookies = document.querySelector('.cookie-alert');

function removeCookie() {
    cookies.remove();
}

function celToFarh(temp) {
    return Math.round(9 / 5 * temp + 32);
}

function farhToCel(temp) {
    return Math.round(5 / 9 * (temp - 32));
}

function pickTemp(element) {
    console.log(element.value)
    for(var i=1; i<9; i++) {
        var temp = document.querySelector('#temp'+ i);
        var tempFar = parseInt(temp.innerText);
        if (element.value == "°C") {
            temp.innerText = farhToCel(tempFar);
        }
        else {
            temp.innerText = celToFarh(tempFar);
        }
        console.log(tempFar);
    }
}

function alertWeather() {
    alert('Loading Weather Report');
}


