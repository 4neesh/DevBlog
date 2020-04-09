import React from "react"
import Image from "./image"
class stickyHeader extends React.Component {
  constructor() {
    super()
    this.state = {
      showHead: false,
    }
  }
  componentDidMount() {
    
      // window.location.href === "https://aneesh.co.uk/"
      window.location.href === "http://localhost:8001/"

      ? this.setState({ showHead: true })
        : this.setState({ showHead: false })
    
  }

  render() {
    return (
      <div className={this.state.showHead ? "showSticky" : "hideSticky"}>
        <div  className= "testa" >

          <div className="stickyHeaderImage">
            <Image/>
          </div>

          <div className="stickyHeaderText">
            <h3 className="sheader" >
              Hello! My name is Aneesh Mistry, Welcome to my developer blog that focuses my passion for Java, data structures, and algorithms.
            </h3>
         </div>
        
        </div>

      </div>
    )
  }
}

export default stickyHeader