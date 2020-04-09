import React from "react"

class stickTwo extends React.Component {
  constructor() {
    super()
    this.state = {
      scrolled: false,
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100;
       
      if (isTop !== true) {
        this.setState({ scrolled: true })
      } else {
        this.setState({ scrolled: false })
      }

    })
  }

  render() {
    return (


      <div  className= "testa" style={{textAlign:"center"}}>
          <h3 className="sheader" >
              Hello! My name is Aneesh, I am a passionate software engineer and enjoy learning about design patterns and algorithms.
          </h3>
      </div>
    )
  }
}

export default stickTwo
