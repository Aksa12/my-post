import {useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import PostDetails from './components/PostDetails';
import Posts from './components/Posts'
import EditPost from './components/EditPost';
import AddPost from './components/AddPost';

function App() {
  const [posts, setPosts] = useState([])

  let updatePosts = (newPosts) => {
    setPosts(newPosts)
  }

  const wrapperComponent = (Component) => <Component posts={posts} updatePosts={updatePosts} />

  return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact render={()=>wrapperComponent(Posts) } />
            <Route path="/edit" render={()=>wrapperComponent(EditPost) }  />
            <Route path="/Add" render={()=>wrapperComponent(AddPost) } />
            <Route path="/:id" exact render={()=>wrapperComponent(PostDetails) }/>   
          </Switch>
        </div>
      </Router>
  );
}

export default App;
