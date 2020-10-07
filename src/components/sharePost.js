import React from 'react'

const basicUrl = "https://aneesh.co.uk/"

const SharePost = (pageContext, post) => (

    
     <div className="text-center social-share-links">
    
         <ul>
             <li><a
                 href={
                     'https://www.facebook.com/sharer/sharer.php?u=' +
                     basicUrl +
                     pageContext.slug
                 } className="facebook" target="_blank" rel="noopener noreferrer">
                 <i className="fab fa-facebook-f fa-2x" />
             </a></li>
             <li><a
                 href={
                     'https://twitter.com/share?url=' +
                     basicUrl +
                     pageContext.slug +
                     '/'+
                     '&text=' +
                     post.title +
                     '&via' +
                     'twitterHandle'
                 }
                 className="twitter" target="_blank" rel="noopener noreferrer">
                 <i className="fab fa-twitter fa-2x" />
             </a></li>
             <li><a
                 href={
                     'https://www.linkedin.com/shareArticle?url=' +
                     basicUrl +
                     pageContext.slug
                 }
                 className="linkedin" target="_blank" rel="noopener noreferrer">
                 <i className="fab fa-linkedin fa-2x" />
             </a></li>
           
         </ul>


     </div >

)

export default SharePost