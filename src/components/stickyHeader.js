import React from "react"
import StickyTwo from "./StickyTwo"

class stickyHeader extends React.Component {
  constructor(){
    super()
    this.state ={
      showHead: false,
    }
  }
  componentDidMount() {
   
    {window.location.href==="https://aneesh.co.uk/" ?
      this.setState({showHead: true}) :
      this.setState({showHead: false})}

  }


  render() {
    return (
<div className = {this.state.showHead ? "hell" : "heaven"} >
{/* {scrolled ? <StickyTwo/> : null} */}
<StickyTwo/>
</div>

      )
  }
}

export default stickyHeader
