function createBalloon() {
    const balloon = document.createElement("div");
    balloon.className = "balloon";
    balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
    balloon.style.left = `${Math.random() * 100}vw`;
    balloon.style.animationDuration = `${3 + Math.random() * 3}s`;
    document.body.appendChild(balloon);
    setTimeout(() => balloon.remove(), 5000);
}
setInterval(createBalloon, 500);

function blowCandle() {
    document.getElementById('flame').style.display = 'none';
    document.querySelector('.candle').style.boxShadow = 'none'; // Hilangkan cahaya lilin
}
