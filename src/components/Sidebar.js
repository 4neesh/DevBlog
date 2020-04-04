import React from "react"
import { Card, CardTitle, Form,Input, CardBody, FormGroup } from 'reactstrap'

const Sidebar = () => (

    <div>
        <Card>
            <CardBody>
                <CardTitle className="text-center text-uppercase">
                Newsletter
            </CardTitle>
            <Form className="text-centre">
                <FormGroup>
                    <Input 
                    type="email" 
                    name="email" 
                    placeholder="Enter your email"/>
                </FormGroup>
                <button className="btn btn-outline-success text-uppercase">
                    Subscribe</button>
            </Form>
            </CardBody>
        </Card>







    </div>


)







export default Sidebar