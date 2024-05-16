function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function sendMessage() {
    const inputField = document.getElementById('user-input');
    const messageText = inputField.value.trim();

    if (messageText) {
        addMessage('user', messageText);
        inputField.value = '';
        
        // Simulate a bot response
        setTimeout(() => {
            addMessage('bot', 'Welcome to Sunbase LTD. How may i help you?');
        }, 1000);
    }
}

function addMessage(sender, text) {
    const chatMessages = document.getElementById('chat-messages');

    const messageElement = document.createElement('div');
    messageElement.className = `message ${sender}`;
    messageElement.innerText = text;

    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}
