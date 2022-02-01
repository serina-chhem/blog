import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'
import styled from 'styled-components'

import { QUERY } from 'src/components/Post/PostsCell/PostsCell'

const DELETE_POST_MUTATION = gql`
  mutation DeletePostMutation($id: Int!) {
    deletePost(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 250

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

// const jsonTruncate = (obj) => {
//   return truncate(JSON.stringify(obj, null, 2))
// }

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

// const checkboxInputTag = (checked) => {
//   return <input type="checkbox" checked={checked} disabled />
// }

const PostsListContainer = styled.section`
  margin: 2.5rem 0;
  .post {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 3rem;
    margin-bottom: 2rem;
    position: relative;
  }
  .line {
    width: 100%;
    height: 3px;
    background-color: orange;
    position: absolute;
    bottom: -18px;
  }
  .post-info {
    text-align: left;
    margin-right: 8rem;
    .creationDate {
      font-weight: lighter;
      font-style: italic;
    }
    .readTime {
      font-weight: 500;
      color: orange;
    }
    .preview {
      padding: 2rem 0;
      font-weight: lighter;
      font-size: 1.1rem;
    }
    .readMore {
      text-decoration: none;
      letter-spacing: 0.5px;
      position: relative;
      color: black;
      &:after {
        content: '';
        background-color: orange;
        height: 3px;
        width: 0;
        left: 0rem;
        bottom: -0.1rem;
        transition: 0.3s;
        position: absolute;
      }
      &:hover:after {
        width: 100%;
      }
    }
  }
  .post-image {
    width: 400px;
    height: 270px;
    background-color: green;
    margin-left: 8rem;
  }
`

const PostsList = ({ posts }) => {
  const [deletePost] = useMutation(DELETE_POST_MUTATION, {
    onCompleted: () => {
      toast.success('Post deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete post ' + id + '?')) {
      deletePost({ variables: { id } })
    }
  }

  return (
    <PostsListContainer>
      {posts &&
        posts.map((post) => (
          <article key={post.id} className="post">
            <div className="post-image" />
            <div className="post-info">
              <h2>{truncate(post.title)}</h2>
              <p className="creationDate">{timeTag(post.createdAt)}</p>
              <p className="readTime">6 min</p>
              <p className="preview">{truncate(post.body)}</p>
              <Link
                to={routes.post({ id: post.id })}
                title={'Show post ' + post.id + ' detail'}
                className="readMore"
              >
                Lire plus
              </Link>
            </div>
            <div className="line" />
          </article>
        ))}
    </PostsListContainer>
  )
}

export default PostsList

// <td>
//             <nav className="rw-table-actions">
//               <Link
//                 to={routes.post({ id: post.id })}
//                 title={'Show post ' + post.id + ' detail'}
//                 className="rw-button rw-button-small"
//               >
//                 Show
//               </Link>
//               <Link
//                 to={routes.editPost({ id: post.id })}
//                 title={'Edit post ' + post.id}
//                 className="rw-button rw-button-small rw-button-blue"
//               >
//                 Edit
//               </Link>
//               <button
//                 type="button"
//                 title={'Delete post ' + post.id}
//                 className="rw-button rw-button-small rw-button-red"
//                 onClick={() => onDeleteClick(post.id)}
//               >
//                 Delete
//               </button>
//             </nav>
//           </td>
