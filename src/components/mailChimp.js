import addToMailchimp from "gatsby-plugin-mailchimp"
import React from "react"
import { Button, Form, FormGroup,  Input } from 'reactstrap';


export default class mailChimp extends React.Component {
  
    constructor(props){
        super(props);
        this.state = {
        email: '',
        }
    }

    // _handleSubmit = e => {
    //     e.preventDefault();
    //     addToMailchimp(email)
    //     .then(data => {
    //         console.log(data)
    //     })
    // }


    // _handleSubmit = async (e) => {
        
    //     e.preventDefault();
    //     const result = await addToMailchimp(email)

    // }

    _handleChange = e => {
        e.preventDefault();
        addToMailchimp(this.state.email)
        .then(data => {
            console.log(data)
            this.setState({
                email: 'Thank you for subscribing!'
            })
        })
        // this.setState({email: event.target.value})
    }
    onEmailChange(event){
        this.setState({email: event.target.value})

    }

  render () {
    return (
    
    <Form onSubmit={this._handleChange}> 
        <FormGroup>
        <Input  value={this.state.email} 
                onChange={this.onEmailChange.bind(this)}
                type="email" 
                placeholder="Enter your email"/><br></br>
        <Button type="submit"
                className="subscribeButton"
                >Submit</Button>

      </FormGroup>
      
      </Form>
    )
  }

}