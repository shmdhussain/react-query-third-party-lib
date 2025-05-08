import { useQuery } from '@tanstack/react-query';

interface Post {
    id: number;
    title: string;
    userId: number;
}


export function useFetchIds(count: number = 5) {
    return useQuery({
        queryKey: ['randomIds', count],
        queryFn: async () => {
            // Fetch posts from JSONPlaceholder (free API)
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            if (!response.ok) {
                throw new Error(`Failed to fetch posts: ${response.status}`);
            }

            const posts:Post[] = await response.json();

            // Get random posts
            const randomPosts = [...posts]
                .sort(() => 0.5 - Math.random())
                .slice(0, count);

            // Extract just the IDs
            return randomPosts.map(post => post.id);
        },
        staleTime: 5 * 60 * 1000, // 5 minutes
    });
}
