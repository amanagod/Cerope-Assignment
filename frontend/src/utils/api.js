export async function Post(endpoint, data) {
    const BASE_URL =   import.meta.env.VITE_BASE_URL?? 'http://localhost:5000/api' ;  ////////////add env variable here  
const url = `${BASE_URL}${endpoint}`;
console.log(url);
    try {
        const headers = {
            'Content-Type': 'application/json',
        }
        const apiKey = import.meta.env.VITE_API_KEY??null;
      if (apiKey) {
        headers['X-API-Key'] = apiKey;
      }
        const response = await fetch(url, {
            method: 'POST',
            headers,
            body: JSON.stringify(data),           
        });

        const resData = await response.json();
        // Check if the response status is not OK (200-299)
        if (!response.ok) {
            let errorData;
            try {
                // Attempt to parse JSON error message from the server
                errorData = await resData
            } catch (e) {
                // If parsing fails, fall back to a generic message
                errorData = { message: `Server error: ${response.statusText}` };
            }

            // Throw an error that can be caught by the calling function
            throw new Error(errorData.message || `Request failed with status ${response.status}`);
        }

        // If successful, parse and return the JSON response
        const responseData = await resData
        return responseData;

    } catch (error) {
        // Log the error for debugging purposes
        console.error(`API Call to ${url} failed:`, error.message);

        // Re-throw the error to be handled by the component (e.g., display an alert/error message)
        throw error;
    }
}