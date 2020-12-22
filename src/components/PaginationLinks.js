import React from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'

const PaginationLinks = ({ currentPage, numberOfPages }) => {
  const isFirst = currentPage === 1
  const isLast = currentPage === numberOfPages
  const previousPage =
    currentPage - 1 === 1 ? '/blogs' : '/page/' + (currentPage - 1).toString()
  const nextPage = '/page/' + (currentPage + 1).toString()
  const finalPage = '/page/' + numberOfPages
  const firstPage = '/blogs'
  const middleNumber = Math.round(numberOfPages /2)
  console.log("current: " + currentPage)
  console.log("previous: " + previousPage)
  console.log("nextPage: " + nextPage)

  return (
    <Pagination >

    
    {/* make the previous and first page button disabled if we are on the first page */}

    {isFirst ? (
        <PaginationItem disabled >
          <PaginationLink  style={{color:"black"}} first  />
        </PaginationItem>
        
      ) : (
        <PaginationItem >
          <PaginationLink style={{color:"black"}} first href={firstPage}/>
        </PaginationItem>
      )}

      {isFirst ? (
        <PaginationItem disabled >
          <PaginationLink  style={{color:"black"}} previous  />
        </PaginationItem>
        
      ) : (
        <PaginationItem >
          <PaginationLink style={{color:"black"}} previous href={previousPage} />
        </PaginationItem>
      )}
  




      {/* populate the first 3 numbers for pagination and colour active if selected */}
      
      {isLast ? (

<PaginationItem >
            <PaginationLink style={{color:"black"}} href={`/${'blogs'}`}>
              1  
            </PaginationLink>
          </PaginationItem>

      )
        :
        currentPage + 2 === numberOfPages ? (
          <PaginationItem  >
            <PaginationLink style={{color:"black"}} href={`/${currentPage === 0 ? 'blogs' : 'page/' + (currentPage - 1)}`}>
              {currentPage -1 }
            </PaginationLink>
          </PaginationItem>
        )
        :
        currentPage + 1 === numberOfPages ? (
          <PaginationItem  key={`page-number${currentPage + 1}`}>
            <PaginationLink style={{color:"black"}} href={`/${currentPage === 0 ? 'blogs' : 'page/' + (currentPage - 2)}`}>
              {currentPage -2 }
            </PaginationLink>
          </PaginationItem>
        )
        :
        (

<PaginationItem  active key={`page-number${currentPage + 1}`}>
            <PaginationLink className="paginationLinks" href={`/${currentPage === 0 ? 'blogs' : 'page/' + (currentPage + 1)}`}>
              {currentPage}
            </PaginationLink>
          </PaginationItem>

        )
    
    }

{isLast ? (

<PaginationItem >
            <PaginationLink style={{color:"black"}} href={`/${'page/2'}`}>
              2  
            </PaginationLink>
          </PaginationItem>

      )
      
        :
        currentPage + 2 === numberOfPages ? (
          <PaginationItem  active key={`page-number${currentPage + 1}`}>
            <PaginationLink className="paginationLinks" href={`/${currentPage === 0 ? 'blogs' : 'page/' + (currentPage)}`}>
              {currentPage }
            </PaginationLink>
          </PaginationItem>
        )
        :
        currentPage + 1 === numberOfPages ? (
          <PaginationItem  key={`page-number${currentPage + 1}`}>
            <PaginationLink  style={{color:"black"}}  href={`/${currentPage === 0 ? 'blogs' : 'page/' + (currentPage -1 )}`}>
              {currentPage -1 }
            </PaginationLink>
          </PaginationItem>
        )
       
        :
        
        (

<PaginationItem>
            <PaginationLink style={{color:"black"}} href={`/${currentPage === 0 ? 'blogs' : 'page/' + (currentPage + 1)}`}>
              {currentPage + 1}
            </PaginationLink>
          </PaginationItem>

        )
    
    }

{isLast ? (

<PaginationItem >
            <PaginationLink style={{color:"black"}} href={`/${'page/2'}`}>
              3  
            </PaginationLink>
          </PaginationItem>

      )
        :
        currentPage + 2 === numberOfPages ? (
          <PaginationItem >
            <PaginationLink style={{color:"black"}} href={`/${currentPage === 0 ? 'blogs' : 'page/' + (currentPage + 1)}`}>
              {currentPage + 1 }
            </PaginationLink>
          </PaginationItem>
        )
        :
        currentPage + 1 === numberOfPages ? (
          <PaginationItem  active key={`page-number${currentPage + 1}`}>
            <PaginationLink className="paginationLinks" href={`/${currentPage === 0 ? 'blogs' : 'page/' + (currentPage)}`}>
              {currentPage }
            </PaginationLink>
          </PaginationItem>
        )
        :
        
        currentPage + 1 === numberOfPages ? (
      null
        )
        :
        (

<PaginationItem>
            <PaginationLink style={{color:"black"}} href={`/${currentPage === 0 ? 'blogs' : 'page/' + (currentPage + 2)}`}>
              {currentPage + 2}
            </PaginationLink>
          </PaginationItem>

        )
    
    }
     

      {/* create the ellipsis and the final page pagination */}

      <PaginationItem disabled >
            <PaginationLink style={{color:"black"}}  >
              ...
            </PaginationLink>
      </PaginationItem>


    {isLast ? (
      <PaginationItem active >
            <PaginationLink className="paginationLinks" href={finalPage} >
              {numberOfPages}
            </PaginationLink>
      </PaginationItem>
    ) : (
      <PaginationItem >
            <PaginationLink href={finalPage} style={{color:"black"}}  >
              {numberOfPages}
            </PaginationLink>
      </PaginationItem>
    )}

    {/* make the next and last page button disabled if on the final page*/}

      {isLast ? (
        <PaginationItem disabled>
          <PaginationLink style={{color:"black"}} next  />
        </PaginationItem>
      ) : (
        <PaginationItem>
          <PaginationLink style={{color:"black"}} next href={nextPage} />
        </PaginationItem>
      )}
      {isLast ? (
        <PaginationItem disabled>
          <PaginationLink style={{color:"black"}} last  />
        </PaginationItem>
      ) : (
        <PaginationItem>
          <PaginationLink style={{color:"black"}} last  href={finalPage}/>
        </PaginationItem>
      )}
    </Pagination>
  )
}

export default PaginationLinks
