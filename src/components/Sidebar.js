import React from "react"
import { Card, CardTitle, CardBody } from 'reactstrap'


const Sidebar = ({ pageContext }) => {

    return (
        <div className="container" id="content">
            <Card>
                <CardBody>
                    <CardTitle className="text-center text-uppercase">
                        Browse by Tags
            </CardTitle>
                </CardBody>
            </Card>
        </div>
    )
}

export default Sidebar