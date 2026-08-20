const API_BASE_URL = 'http://localhost:5070';

export type Post = {
    id: number;
    title: string;
    description: string;
    category: string;
    content: string;
    author: string;
    slug: string;
    updatedAt: string;
}

export async function getHealth(): Promise<string> 
{
    const response = await fetch(`${API_BASE_URL}/api/health`);

    if (!response.ok)
    {
        throw new Error(`Backend request failed. Status: ${response.status}`);
    }

    return response.text();
}

export async function getPosts(): Promise<Post[]>
{
    const response = await fetch(`${API_BASE_URL}/api/posts`);

    if (!response.ok)
    {
        throw new Error(`Backend request failed. Status: ${response.status}`);
    }

    return response.json();
}

export async function getPostBySlug(slug: string): Promise<Post>
{
    const response = await fetch(`${API_BASE_URL}/api/posts/${encodeURIComponent(slug)}`);

    if (response.status === 404)
    {
        throw new Error(`Post not found: ${slug}`);
    }

    if (!response.ok)
    {
        throw new Error(`Backend request failed. Status: ${response.status}`);
    }

    return response.json();
}
