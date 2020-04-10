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
    
      window.location.href === "https://aneesh.co.uk/" 
      // window.location.href === "http://localhost:8001/"

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
              Hi, I'm Aneesh Mistry. Welcome to my developer blog, where I write about the software problems I face and the technology I use.
           
         </div>
        
        </div>

      </div>
    )
  }
}

export default stickyHeader