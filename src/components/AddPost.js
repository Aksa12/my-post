import {useState} from 'react';
import { Redirect, useHistory } from 'react-router';

function AddPost({posts, updatePosts}) {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [redirect, setRedirect] = useState(false)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (title && body) {
      updatePosts([ ...posts, {title, body, id:posts[posts.length-1].id+1}]);
      setRedirect(true)
    }
    else {
      alert("Make sure title and body are not empty.")
    }
   

  }

  const history = useHistory();

  if(posts.length===0){
  history.push("/");   
  }

  return (
    !redirect
    ?
    <div className="update-post-container">
        <h1 className="update-post-heading">Add the Post here!</h1>
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

export default AddPost;
