const playlists = [

    "https://open.spotify.com/embed/playlist/5rLMcqfZpKxq0gVzs6XELP?si=CDm47TTkSUV59M4_-7-A&pi=hvyikEQQQTqvs"

];

const player =
    document.getElementById(
        "spotify-player"
    );

player.src =
    playlists[
    Math.floor(
        Math.random()
        *
        playlists.length
    )
    ];

document
    .getElementById(
        "spotify-toggle"
    )

    .addEventListener(
        "click",
        () => {

            document

                .getElementById(
                    "spotify-content"
                )

                .classList

                .toggle(
                    "open"
                );

        });