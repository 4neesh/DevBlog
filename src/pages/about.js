import React, { useState } from "react"
import Layout from "../components/layout"
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
        {/*to add: page on my reading (books, blogs), one on series, and one on my portfolio */}

        <Nav tabs>
          <NavItem><NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >About me</NavLink></NavItem>
          <NavItem><NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >Reading list</NavLink></NavItem>
          
        </Nav>

        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Row>
              <Card>

                

                <CardTitle className="text-center">
                  <h2>Hello! I'm Aneesh
  </h2>
                </CardTitle>
                <CardBody>
                  <p>Thank you for visiting my website.</p>
                  <p>
                    I am a software engineer and enjoy solving problems, building applications,
                    and learning about the technologies and techniques that can optimized my code.
  </p>
                  <p>
                    I completed my bachelors degree in Banking, Finance, and Management
    at{" "}
                    <a
                      rel="noopener noreferrer"
                      href="https://www.lboro.ac.uk/"
                      target="_blank"
                    >
                      <strong>Loughborough University</strong>
                    </a>{" "}
    in 2017. The degree included one year in industry where I obtained
    experience developing tools for portfolio managers within the fixed income capability at UBS
    Asset Management. My introduction to software development sparked
    a passion that I am continuing to pursue. In 2018 I graduated from{" "}
                    <a
                      rel="noopener noreferrer"
                      href="https://www.st-andrews.ac.uk/"
                      target="_blank"
                    >
                      <strong>The University of St Andrews</strong>
                    </a>{" "}
    with a Master's degree in Computer Science.
  </p>
                  <p>
                    I currently work for Accenture as a software engineer. I have been
                    able to build upon my skills in many areas, but focusing specifically with
                    Java, microservices and AWS. I continue to broaden my understanding of financial
                    services; I actively participate in the UKI Blockchain
                    community of practice and work predominantly with financial services
                    clients.
  </p>
                  <p>
                    Outside engineering, I enjoy playing golf.
                    Golf has been a hobby from a young age that I carry through today; at the height
                    of my amateur career, I represented my respective University Athletic Union as well as Middlesex
                    County in tournaments across the UK. I currently have a handicap of 3.
  </p>

                  <AboutImage />
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
                    The below list of resources are are a combination of books, blogs and videos I find most useful for learning.
                    </p>

                    <u><strong>Java</strong></u>
                    <p>
                    <ul>
                      <li>[book] <a target="_blank" href="https://books.google.co.uk/books/about/OCP_Oracle_Certified_Professional_Java_S.html?id=bvYbCQAAQBAJ&source=kp_book_description&redir_esc=y">OCP Study guide</a></li>
                      <li>[book] <a target="_blank" href="https://www.goodreads.com/book/show/3735293-clean-code">Clean Code</a></li>
                      <li>[blog] <a target="_blank" href="https://javarevisited.blogspot.com/">Java revisited</a></li>
                      <li>[blog] <a target="_blank" href="https://www.baeldung.com/">Baeldung</a></li>
                    </ul>
                    </p>
                    <br></br>

                    <u><strong>Spring</strong></u>
                    <p>
                    <ul>
                      <li>[video] <a target="_blank" href="https://www.luv2code.com/category/spring/">Chad Darby</a></li>
                      <li>[video] <a target="_blank" href="https://www.pluralsight.com/authors/richard-seroter">Richard Seroter</a></li>
                      <li>[blog] <a target="_blank" href="https://vladmihalcea.com/">Vlad Mihalcea</a></li>
                    </ul>
                    </p>
                    <br></br>

                    <u><strong>Data structures and Algorithms</strong></u>
                    <p>
                    <ul>
                      <li>[book] <a target="_blank" href="https://en.wikipedia.org/wiki/Introduction_to_Algorithms">Introduction to Algorithms</a></li>
                      <li>[book] <a target="_blank" href="https://en.wikipedia.org/wiki/Cracking_the_Coding_Interview">Cracking the coding interview</a></li>
                    </ul>
                    </p>
                    <br></br>
                    <u><strong>Finance</strong></u>
                    <p>
                    <ul>
                      <li>[video] <a target="_blank" href="https://www.youtube.com/c/MoneyWeekVideos">MoneyWeek</a></li>
                      <li>[news] <a target="_blank" href="https://www.ft.com/">Financial times</a></li>
                      <li>[website] <a target="_blank" href="https://www.investopedia.com/">Investopedia</a></li>
                    </ul>
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
