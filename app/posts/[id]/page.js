import getAllPosts from '@/app/lib/getAllPosts'
import getPost from '@/app/lib/getPost'
import getPostComment from '@/app/lib/getPostComment'


export async function generateMetadata({params}) {
    const {id} = params
    const post = await getPost(id)

    return {
        title: post.title,
        description: post.body
    }
}


async function PostPage({params}) {
    const {id} = params
    // postPromise & commentPromise ইউজ করার কারণ হচ্ছে একসাথে ২টা parallely get করার জন্য
    const postPromise = getPost(id) 
    const commentPromise = getPostComment(id)

    const [post, comments] = await Promise.all([postPromise, commentPromise])

  return (
    <div className='mt-6'>
        <h2>title: {post.title}</h2>
        <p className='mt-3'>description: {post.body}</p>
        <hr/>

        <div className='mt-10'>
        <h1>Comments</h1>
        <ul>
            {comments.map(comment => 
                <li className='mb-2' key={comment.id}>{comment.body}</li>
            )}
        </ul>
        </div>
    </div>
  )
}

export default PostPage


export async function generateStaticParams() {
    const posts = await getAllPosts()

    return posts.map(post => ({
        id: post.id.toString()
    }))
}