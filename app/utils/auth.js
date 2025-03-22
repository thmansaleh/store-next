// utils/authUtils.js

// Base URL of the backend API
const BASE_URL = 'http://localhost:5000/api/auth';

// Function to register a new user
export async function registerUser(username, email, password, firstName, lastName) {
    try {
        const response = await fetch(`${BASE_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, email, password, first_name: firstName, last_name: lastName })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || 'Failed to register user.');
        }

        return data;
    } catch (error) {
        console.error('Registration error:', error);
        throw error;
    }
}

// Function to log in a user and store the JWT token
export async function loginUser(email, password) {
    try {
        const response = await fetch(`${BASE_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || 'Failed to login.');
        }

        // Store the JWT token in localStorage or cookies
        localStorage.setItem('jwt_token', data.token);

        return data;
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
}

// Function to log out the user (clear token)
export function logoutUser() {
    localStorage.removeItem('jwt_token');
    console.log('User logged out.');
}

// Function to get the stored JWT token
export function getJwtToken() {
    return localStorage.getItem('jwt_token');
}

// Function to check if the user is authenticated (has JWT token)
export function isAuthenticated() {
    const token = getJwtToken();
    return token !== null;
}

// Function to get the current user data from the JWT token (if needed)
export function getCurrentUser() {
    const token = getJwtToken();
    if (!token) return null;

    // Decode JWT token (you can use a library like jwt-decode here)
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}
