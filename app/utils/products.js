const host = process.env.API_HOST || 'https://your-backend.com';

export async function getProducts(options = {}) {
    try {
        const response = await fetch(`${host}/api/products`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            ...options,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}

export async function getProductsByCategory(categoryId, options = {}) {
    try {
        const response = await fetch(`${host}/api/products/category/${categoryId}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            ...options,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching products by category:', error);
        throw error;
    }
}



export async function getProductImages(product_id) {
    try {
        const response = await fetch(`${host}/api/images/${product_id}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching product images:', error);
        throw error;
    }
}




export async function getProductsBySeller(sellerId, options = {}) {
    try {
        const response = await fetch(`${host}/api/products/seller/${sellerId}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            ...options,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching products by seller:', error);
        throw error;
    }
}
