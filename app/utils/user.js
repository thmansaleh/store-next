import { API_BASE_URL } from "../urls";
export async function getUsername(token) {
  try {
    if (!token) return null;
    
    const response = await fetch(`${API_BASE_URL}/auth/get-username?token=${token}`);
    const data = await response.json();
    
    return data.success ? { name: data.name, userId: data.userId } : null;
  } catch (error) {
    console.error("Failed to fetch username:", error);
    return null;
  }
}