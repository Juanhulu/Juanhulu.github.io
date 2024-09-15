async function send_ai() {
    var pesan = document.getElementById("pesan");
    var container = document.getElementById("chat-container");
    var button = document.getElementById("button-send");

    if (!pesan.value) {
        button.disabled = true;
        console.log("Button disabled");
        button.style.backgroundColor = "gray";
        button.style.color = "black";
    } else {
        var response = await GetResponse(pesan.value);

        // Buat elemen chat dari user
        var mychat = document.createElement("p");
        mychat.textContent = pesan.value;
        mychat.classList.add("chat-saya");
        container.appendChild(mychat);

        // Buat elemen chat dari bot
        var chatbot = document.createElement("p");
        chatbot.textContent = response ? response : "Terjadi kesalahan!";
        chatbot.classList.add("chat-bot");
        container.appendChild(chatbot);
        pesan.value = "";
    }
}

async function GetResponse(pesan) {
    var endpoint = "https://c-juanhulu.glitch.me/openai";
    var data = JSON.stringify({ "content": pesan });

    try {
        var response = await fetch(endpoint, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: data
        });
        return await response.text();
    } catch (error) {
        console.error("Error: ", error);
        return "Terjadi kesalahan " + error;
    }
}
