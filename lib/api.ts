// Helper functions for making API calls

export async function fetchWithAuth(endpoint: string, options: RequestInit = {}): Promise<any> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const url = `${apiUrl}${endpoint}`;
  
  // Get the token from cookies
  const token = document.cookie.split('; ')
    .find(row => row.startsWith('token='))
    ?.split('=')[1];

  // Merge headers with authorization if token exists
  const headers = {
    'Content-Type': 'application/json',
    ...(token && { 'Authorization': `Bearer ${token}` }),
    ...options.headers,
  };

  try {
    const response = await fetch(url, {
      ...options,
      headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
}