const host = process.env.API_HOST || 'https://your-backend.com';

async function getCategories(options = {}) {
    try {
        const response = await fetch(`${host}/api/categories`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            ...options,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
    }
}
