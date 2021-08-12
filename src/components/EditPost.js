import {useState} from 'react';
import { Redirect, useHistory, useLocation} from 'react-router';

function EditPost({posts, updatePosts}) {

  const location = useLocation();
  const history = useHistory();

  let post = location?.state?.post

  const [title, setTitle] = useState(post?.title)
  const [body, setBody] = useState(post?.body)
  const [redirect, setRedirect] = useState(false)


  const editPost = (post)=>{
    let tempPosts = posts.map(currPost => {
      if (currPost.id === post.id) {
        return post
      }
      else {
        return currPost
      }
    });
    updatePosts(tempPosts)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title && body){
      editPost({...post, title, body})
      setRedirect(true)
    }
    else {
      alert("Make sure title and body are not empty.")
    }
    
  }
  

  if(location.state === undefined || location.state === null || location.state === ''){
  history.push("/");   
  }

  return (
    !redirect
    ?
    <div className="update-post-container">
        <h1 className="update-post-heading">Post {post?.id}</h1>
        <form className="update-post-form" onSubmit={handleSubmit}>
            <label className="update-post-label">Title: </label>
            <input className="update-post-input" type="text" value={title} onChange={e=>setTitle(e.target.value)} />
            <label className="update-post-label">Body</label>
            <textarea className="update-post-textarea" value={body} onChange={e=>setBody(e.target.value)} />
            <button className="update-post-button" type="submit">Done!</button>
        </form>
    </div>
    :
    <Redirect to="/" />
  );
}

export default EditPost;
