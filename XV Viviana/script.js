// Configurar fecha del evento: 6 de junio a las 7:00 PM (19:00)
// Nota: En JavaScript los meses van de 0 (Enero) a 11 (Diciembre), por lo tanto Junio es 5.
// Asumimos el año en curso (o el año de la fiesta, en este caso 2026 según el contexto actual).
const eventDate = new Date(2026, 5, 6, 19, 0, 0).getTime();

// Actualizar el contador cada segundo
const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = eventDate - now;

    // Cálculos de tiempo
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Formatear a dos dígitos (ej. 09 en lugar de 9)
    const formatNumber = (num) => num < 10 ? `0${num}` : num;

    // Actualizar elementos en el DOM
    document.getElementById("days").innerText = formatNumber(days);
    document.getElementById("hours").innerText = formatNumber(hours);
    document.getElementById("minutes").innerText = formatNumber(minutes);
    document.getElementById("seconds").innerText = formatNumber(seconds);

    // Si el contador llega a cero o se pasa de la fecha
    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML = 
            "<div style='font-size:2rem; font-weight:600; text-align:center; background: linear-gradient(to bottom, #ffffff, #ffb6c1); -webkit-background-clip: text; -webkit-text-fill-color: transparent;'>¡El gran día ha llegado!</div>";
        document.querySelector(".countdown-title").style.display = "none";
    }
}, 1000);

// Optimización: asegurar que los videos se reproduzcan si se pausan por los navegadores móviles
document.addEventListener('DOMContentLoaded', () => {
    const videos = document.querySelectorAll('.bg-video');
    videos.forEach(video => {
        // Al interactuar con la pantalla (por ejemplo, al hacer el primer scroll o toque)
        // Forzamos a que los videos sigan reproduciéndose si se pausaron.
        video.play().catch(e => {
            console.log("El auto-play fue prevenido por el navegador:", e);
        });
    });
});
