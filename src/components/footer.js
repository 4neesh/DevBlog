import React from "react"

const Footer = () => (

    <div className="site-footer">
        <h4 className="text-center">Code Blog</h4>
        <p className="text-center">Follow on Social Media</p>
        <div className="footer-social-links">
            <ul className="social-links-list">
                <li>
                    <a  href="www.github.com/4neesh" 
                        target="_blank" 
                        className="facebook"
                        rel="noopener noreferrer">
                            <i className="fab fa-github fa-2x"/>
                    </a>
                
                </li>
                <li>
                    <a  href="www.linkedin.com" 
                        target="_blank" 
                        className="facebook"
                        rel="noopener noreferrer">
                            <i className="fab fa-hackerrank fa-2x"/>
                    </a>
                
                </li>
                <li>
                    <a  href="www.linkedin.com/aneeshmistry" 
                        target="_blank" 
                        className="facebook"
                        rel="noopener noreferrer">
                            <i className="fab fa-linkedin fa-2x"/>
                    </a>
                
                </li>
            </ul>
        </div>


        <footer >
 © {new Date().getFullYear()}, Built with
 {` `}
 <a href="https://www.gatsbyjs.org">Gatsby</a>
</footer>

    </div>

)

export default Footer