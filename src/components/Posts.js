import {useState, useEffect} from 'react';
import axios from 'axios';
import PostsList from './PostsList';
import Loading from './Loading';
import ErrorMessage from './ErrorMessage';

function Posts({posts, updatePosts}) {

  const [loading, setLoading] = useState(true)
  const [errorMsg, setErrorMsg] = useState("")
  

  const fetchPosts = async () => {
      try {
        const response = await axios('https://jsonplaceholder.typicode.com/posts')
        console.log(response.data)
        updatePosts(response.data)
        setLoading(false)
        setErrorMsg("")
      } catch (error) {
          console.log("Error", error)
          updatePosts([])
          setErrorMsg(error)
          setLoading(false)
      }
      
  }

  useEffect(()=>{
    
    if (posts.length === 0)
    {
        fetchPosts()
    }
    else {
        setLoading(false)
    } 
  }, [])

  

  return (
        <div className="posts-page-container">
            <h1 className="posts-heading-text">All Posts</h1>
            {
            !loading?
            !errorMsg?
            <div className="posts-container">
            <PostsList posts={posts} />
            </div>
            :
            <ErrorMessage errorMsg={errorMsg.message} />
            :
            <Loading />}
        </div>
  );
}

export default Posts;
 