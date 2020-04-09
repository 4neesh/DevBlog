import React from "react"
import { Link } from "gatsby"
import { Card, CardText, CardSubtitle, CardBody, Badge } from 'reactstrap'
import { slugify } from "../util/utilityFunctions"

import Img from "gatsby-image"

const Post = ({slug, date,  time, fluid, tags,  subtitle }) => (

    <Card className="indexCard">
        <Link to={slug}>
        <Img  className="card-image-top" fluid={fluid} />
        </Link>
        <CardBody>
     
            <CardSubtitle>
                <span >{date}</span> 
                <span className="float-right"><strong>
                    <i className="far fa-clock"></i>
                     {' '}{' '}{time} mins</strong></span>
            </CardSubtitle>
            <CardText>{subtitle}</CardText>
            <ul className="post-tags">
                {tags.map(tag => (
                    <li key={tag}>
                        <Link to={`/tag/${slugify(tag)}`}>
                            <Badge color="info" className="text-uppercase">
                                {tag}
                            </Badge>
                        </Link>
                    </li>
                ))}
            </ul>
            <Link to={slug}
                 className=" float-right"><strong>Read more</strong>
                </Link>
        </CardBody>


    </Card>

)


export default Post