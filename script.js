// script.js

// Function to handle sending user messages
function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    const chatBox = document.getElementById('chat-box');
  
    // If input is empty, don't send a message
    if (userInput.trim() === "") {
      return;
    }
  
    // Add user message to chat with slide-in effect
    const userMessage = document.createElement('div');
    userMessage.classList.add('message', 'user-msg');
    userMessage.textContent = userInput;
    chatBox.appendChild(userMessage);
  
    // Clear input field
    document.getElementById('user-input').value = '';
  
    // Generate bot's response with typing effect
    const botResponse = generateBotResponse(userInput);
  
    // Create a "typing..." message for the bot
    const typingMessage = document.createElement('div');
    typingMessage.classList.add('message', 'bot-msg', 'typing-effect');
    typingMessage.textContent = "Typing...";
    chatBox.appendChild(typingMessage);
  
    // Simulate the bot's typing delay
    setTimeout(() => {
      typingMessage.textContent = ""; // Clear "Typing..." text
      const botMessage = document.createElement('div');
      botMessage.classList.add('message', 'bot-msg');
      botMessage.textContent = botResponse;
      chatBox.appendChild(botMessage);
  
      // Scroll chat to the bottom after message is added
      chatBox.scrollTop = chatBox.scrollHeight;
    }, 2000); // The bot takes 2 seconds to "type" its response
  }
  
  // Function to generate bot responses
  function generateBotResponse(userInput) {
    const lowerCaseInput = userInput.toLowerCase();
  
    // Predefined responses based on the user input
    if (lowerCaseInput.includes("hi") || lowerCaseInput.includes("hello")) {
      return "Hello! How can I assist you today?";
    } else if (lowerCaseInput.includes("how are you")) {
      return "I'm doing great, thank you for asking!";
    } else if (lowerCaseInput.includes("bye")) {
      return "Goodbye! Have a great day!";
    } else if (lowerCaseInput.includes("your name")) {
      return "I'm your friendly chatbot!";
    } else {
      return "Sorry, I didn't understand that. Can you please ask something else?";
    }
  }
  
  // Listen for the Enter key press to send the message
  document.getElementById('user-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      sendMessage();
    }
  });
  