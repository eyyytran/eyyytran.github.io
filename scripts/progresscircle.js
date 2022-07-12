const circle = document.querySelector('.progress-ring_circle')
const radius = circle.r.baseVal.value
const circumference = radius * 2 * Math.PI

circle.style.strokeDasharray = circumference
circle.style.strokeDashoffset = circumference

const setProgress = percent => {
    const offset = circumference - (percent / 100) * circumference
    circle.style.strokeDashoffset = offset
}
