/**
 * Ring2All Documentation Portal
 * AI Chat Widget
 */

document.addEventListener('DOMContentLoaded', function () {
    initChat();
});

let threadId = null;

function initChat() {
    const widget = document.getElementById('chat-widget');
    const toggle = document.getElementById('chat-toggle');
    const panel = document.getElementById('chat-panel');
    const closeBtn = document.getElementById('chat-close');
    const minimizeBtn = document.getElementById('chat-minimize');
    const input = document.getElementById('chat-input');
    const sendBtn = document.getElementById('chat-send');
    const messages = document.getElementById('chat-messages');

    if (!widget || !toggle || !panel) return;

    // Toggle chat panel
    toggle.addEventListener('click', () => {
        panel.classList.toggle('open');
        if (panel.classList.contains('open')) {
            input?.focus();
        }
    });

    // Close button
    closeBtn?.addEventListener('click', () => {
        panel.classList.remove('open');
    });

    // Minimize button
    minimizeBtn?.addEventListener('click', () => {
        panel.classList.remove('open');
    });

    // Auto-resize textarea
    input?.addEventListener('input', () => {
        input.style.height = 'auto';
        input.style.height = Math.min(input.scrollHeight, 120) + 'px';

        // Enable/disable send button
        sendBtn.disabled = !input.value.trim();
    });

    // Send on Enter (but Shift+Enter for newline)
    input?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });

    // Send button click
    sendBtn?.addEventListener('click', sendMessage);

    async function sendMessage() {
        const text = input?.value.trim();
        if (!text) return;

        // Clear input
        input.value = '';
        input.style.height = 'auto';
        sendBtn.disabled = true;

        // Add user message
        addMessage(text, 'user');

        // Show typing indicator
        const typingId = showTyping();

        try {
            const response = await fetch('/api/assistant.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: text,
                    threadId: threadId
                })
            });

            if (!response.ok) {
                throw new Error('Failed to get response');
            }

            const data = await response.json();

            // Save thread ID for conversation continuity
            if (data.threadId) {
                threadId = data.threadId;
            }

            // Remove typing indicator
            removeTyping(typingId);

            // Add assistant message
            addMessage(data.message, 'assistant');

        } catch (err) {
            console.error('Chat error:', err);
            removeTyping(typingId);
            addMessage('Sorry, I encountered an error. Please try again.', 'assistant', true);
        }
    }

    function addMessage(text, role, isError = false) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `chat-message ${role}`;

        const avatarIcon = role === 'user' ? 'user' : 'bot';

        // Parse markdown in assistant messages
        const content = role === 'assistant' ? parseSimpleMarkdown(text) : escapeHtml(text);

        msgDiv.innerHTML = `
            <div class="chat-avatar">
                <i data-lucide="${avatarIcon}"></i>
            </div>
            <div class="chat-bubble ${isError ? 'error' : ''}">
                ${content}
            </div>
        `;

        messages?.appendChild(msgDiv);
        messages?.scrollTo({ top: messages.scrollHeight, behavior: 'smooth' });

        // Re-create Lucide icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    function showTyping() {
        const id = 'typing-' + Date.now();
        const typingDiv = document.createElement('div');
        typingDiv.id = id;
        typingDiv.className = 'chat-message assistant';
        typingDiv.innerHTML = `
            <div class="chat-avatar">
                <i data-lucide="bot"></i>
            </div>
            <div class="chat-bubble">
                <div class="chat-typing">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        `;

        messages?.appendChild(typingDiv);
        messages?.scrollTo({ top: messages.scrollHeight, behavior: 'smooth' });

        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }

        return id;
    }

    function removeTyping(id) {
        document.getElementById(id)?.remove();
    }
}

/**
 * Simple markdown parser for chat messages
 */
function parseSimpleMarkdown(text) {
    // Escape HTML first
    let html = escapeHtml(text);

    // Bold
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

    // Italic
    html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');

    // Inline code
    html = html.replace(/`([^`]+)`/g, '<code>$1</code>');

    // Code blocks
    html = html.replace(/```(\w*)\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>');

    // Links
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>');

    // Line breaks
    html = html.replace(/\n/g, '<br>');

    // Wrap in paragraphs
    const paragraphs = html.split(/<br><br>/);
    if (paragraphs.length > 1) {
        html = paragraphs.map(p => `<p>${p}</p>`).join('');
    }

    return html;
}

/**
 * Escape HTML special characters
 */
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
