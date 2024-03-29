import React, { useState } from "react"
import Layout from "../components//layouts/aboutLayout"
import SEO from "../components/seo"
import AboutImage from "../components/aboutImage"
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, CardBody, CardTitle, Row } from 'reactstrap';
import classnames from 'classnames';


const AboutPage = (props) => {

  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }
  return (
    <Layout pageTitle="About">
      <div className="container" id="content">
        <SEO title="About" />

        <Nav tabs>
          <NavItem style={{ cursor: 'pointer' }}><NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >About me</NavLink></NavItem>
          <NavItem style={{ cursor: 'pointer' }}><NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >Reading list</NavLink></NavItem>
          <NavItem style={{ cursor: 'pointer' }}><NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
          >Mental Health</NavLink></NavItem>
        </Nav>

        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Row>
              <Card>



                <CardTitle className="text-center">
                  <h2>About me</h2>
                </CardTitle>
                <CardBody>
                  <p>
                    I am a software engineer and enjoy solving problems, learning about modern technologies 
                    and the asset management field I apply it within.  </p>
                  <p>
                    I completed my bachelors degree in Banking, Finance, and Management at{" "}
                    <a rel="noopener noreferrer" href="https://www.lboro.ac.uk/" target="_blank">
                      <strong>Loughborough University</strong></a>{" "}
                      in 2017. During my third year, I had used visual basics during an internship with UBS. 
                      My introduction to software development sparked a passion that I am continuing to pursue. 
                      In 2018 I graduated from{" "}
                    <a
                      rel="noopener noreferrer"
                      href="https://www.st-andrews.ac.uk/"
                      target="_blank"
                    >
                      <strong>The University of St Andrews</strong>
                    </a>{" "}
                    with a Master's degree in Computer Science. My blog is now a project that will support my development as I document what I learn in and around my job as an engineer. 
                 </p>
                
                  <div style={{ width: '50%' }}>
                    <AboutImage />
                  </div>
                </CardBody>
              </Card>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Card>
                <CardTitle className="text-center"><h2>Reading List</h2></CardTitle>
                <CardBody>
                  <p>
                    The below list of resources are a combination of books, blogs and videos I find most useful for learning.
                    </p>

                  <u><strong>Engineering</strong></u>
                  <p>
                    
                      <li>[book] <a rel="noopener noreferrer" target="_blank" href="https://www.goodreads.com/book/show/3735293-clean-code">Clean Code</a></li>
                      <li>[book] <a rel="noopener noreferrer" target="_blank" href="https://www.amazon.co.uk/Phoenix-Project-DevOps-Helping-Business-ebook/dp/B00AZRBLHO">The Phoenix Project</a></li>
                      <li>[book] <a rel="noopener noreferrer" target="_blank" href="https://www.amazon.co.uk/Pragmatic-Programmer-Andrew-Hunt/dp/020161622X">The Pragmatic Programmer</a></li>
                    
                  </p>
                  <br></br>

                  <u><strong>Java/Spring</strong></u>
                  <p>
                    
                      <li>[book] <a rel="noopener noreferrer" target="_blank" href="https://books.google.co.uk/books/about/OCP_Oracle_Certified_Professional_Java_S.html?id=bvYbCQAAQBAJ&source=kp_book_description&redir_esc=y">OCP Study guide</a></li>
                      <li>[blog] <a rel="noopener noreferrer" target="_blank" href="https://javarevisited.blogspot.com/">Java revisited</a></li>
                      <li>[blog] <a rel="noopener noreferrer" target="_blank" href="https://www.baeldung.com/">Baeldung</a></li>
                      <li>[video] <a rel="noopener noreferrer" target="_blank" href="https://www.luv2code.com/category/spring/">Chad Darby</a></li>
                      <li>[video] <a rel="noopener noreferrer" target="_blank" href="https://www.pluralsight.com/authors/richard-seroter">Richard Seroter</a></li>
                      <li>[blog] <a rel="noopener noreferrer" target="_blank" href="https://vladmihalcea.com/">Vlad Mihalcea</a></li>
                    
                  </p>
                  <br></br>

                  <u><strong>Data structures and Algorithms</strong></u>
                  <p>
                    
                      <li>[book] <a rel="noopener noreferrer" target="_blank" href="https://en.wikipedia.org/wiki/Introduction_to_Algorithms">Introduction to Algorithms</a></li>
                      <li>[book] <a rel="noopener noreferrer" target="_blank" href="https://en.wikipedia.org/wiki/Cracking_the_Coding_Interview">Cracking the coding interview</a></li>
                    
                  </p>
                  <br></br>
                  <u><strong>Finance</strong></u>
                  <p>
                   
                      <li>[video] <a rel="noopener noreferrer" target="_blank" href="https://www.youtube.com/c/MoneyWeekVideos">MoneyWeek</a></li>
                      <li>[news] <a rel="noopener noreferrer" target="_blank" href="https://www.ft.com/">Financial times</a></li>
                      <li>[website] <a rel="noopener noreferrer" target="_blank" href="https://www.investopedia.com/">Investopedia</a></li>
                    
                  </p>
                  <br></br>
                  <u><strong>Productivity</strong></u>
                  <p>
                    
                      <li>[book] <a rel="noopener noreferrer" target="_blank" href="https://www.amazon.co.uk/Atomic-Habits-Proven-Build-Break/dp/1847941834">Atomic habits</a></li>
                      <li>[book] <a rel="noopener noreferrer" target="_blank" href="https://www.amazon.co.uk/Principles-Life-Work-Ray-Dalio/dp/1501124021">Principles by Ray Dalio</a></li>
                      <li>[book] <a rel="noopener noreferrer" target="_blank" href="https://www.waterstones.com/book/why-we-sleep/matthew-walker/9780141983769">Why We Sleep by Matthew Walker</a></li>
                    
                  </p>
                </CardBody>
              </Card>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Card>
                <CardTitle className="text-center"><h2>Mental Health</h2></CardTitle>
                <CardBody>
                  <p>
                    Everybody has mental health, the below links are trusted charities and organisations that can offer guidance and support:
                    
                      <li><a href="https://www.mind.org.uk/">mind.co.uk</a></li>
                      <li><a href="https://www.rethink.org/">rethink.co.uk</a></li>
                      <li><a href="https://mentalhealth-uk.org/">mentalhealth-uk.org</a></li>
                  </p>
                  <p>
                    Amongst many careers, and including those of software engineers, imposter syndrome is also highly prevelent. 
                    The below resource can be useful for understanding and addressing imposter syndrome:
                    <li><a href="https://www.opengrowth.com/article/why-do-software-developers-suffer-from-imposter-syndrome">opengrowth.com</a></li>
                  </p>
                </CardBody>
              </Card>
            </Row>
          </TabPane>

        </TabContent>


      </div>
    </Layout>
  )
}
export default AboutPage
