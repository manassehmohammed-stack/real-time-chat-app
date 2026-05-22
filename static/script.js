const socket = io();

function sendMessage() {
    const input = document.getElementById("messageInput");

    socket.send(input.value);

    input.value = "";
}

socket.on("message", function(message) {
    const messages = document.getElementById("messages");

    messages.innerHTML += `<p>${message}</p>`;
});