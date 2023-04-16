var input = document.getElementById("myInput");
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        window.open("https://www.youtube.com/watch?v=BBJa32lCaaY");
    }
});