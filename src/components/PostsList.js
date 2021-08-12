import {useState} from 'react';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';
import { ceil, cloneDeep} from 'lodash';


function PostsList({posts}) {
  let sortedPosts = cloneDeep(posts).sort((a, b)=>b.id-a.id)
  const total = ceil(sortedPosts.length/10)
  const [currentPage, setCurrentPage] = useState(0)

  const handlePageChange = (pageno) => {
      setCurrentPage(pageno)
  }

  const handleNextPage = () => {
      if (currentPage+1<total){
          setCurrentPage(prevPage=>prevPage+1)
      }
      else {
          setCurrentPage(0)
      }
  }

  return (
   <>
   {sortedPosts.slice(currentPage*10, currentPage*10+10).map(post=>{
       return (
        <Link className="post-item" key={post.id} to={`/${post.id}`}>
            <h3>
                <span className="post-item-id">Post {post.id}</span>
                {post.title}
            </h3>
       </Link>
       )

   })}
   <Pagination currentPage={currentPage} total={total} handlePageChange={handlePageChange} handleNextPage={handleNextPage} />
   </>
  );
}

export default PostsList;
