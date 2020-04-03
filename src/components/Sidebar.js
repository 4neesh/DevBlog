import React from "react"
import { Card, CardTitle, Button, Form,Input, CardBody, FormGroup } from 'reactstrap'

const Sidebar = () => (

    <div>
        <Card>
            <CardBody>
                <CardTitle clasName="text-center text-uppercase">
                Newsletter
            </CardTitle>
            <Form className="text-centre">
                <FormGroup>
                    <Input 
                    type="email" 
                    name="email" 
                    placeholder="enter"/>
                </FormGroup>
                <Button className="btn btn-outline-success text-uppercase">
                    Subscribe</Button>
            </Form>
            </CardBody>
        </Card>







    </div>


)







export default Sidebar