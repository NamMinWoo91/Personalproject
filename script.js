document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

async function sendMessage() {
    const inputField = document.getElementById('user-input');
    const userMessage = inputField.value.trim();
    if (userMessage === "") return;

    addMessageToChat(userMessage, 'user');
    inputField.value = "";

    const botMessage = await fetchBotResponse(userMessage);
    addMessageToChat(botMessage, 'bot');
}

function addMessageToChat(message, sender) {
    const chatLog = document.getElementById('chat-log');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
    messageElement.textContent = message;
    chatLog.appendChild(messageElement);
    chatLog.scrollTop = chatLog.scrollHeight;
}

async function fetchBotResponse(userMessage) {
    try {
        console.log('Sending request to API with message:', userMessage);
        const response = await fetch('https://open-api.jejucodingcamp.workers.dev/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                messages: [
                    {
                        role: 'user',
                        content: userMessage
                    }
                ]
            })
        });

        console.log('API response status:', response.status);
        if (response.ok) {
            const data = await response.json();
            console.log('API response data:', data);

            if (data.choices && data.choices.length > 0) {
                return data.choices[0].message.content;
            } else {
                console.error('Error: No choices in API response');
                return 'Error: No response from the API.';
            }
        } else {
            console.error('Error: API response not ok');
            return 'Error: Failed to communicate with the API.';
        }
    } catch (error) {
        console.error('Error:', error);
        return 'Error: An unexpected error occurred.';
    }
}
