import React from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'

const PaginationLinks = ({ currentPage, numberOfPages }) => {
  const isFirst = currentPage === 1
  const isLast = currentPage === numberOfPages
  const previousPage =
    currentPage - 1 === 1 ? '/blogs' : '/page/' + (currentPage - 1).toString()
  const nextPage = '/page/' + (currentPage + 1).toString()
  return (
    <Pagination >

    
    {/* make the fist button disabled if we are on the first page */}

      {isFirst ? (
        <PaginationItem disabled >
          <PaginationLink  style={{color:"black"}} previous href="/blogs" />
        </PaginationItem>
      ) : (
        <PaginationItem >
          <PaginationLink style={{color:"black"}} previous href={previousPage} />
        </PaginationItem>
      )}
  

      {/* populate the middle numbers for pagination */}
      
      {Array.from({ length: numberOfPages }, (_, i) =>
        currentPage === i + 1 ? (
          <PaginationItem  active key={`page-number${i + 1}`}>
            <PaginationLink className="paginationLinks" href={`/${i === 0 ? '' : 'page/' + (i + 1)}`}>
              {i + 1}

            </PaginationLink>
          </PaginationItem>
        ) 
        : (
          <PaginationItem key={`page-number${i + 1}`}>
            <PaginationLink style={{color:"black"}} href={`/${i === 0 ? '' : 'page/' + (i + 1)}`}>
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        )
      )}

    
    {/* make the next button disabled if on the final page*/}

      {isLast ? (
        <PaginationItem disabled>
          <PaginationLink style={{color:"black"}} next href={nextPage} />
        </PaginationItem>
      ) : (
        <PaginationItem>
          <PaginationLink style={{color:"black"}} next href={nextPage} />
        </PaginationItem>
      )}
    </Pagination>
  )
}

export default PaginationLinks
