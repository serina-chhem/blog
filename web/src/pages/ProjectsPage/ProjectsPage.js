import { MetaTags } from '@redwoodjs/web'
// import BlogPostsCell from 'src/components/BlogPostsCell/BlogPostsCell'
import PostsCell from 'src/components/Post/PostsCell'

const ProjectsPage = () => {
  return (
    <>
      <MetaTags title="Projects" description="Projects page" />

      {/* <BlogPostsCell /> */}
      <PostsCell />
    </>
  )
}

export default ProjectsPage
