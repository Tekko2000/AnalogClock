let dateInfo = new Date();
let hr = dateInfo.getHours() > 12 ? dateInfo.getHours() - 12 : dateInfo.getHours(),
min = dateInfo.getMinutes(),
sec = dateInfo.getSeconds(),
milsec = dateInfo.getMilliseconds();

let hrAngle = hr * 30 + (min * 6 / 12);
let minAngle = min * 6 + (sec * 6 / 60);
let secAngle = sec * 6 + (milsec * 0.36 / 1000);

function setAngle(wrapper,angle) {
    document.querySelector('.' + wrapper).style.transform = 'rotate(' + angle + 'deg)';
}

setAngle('hr-wrapper', hrAngle)
setAngle('min-wrapper', minAngle)
setAngle('sec-wrapper', secAngle)