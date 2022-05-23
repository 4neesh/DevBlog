import React from "react"
import { Link } from "gatsby"
import { Card,  CardTitle, CardBody, Badge } from 'reactstrap'
import { slugify } from "../util/utilityFunctions"

const Post = ({title, slug, date,  time, tags }) => (
    
    <Card className="indexCard">
        <Link to={`/${slug}`}>
        </Link>
        <CardBody>
            <CardTitle><h3>{title}</h3></CardTitle>
            <br></br>
                <span >{date}</span> 
                <span className="float-right"><strong>
                    <i className="far fa-clock"></i>
                     {' '}{' '}{time} mins</strong></span>
            <hr></hr>
            <ul className="post-tags">
                {tags.map(tag => (
                    <li key={tag}>
                        <Link to={`/tag/${slugify(tag)}`}>
                            <h4>
                            <Badge className="postBadge">
                                {tag}
                            </Badge>
                            </h4>
                        </Link>
                    </li>
                ))}
            </ul>
            <Link to={`/${slug}`}
                 className=" float-right"><strong>Read more</strong>
            </Link>
                
        </CardBody>


    </Card>

)


export default Post