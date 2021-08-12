import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="nav-container">
        <div className="nav-heading">
            <h1>MyPosts</h1>
       </div>
       <div className="nav-links">
        <NavLink to='/' activeClassName="activeLink" exact replace>
            <p className="nav-link-text">All Posts</p>
        </NavLink>
        <NavLink to='/add'  activeClassName="activeLink" replace>
                <p className="nav-link-text">Create Post</p>
        </NavLink>
       </div>
    </nav>
  );
}

export default Nav;
