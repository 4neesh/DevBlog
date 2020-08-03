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
      //window.location.href === "http://localhost:8000/" 

      ? this.setState({ showHead: true })
        : this.setState({ showHead: false })
    
  }

  render() {
    return (
      <div className={this.state.showHead ? "showSticky" : "hideSticky"}>
        <div  className= "stickyHeaderBar" >

          <div className="stickyHeaderImage">
            <Image/>
          </div>

          <div className="stickyHeaderText">
              Hi, I'm Aneesh Mistry.<br></br> Welcome to my developer blog where you can read about the design patterns and tools I use as a software engineer.
           
         </div>
        
        </div>

      </div>
    )
  }
}

export default stickyHeader