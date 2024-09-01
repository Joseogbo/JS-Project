function clock() {
    const hour = document.querySelector('.hour');
    const minutes = document.querySelector('.minutes');
    const seconds = document.querySelector('.seconds');

    const h = new Date().getHours();
    const m = new Date().getMinutes();
    const s = new Date().getSeconds();

    hour.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
}

setInterval(clock, 1000);
