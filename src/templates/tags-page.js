import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Badge, Button } from 'reactstrap'
import { slugify } from '../util/utilityFunctions'

const tagsPage = ({ pageContext }) => {
  const { tags, tagPostCount } = pageContext
  console.log(tags)
  return (
    <Layout pageTitle="All tags">
      <SEO title="All tags" keywords={['tags', 'topics']} />
      <ul>
        {tags.map(tag => (
          <li key={tag} style={{ marginBottom: '10px' }}>
            <Button color="primary" href={`/tag/${slugify(tag)}`}>
              {tag} <Badge color="light">{tagPostCount[tag]}</Badge>
            </Button>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default tagsPage