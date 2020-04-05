import React from "react"
import { Link } from "gatsby"
import { Card, CardText, CardSubtitle, CardBody, Badge } from 'reactstrap'
import { slugify } from "../util/utilityFunctions"

import Img from "gatsby-image"

const Post = ({slug, date,  time, fluid, tags,  subtitle }) => (

    <Card >
        <Link to={slug}>
        <Img   className="card-image-top" fluid={fluid} />
        </Link>
        <CardBody>
     
            <CardSubtitle>
                <span className="text-info">{date}</span> 
                <span className="float-right"><strong>
                    <i class="far fa-clock"></i>
                     {' '}{' '}{time} mins</strong></span>
            </CardSubtitle>
            <CardText>{subtitle}</CardText>
            <ul className="post-tags">
                {tags.map(tag => (
                    <li key={tag}>
                        <Link to={`/tag/${slugify(tag)}`}>
                            <Badge color="primary" className="text-uppercase">
                                {tag}
                            </Badge>
                        </Link>
                    </li>
                ))}
            </ul>
            <Link to={slug}
                className="btn-outline-primary float-right">Read more
                </Link>
        </CardBody>


    </Card>


)


export default Post