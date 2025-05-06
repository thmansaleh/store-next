
export async function getUsername(token) {
  try {
    if (!token) return null;
    
    const response = await fetch(`/api/get-username?token=${encodeURIComponent(token)}`);
    const data = await response.json();
    
    return data.success ? { name: data.name, userId: data.userId } : null;
  } catch (error) {
    console.error("Failed to fetch username:", error);
    return null;
  }
}