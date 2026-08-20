const API_BASE_URL = 'http://localhost:5070';


export async function getHealth(): Promise<string> 
{
    const response = await fetch(`${API_BASE_URL}/api/health`);

    if (!response.ok)
    {
        throw new Error(`Backend request failed. Status: ${response.status}`);
    }

    return response.text();
}