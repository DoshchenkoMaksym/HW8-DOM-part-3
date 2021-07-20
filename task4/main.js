let clock = document.querySelector('.clock');

function clocks() {
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    if (clock.classList.contains('full')){
        clock.innerHTML = `${hours}:${minutes}:${seconds}`;
    } else (
        clock.innerHTML = `${hours}:${minutes}`
    );
}

clock.addEventListener('click', () => {
    clock.classList.toggle('full');
})

setInterval(clocks, 1000);

