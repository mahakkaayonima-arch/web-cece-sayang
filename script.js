const heart = document.getElementById("heart");

const opening = document.getElementById("opening");
const flowers = document.getElementById("flowers");

const envelope = document.getElementById("envelope");


// ======================================
// KLIK HATI
// ======================================

heart.addEventListener("click", () => {

    // efek hati membesar sebelum pindah
    heart.classList.add("clicked");

    setTimeout(() => {

        opening.classList.remove("active");

        flowers.classList.add("active");

    }, 600);

});


// ======================================
// KLIK AMPLOP
// ======================================

envelope.addEventListener("click", () => {

    envelope.classList.toggle("open");

});


// ======================================
// PARTIKEL CAHAYA
// ======================================

function createSparkle() {

    const sparkle = document.createElement("div");

    sparkle.innerHTML = "✦";

    sparkle.style.position = "fixed";

    sparkle.style.left =
        Math.random() * 100 + "vw";

    sparkle.style.top =
        Math.random() * 100 + "vh";

    sparkle.style.color = "white";

    sparkle.style.fontSize =
        Math.random() * 8 + 5 + "px";

    sparkle.style.opacity = "0";

    sparkle.style.pointerEvents = "none";

    sparkle.style.zIndex = "1";

    document.body.appendChild(sparkle);


    sparkle.animate(
        [
            {
                opacity: 0,
                transform: "scale(0)"
            },

            {
                opacity: .8,
                transform: "scale(1)"
            },

            {
                opacity: 0,
                transform: "scale(0)"
            }
        ],
        {
            duration: 1800,
            easing: "ease-in-out"
        }
    );


    setTimeout(() => {
        sparkle.remove();
    }, 1800);
}


// buat sparkle terus
setInterval(createSparkle, 450);

// MUSIC
const bgMusic = document.getElementById("bgMusic");
const playMusic = document.getElementById("playMusic");

playMusic.addEventListener("click", () => {
    bgMusic.play();
    playMusic.innerText = "⏸ Music";
});
