window.onload = () => {

    const intro = document.getElementById("intro");
    const main = document.getElementById("main-content");

    // petite attente avant début animation
    setTimeout(() => {

        // fade out intro
        intro.classList.add("hide");

        // show main content progressivement
        main.classList.add("show");

    }, 2500); // début animation plus tôt

    // suppression totale après animation
    setTimeout(() => {
        intro.style.display = "none";
    }, 4500);

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");

        heart.innerHTML = "💖";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (4 + Math.random() * 4) + "s";
        heart.style.fontSize = (14 + Math.random() * 20) + "px";

        document.getElementById("fx-layer").appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 8000);
    }

    function createSparkle() {
        const sparkle = document.createElement("div");
        sparkle.classList.add("sparkle");

        const symbols = ["✨", "✦", "✧", "💫"];
        sparkle.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];

        sparkle.style.left = Math.random() * 100 + "vw";
        sparkle.style.animationDuration = (3 + Math.random() * 3) + "s";
        sparkle.style.fontSize = (10 + Math.random() * 18) + "px";

        document.getElementById("fx-layer").appendChild(sparkle);

        setTimeout(() => {
            sparkle.remove();
        }, 6000);
    }

    /* lancement des particules */
    setInterval(createHeart, 350);
    setInterval(createSparkle, 500);


    document.addEventListener("click", (e) => {
        createClickHeart(e);
    });

    function createClickHeart(e) {
        const heart = document.createElement("div");

        heart.innerHTML = "💖";
        heart.style.position = "fixed";
        heart.style.left = e.clientX + "px";
        heart.style.top = e.clientY + "px";
        heart.style.fontSize = "20px";
        heart.style.pointerEvents = "none";
        heart.style.zIndex = "9999";

        heart.style.animation = "pop 0.8s ease-out forwards";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 800);
    }


    document.addEventListener("mousemove", (e) => {
        createTrail(e);
    });

    function createTrail(e) {
        const sparkle = document.createElement("div");

        const symbols = ["✨", "✦", "✧", "💫"];
        sparkle.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];

        sparkle.style.position = "fixed";
        sparkle.style.left = e.clientX + "px";
        sparkle.style.top = e.clientY + "px";

        sparkle.style.fontSize = "14px";
        sparkle.style.pointerEvents = "none";
        sparkle.style.zIndex = "9999";

        sparkle.style.animation = "trailFade 0.8s ease-out forwards";

        document.body.appendChild(sparkle);

        setTimeout(() => {
            sparkle.remove();
        }, 800);
    }


    let current = 0;
    let images = [];

    const img = document.getElementById("carousel-image");
    const progress = document.querySelector(".progress");

    /* récupère les images depuis la page HTML */
    images = window.carouselImages || [];

    /* affichage */
    function show() {

        if (!images.length) return;

        img.classList.add("fade");

        setTimeout(() => {

            img.src = images[current];

            img.classList.remove("fade");

            restartProgress();

        }, 500);

    }

    /* next */
    function next() {

        current = (current + 1) % images.length;

        show();

    }

    /* prev */
    function previous() {

        current = (current - 1 + images.length) % images.length;

        show();

    }

    /* barre */
    function restartProgress() {

        if (!progress) return;

        progress.classList.remove("animate");

        void progress.offsetWidth;

        progress.classList.add("animate");

    }

    /* auto */
    setInterval(() => {

        next();

    }, 6000);

    /* boutons */
    document.querySelector(".right").addEventListener("click", next);
    document.querySelector(".left").addEventListener("click", previous);



    const carousel =

        document.querySelector(
            ".carousel"
        );

    let controlsTimeout;

    /* clic image */

    carousel

        .addEventListener(
            "click",

            () => {

                carousel

                    .classList

                    .toggle(
                        "show-controls"
                    );

                /* reset timer */

                clearTimeout(
                    controlsTimeout
                );

                if (

                    carousel

                        .classList

                        .contains(
                            "show-controls"
                        )

                ) {

                    controlsTimeout =

                        setTimeout(() => {

                            carousel

                                .classList

                                .remove(
                                    "show-controls"
                                );

                        }, 4000);

                }

            });


}


