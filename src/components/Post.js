import React from "react"
import {Link} from "gatsby"
import {Card, CardTitle, CardText, CardSubtitle, CardBody, Badge} from 'reactstrap'
import Img from "gatsby-image"
import {slugify} from "../util/utilityFunctions"
const Post = ({title, author, path, date, body, fluid, tags}) =>(

        <Card>
            <CardBody>
                <CardTitle>
                    <Link to={path}>{title}</Link>
                </CardTitle>
                <CardSubtitle>
                    <span className="text-info">{date}</span> by{' '} <span className="text-info">{author}</span>
                </CardSubtitle>
                <CardText>{body}</CardText>
                <ul className="post-tags">
                    {tags.map(tag =>(
                        <li key={tag}>
                            <Link to={`/tag/${slugify(tag)}`}>
                            <Badge color="primary" className="text-uppercase">
                                {tag}
                            </Badge>
                            </Link>
                        </li>
                    ))}
                </ul>
                <Link to={path} 
                className="btn-outline-primary float-right">Read more
                </Link>
            </CardBody>


        </Card>


    )


export default Post