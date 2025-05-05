const { API_BASE_URL } = require("../urls");

  export async function search(q) {
    try {
        const response = await fetch(`${API_BASE_URL}/search?q=${q}`)
            if (!response.ok) {
        throw new Error('No items found for this order');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error fetching items for order ${orderId}:`, error);
    }
  }
  
  
  