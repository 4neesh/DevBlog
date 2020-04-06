
const path = require('path')
const { slugify } = require('./src/util/utilityFunctions')
const _ = require("lodash")

let tags = ['Personal']
let tagPostCount = {}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const templates = {
    singPost: path.resolve('src/templates/single-post.js'),
    tagsPage: path.resolve('src/templates/tags-page.js'),
    tagPost: path.resolve('src/templates/tag-posts.js')
  }
  return graphql(`
    {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            author
            
            tags
          }
          fields {
            slug
          }
        }
      }
    }
  }
    
    
    `).then(res => {
    if (res.errors) return Promise.reject(res.errors)

    const posts = res.data.allMarkdownRemark.edges

    // Create single post pages
    posts.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: templates.singPost,
        context: {

          slug: node.fields.slug,

        },
      })

    })
    _.each(posts, edge => {
      if (_.get(edge, 'node.frontmatter.tags')) {


        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })
    //console.log(tags)

    exports.onCreateNode = async({node, actions}) =>{
      const { createNodeField } = actions
     
        createNodeField({
          node,
          name: 'tagsForPosts',
          value: tags,
        })

      
      

    }

    
    tags.forEach(tag => {
      tagPostCount[tag] = (
        tagPostCount[tag] || 0) + 1
    })
    tags = _.uniq(tags)
    console.log(tagPostCount)
    //create tag page
    createPage({
      path: '/tags',
      component: templates.tagsPage,
      context: {
        tags,
        tagPostCount
      },
    })

    //create tag post pages
    tags.forEach(tag => {
      createPage({
        path: `/tag/${slugify(tag)}`,
        component: templates.tagPost,
        context: {
          tag,
        },
      })
    })

  })



}
exports.onCreateNode = async({ node, actions }) => {

  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const slugFromTitle = slugify(node.frontmatter.title)
    createNodeField({
      node,
      name: 'slug',
      value: slugFromTitle,
    })
  }

}