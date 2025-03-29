async function createOrder(orderData) {
    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });
      if (!response.ok) {
        throw new Error('Failed to create order');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error creating order:', error);
    }
  }

  async function getOrderById(orderId) {
    try {
      const response = await fetch(`/api/orders/${orderId}`);
      if (!response.ok) {
        throw new Error('Order not found');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error fetching order with ID ${orderId}:`, error);
    }
  }
  async function getOrderItems(orderId) {
    try {
      const response = await fetch(`/api/orders/${orderId}/items`);
      if (!response.ok) {
        throw new Error('No items found for this order');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error fetching items for order ${orderId}:`, error);
    }
  }
  
  
  