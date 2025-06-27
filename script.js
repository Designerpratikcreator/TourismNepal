<div id="chatbox-container">
  <div id="chat-header">Ask Nepal Tourism AI</div>
  <div id="chat-messages"></div>
  <div id="chat-input-container">
    <input type="text" id="chat-input" placeholder="Ask something..." />
    <button id="send-btn">Send</button>
  </div>
</div>

<script>
  const input = document.getElementById('chat-input');
  const sendBtn = document.getElementById('send-btn');
  const messages = document.getElementById('chat-messages');

  function addMessage(text, sender = 'user') {
    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble ' + (sender === 'user' ? 'user-msg' : 'ai-msg');
    bubble.textContent = text;
    messages.appendChild(bubble);
    messages.scrollTop = messages.scrollHeight;
  }

  function fakeAIResponse(userMsg) {
    // Replace this with real AI API call if desired
    return `You asked about: "${userMsg}". Learn more at visitnepal2025.com!`;
  }

  sendBtn.onclick = () => {
    const userMsg = input.value.trim();
    if (!userMsg) return;
    addMessage(userMsg, 'user');
    input.value = '';
    setTimeout(() => {
      addMessage(fakeAIResponse(userMsg), 'ai');
    }, 500);
  };
</script>
