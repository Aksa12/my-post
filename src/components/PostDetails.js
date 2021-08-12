import {useState, useEffect} from 'react';
import { Link, Redirect, useParams} from 'react-router-dom';
import Loading from './Loading';
import ErrorMessage from './ErrorMessage';

function PostDetails({posts, updatePosts}) {
  const [post, setPost] = useState({})
  const [loading, setLoading] = useState(true)
  const [errorMsg, setErrorMsg] = useState("")
  const [redirect, setRedirect] = useState(false)
  
  const params = useParams()


  const fetchPost = async () => {
    try {
        let response;
        posts.forEach(currPost=>{
            if (currPost.id === parseInt(params.id)){
                response = currPost
            }
        })
        if (response){
          setPost(response)
          setLoading(false)
          setErrorMsg("")
        }
        else {
          throw new Error("Post not Found.")
        }

    } catch (error) {  
      console.log("Error", error)
      setPost({})
      setLoading(false)
      setErrorMsg(error)         
    }
  }

  useEffect(()=>{
    fetchPost()
  }, [])

  const handleDeletePost = () => {
    updatePosts(posts.filter(currPost => currPost.id !== post.id));
    setRedirect(true)
  }

  return (
    !redirect
    ?
    !loading
    ?
    !errorMsg
    ?
    <div className="post-detail-container">
        <h1 className="post-detail-title">{post.title}</h1>
        <p className="post-detail-body">{post.body}</p>
        <div className="post-detail-button-container">
            <Link className="update-post-button post-detail-button" to={{
            pathname: '/edit',
            state: {
              post
            }
            }}
            >
                <p>Edit</p>
            </Link>
            <button className="update-post-button post-detail-button" onClick={handleDeletePost}>Delete</button>
        </div>
    </div>
    :
    <ErrorMessage errorMsg={errorMsg.message} />
    :
    <Loading />
    :
    <Redirect to="/" />
  );
}

export default PostDetails;
