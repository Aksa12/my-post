import { range } from 'lodash';

function Pagination({currentPage, total, handlePageChange, handleNextPage}) {
  const pages = range(0, total)

  return (
   <div className="pages-container">
   {pages.map(page=>{
       return <li onClick={()=>{handlePageChange(page)}} className={page===currentPage?"page-text active-page":"page-text"} key={page}>{page}</li>
   })}
   <p className="page-text" onClick={handleNextPage}>Next</p>
   </div>
  );
}

export default Pagination;
