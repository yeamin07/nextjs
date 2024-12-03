import Link from 'next/link';
import getAllPosts from '../lib/getAllPosts';

async function Posts() {

const posts = await getAllPosts();


  return (
    <div className='mt-6'>
        <h1>All Posts</h1>

        <ul className='mt-6'>
            {posts.map(post => 
                <li key={post.id}>
                    <Link href={`/posts/${post.id}`}>{post.title}</Link>
                </li>
            )}
        </ul>
    </div>
  )
}

export default Posts