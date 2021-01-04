import React from "react"
import { Card, CardTitle, Button, CardBody } from "reactstrap"
import MailChimp from "./mailChimp"


export default class Sidebar extends React.Component {

  constructor() {
    super()
    this.state = {
      showSideBar: false,
    }
  }

  componentDidMount() {

      window.location.href.includes("tag")
      ||
      window.location.href.includes("page")
      ||
      window.location.href.includes("blogs")
      ? this.setState({ showSideBar: true })
      : this.setState({ showSideBar: false })

  }

  render() {


    return (

      <div className={this.state.showSideBar ? "container" : "hideSideBar"} id="content">

        <Card>

          <CardTitle className="newslettertitle">
            <strong>Subscribe to new posts</strong>
          </CardTitle>
          <CardBody>
            <MailChimp />
            </CardBody>
        </Card>
        <Card className="sidebarCard">
          <CardTitle className="viewBlogsHeadline">
            <strong>View Blogs by Tag</strong>
          </CardTitle>
          <CardBody>

            {/* <ul>
              {tags.map(tag => (
                <li key={tag} style={{ marginBottom: '10px' }}>
                  <Button color="primary" href={`/tag/${slugify(tag)}`}>
                    {tag} <Badge color="light">{tagPostCounts[tag]}</Badge>
                  </Button>
                </li>
              ))}
            </ul> */}

            <ul>
              <li>
                <Button className="tagButton" href={`/tag/algorithms`}>
                  Algorithms
                  </Button>
              </li>
              <li>
                <Button className="tagButton" href={`/tag/databases`}>
                  Databases
                  </Button>
              </li>
              <li>
                <Button className="tagButton" href={`/tag/data-structures`}>
                  Data Structures
                  </Button>
              </li>
              <li>
                <Button className="tagButton" href={`/tag/design`}>
                  Design
                  </Button>
              </li>
              <li>
                <Button className="tagButton" href={`/tag/devops`}>
                  DevOps
                  </Button>
              </li>
              <li>
                <Button className="tagButton" href={`/tag/engineering`}>
                  Engineering
                  </Button>
              </li>
              <li>
                <Button className="tagButton" href={`/tag/finance`}>
                  Finance
                  </Button>
              </li>
              <li>
                <Button className="tagButton" href={`/tag/go`}>
                  Go
                  </Button>
              </li>
              <li>
                <Button className="tagButton" href={`/tag/java`}>
                  Java
                  </Button>
              </li>
              <li>
                <Button className="tagButton" href={`/tag/jenkins`}>
                  Jenkins
                  </Button>
              </li>
              <li>
                <Button className="tagButton" href={`/tag/jvm`}>
                  JVM
                  </Button>
              </li>
              <li>
                <Button className="tagButton" href={`/tag/microservices`}>
                  Microservices
                  </Button>
              </li>

              <li>
                <Button className="tagButton" href={`/tag/multi-threading`}>
                  Multi-threading
                  </Button>
              </li>

              <li>
                <Button className="tagButton" href={`/tag/patterns`}>
                  Patterns
                  </Button>
              </li>
              <li>
                <Button className="tagButton" href={`/tag/personal`}>
                  Personal
                  </Button>
              </li>

              <li>
                <Button className="tagButton" href={`/tag/spring`}>
                  Spring
                  </Button>
              </li>
            </ul>
          </CardBody>
        </Card>

      </div>
    )
  }
}


