import React from "react"

class stickyHeader extends React.Component {
  constructor() {
    super()
    this.state = {
      showHead: false,
    }
  }
  componentDidMount() {
    
      window.location.href === "https://aneesh.co.uk/"
        ? this.setState({ showHead: true })
        : this.setState({ showHead: false })
    
  }

  render() {
    return (
      <div className={this.state.showHead ? "hell" : "heaven"}>
        <div  className= "testa" style={{textAlign:"center"}}>
          <h3 className="sheader" >
              Hello! My name is Aneesh, I am a passionate software engineer and enjoy learning about design patterns and algorithms.
          </h3>
      </div>
      </div>
    )
  }
}

export default stickyHeader
