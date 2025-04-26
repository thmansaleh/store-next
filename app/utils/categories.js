import { API_BASE_URL } from "../urls";

export async function getAllCategories() {
    try {
      const response = await fetch(`${API_BASE_URL}//categories`);
      if (!response.ok) {
        throw new Error('Failed to fetch categories');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  }
  

export async function getCategoryProducts(slug) {
  const response = await fetch(`${API_BASE_URL}/categories/slug/${slug}/products`);
  
  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    return {error:'no'}
  }

  const data = await response.json();
  
  return {
    
    category: {
      slug: data.category_slug,
      name: data.category_name
    },
    
    products: data.products.map(product => ({
      product_id: product.product_id,
      name: product.name,
      price: product.price,
      description: product.description,
      slug: product.slug,
      image_url: product.image_url
    }))
  };
}