export function getOrCreateSessionId() {
    const localStorageKey = 'session_id';
    
    // Try to get existing session ID from localStorage
    let sessionId = localStorage.getItem(localStorageKey);
    
    if (!sessionId) {
        // Generate a new session ID if one doesn't exist
        sessionId = generateSessionId();
        
        // Store the new session ID in localStorage
        localStorage.setItem(localStorageKey, sessionId);
    }
    
    return sessionId;
}

function generateSessionId() {
    // Generate a random string with a combination of timestamp and random characters
    const timestamp = Date.now().toString(36);
    const randomPart = Math.random().toString(36).substring(2, 10);
    return `${timestamp}-${randomPart}`;
}

// Usage example:
const sessionId = getOrCreateSessionId();
console.log('Session ID:', sessionId);