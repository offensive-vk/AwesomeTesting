/**@extends {main.ts} */

window.addEventListener('keydown', (event: KeyboardEvent) => {
    if(event.altKey && event.key == 'KeyV') {
        window.location.href = "https://github.com/offensive-vk/AwesomeTesting/"
    }
});

window.addEventListener('contextmenu', (e: Event) => {
    if(confirm("Huhhh, Looking for Inspect Menu ?")) {
        e.preventDefault();
    }
    alert("Sorry User!");
    e.preventDefault();
})

/**@extends {main.ts} */