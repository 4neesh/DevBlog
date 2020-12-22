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
  console.log("current: " + currentPage)
  console.log("previous: " + previousPage)
  console.log("nextPage: " + nextPage)

  return (
    <Pagination >


      {/* make the previous and first page button disabled if we are on the first page */}

      {isFirst ? (
        <PaginationItem disabled >
          <PaginationLink className="unselectedPage" first />
        </PaginationItem>

      ) : (
          <PaginationItem >
            <PaginationLink className="unselectedPage" first href={firstPage} />
          </PaginationItem>
        )}

      {isFirst ? (
        <PaginationItem disabled >
          <PaginationLink className="unselectedPage" previous />
        </PaginationItem>

      ) : (
          <PaginationItem >
            <PaginationLink className="unselectedPage" previous href={previousPage} />
          </PaginationItem>
        )}





      {/* populate the first number for pagination and colour active if selected */}

      {isLast ? (

        <PaginationItem >
          <PaginationLink className="unselectedPage" href={`/${'blogs'}`}>
            1
            </PaginationLink>
        </PaginationItem>

      )
        :
        currentPage + 2 === numberOfPages ? (
          <PaginationItem  >
            <PaginationLink className="unselectedPage" href={`/${currentPage === 0 ? 'blogs' : 'page/' + (currentPage - 1)}`}>
              {currentPage - 1}
            </PaginationLink>
          </PaginationItem>
        )
          :
          currentPage + 1 === numberOfPages ? (
            <PaginationItem key={`page-number${currentPage + 1}`}>
              <PaginationLink className="unselectedPage" href={`/${currentPage === 0 ? 'blogs' : 'page/' + (currentPage - 2)}`}>
                {currentPage - 2}
              </PaginationLink>
            </PaginationItem>
          )
            :
            (

              <PaginationItem active key={`page-number${currentPage + 1}`}>
                <PaginationLink className="selectedPage" href={`/${currentPage === 0 ? 'blogs' : 'page/' + (currentPage + 1)}`}>
                  {currentPage}
                </PaginationLink>
              </PaginationItem>

            )

      }

      {/* populate the second number for pagination and colour active if selected */}


      {isLast ? (

        <PaginationItem >
          <PaginationLink className="unselectedPage" href={`/${'page/2'}`}>
            2
            </PaginationLink>
        </PaginationItem>

      )

        :
        currentPage + 2 === numberOfPages ? (
          <PaginationItem active key={`page-number${currentPage + 1}`}>
            <PaginationLink className="selectedPage" href={`/${currentPage === 0 ? 'blogs' : 'page/' + (currentPage)}`}>
              {currentPage}
            </PaginationLink>
          </PaginationItem>
        )
          :
          currentPage + 1 === numberOfPages ? (
            <PaginationItem key={`page-number${currentPage + 1}`}>
              <PaginationLink className="unselectedPage" href={`/${currentPage === 0 ? 'blogs' : 'page/' + (currentPage - 1)}`}>
                {currentPage - 1}
              </PaginationLink>
            </PaginationItem>
          )

            :

            (

              <PaginationItem>
                <PaginationLink className="unselectedPage" href={`/${currentPage === 0 ? 'blogs' : 'page/' + (currentPage + 1)}`}>
                  {currentPage + 1}
                </PaginationLink>
              </PaginationItem>

            )

      }

      {/* populate the third number for pagination and colour active if selected */}

      {isLast ? (

        <PaginationItem disabled>
          <PaginationLink className="unselectedPage">
            ...
            </PaginationLink>
        </PaginationItem>

      )
        :
        currentPage + 2 === numberOfPages ? (
          <PaginationItem >
            <PaginationLink className="unselectedPage" href={`/${currentPage === 0 ? 'blogs' : 'page/' + (currentPage + 1)}`}>
              {currentPage + 1}
            </PaginationLink>
          </PaginationItem>
        )
          :
          currentPage + 1 === numberOfPages ? (
            <PaginationItem active key={`page-number${currentPage + 1}`}>
              <PaginationLink className="selectedPage" href={`/${currentPage === 0 ? 'blogs' : 'page/' + (currentPage)}`}>
                {currentPage}
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
                  <PaginationLink className="unselectedPage" href={`/${currentPage === 0 ? 'blogs' : 'page/' + (currentPage + 2)}`}>
                    {currentPage + 2}
                  </PaginationLink>
                </PaginationItem>

              )

      }


      {/* create the ellipsis and the final page pagination */}

      {isLast ? (
        <PaginationItem >
          <PaginationLink className="unselectedPage" href={`/${currentPage === 0 ? 'blogs' : 'page/' + (currentPage - 1)}`} >
            {numberOfPages - 1}
          </PaginationLink>
        </PaginationItem>

      )
        :
        <PaginationItem disabled >
          <PaginationLink className="unselectedPage"  >
            ...
            </PaginationLink>
        </PaginationItem>
      }




      {isLast ? (
        <PaginationItem active >
          <PaginationLink className="selectedPage" href={finalPage} >
            {numberOfPages}
          </PaginationLink>
        </PaginationItem>
      ) : (
          <PaginationItem >
            <PaginationLink href={finalPage} className="unselectedPage"  >
              {numberOfPages}
            </PaginationLink>
          </PaginationItem>
        )}

      {/* make the next and last page button disabled if on the final page*/}

      {isLast ? (
        <PaginationItem disabled>
          <PaginationLink className="unselectedPage" next />
        </PaginationItem>
      ) : (
          <PaginationItem>
            <PaginationLink className="unselectedPage" next href={nextPage} />
          </PaginationItem>
        )}
      {isLast ? (
        <PaginationItem disabled>
          <PaginationLink className="unselectedPage" last />
        </PaginationItem>
      ) : (
          <PaginationItem>
            <PaginationLink className="unselectedPage" last href={finalPage} />
          </PaginationItem>
        )}
    </Pagination>
  )
}

export default PaginationLinks
