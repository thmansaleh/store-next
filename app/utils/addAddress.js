const host = process.env.API_HOST || 'https://your-backend.com';

async function addAddress(user_id, street, city, state, country, postal_code, is_primary = false, options = {}) {
    try {
        const response = await fetch(`${host}/api/addresses`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user_id, street, city, state, country, postal_code, is_primary }),
            ...options,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error adding address:', error);
        throw error;
    }
}
