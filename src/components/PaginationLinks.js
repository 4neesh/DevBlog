import React from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'

const PaginationLinks = ({ currentPage, numberOfPages }) => {
  const isFirst = currentPage === 1
  const isLast = currentPage === numberOfPages
  const previousPage =
    currentPage - 1 === 1 ? '/' : '/page/' + (currentPage - 1).toString()
  const nextPage = '/page/' + (currentPage + 1).toString()
  console.log(numberOfPages)
  return (
    <Pagination >
      {isFirst ? (
        <PaginationItem disabled >
          <PaginationLink  style={{color:"black"}} previous href="/" />
        </PaginationItem>
      ) : (
        <PaginationItem >
          <PaginationLink style={{color:"black"}} previous href={previousPage} />
        </PaginationItem>
      )}

      
      {Array.from({ length: numberOfPages }, (_, i) =>
        currentPage === i + 1 ? (
          <PaginationItem  active key={`page-number${i + 1}`}>
            <PaginationLink style={{backgroundColor:"rgb(20,162,184)", borderColor:"black"}} href={`/${i === 0 ? '' : 'page/' + (i + 1)}`}>
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
