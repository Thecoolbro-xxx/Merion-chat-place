function register() {
    let name = document.getElementById("studentName").value;
    let father = document.getElementById("fatherName").value;
    let mother = document.getElementById("motherName").value;
    let role = document.getElementById("role").value;

    if (name && father && mother) {
        localStorage.setItem("userName", name);
        localStorage.setItem("role", role);
        document.getElementById("register").style.display = "none";
        document.getElementById("chatSection").style.display = "block";
    } else {
        alert("Please fill in all fields.");
    }
}

function sendMessage() {
    let message = document.getElementById("messageInput").value;
    let user = localStorage.getItem("userName");
    let role = localStorage.getItem("role");
    
    if (message && !containsBadWords(message)) {
        let chatBox = document.getElementById("chatBox");
        let newMessage = document.createElement("p");
        newMessage.innerHTML = (role === "teacher" ? "<span class='teacher'>" + user + " (Teacher): </span>" : "<span>" + user + ": </span>") + message;
        chatBox.appendChild(newMessage);
        document.getElementById("messageInput").value = "";
        chatBox.scrollTop = chatBox.scrollHeight;
    } else {
        alert("Inappropriate message or empty message.");
    }
}

function containsBadWords(message) {
    let badWords = ["badword1", "badword2"]; // Add actual bad words
    return badWords.some(word => message.toLowerCase().includes(word));
}
