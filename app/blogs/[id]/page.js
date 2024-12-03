import NotFound from "@/app/blogs/[id]/not-found"

const BlogPage = ({params}) => {
    const {id} = params

    if (id >= '3')
      return NotFound()

  return (
    <div className="mt-5">The blog id is: {id}</div>
  )
}

export default BlogPage