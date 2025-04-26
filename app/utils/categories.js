export async function getAllCategories() {
    try {
      const response = await fetch('/api/categories');
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
  const response = await fetch(`/api/categories/slug/${slug}/products`);
  
  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || 'Failed to fetch category products');
  }

  const data = await response.json();
  
  return {
    category: {
      slug: data.category_slug,
      name: data.category_name
    },
    products: data.products.map(product => ({
      id: product.product_id,
      name: product.name,
      price: product.price,
      slug: product.slug,
      image: product.image_url
    }))
  };
}