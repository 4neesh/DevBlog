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
    
      window.location.href === "http://localhost:8001/"
        ? this.setState({ showHead: true })
        : this.setState({ showHead: false })
    
  }

  render() {
    return (
      <div className={this.state.showHead ? "showSticky" : "hideSticky"}>
        <div  className= "testa" >
          <h3 className="sheader" >
              Hello! My name is Aneesh, I am a passionate software engineer and enjoy learning about design patterns and algorithms.
          </h3>
          <div style={{height: "25%",width:"25%",marginBottom:"10px", float:"right"}}>
          <Image/>

          </div>

      </div>
      </div>
    )
  }
}

export default stickyHeader