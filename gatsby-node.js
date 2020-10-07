
const path = require('path')
const { slugify } = require('./src/util/utilityFunctions')
const _ = require("lodash")

let tags = []

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const templates = {
    singPost: path.resolve('src/templates/single-post.js'),
    tagPost: path.resolve('src/templates/tag-posts.js'),
    postList: path.resolve('src/templates/post-list.js')

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

    exports.onCreateNode = async({node, actions}) =>{
      const { createNodeField } = actions
     
        createNodeField({
          node,
          name: 'tagsForPosts',
          value: tags,
        })
    }

    tags = _.uniq(tags)
   
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


    const postsPerPage = 4
    const numberOfPages = Math.ceil(posts.length / postsPerPage)

    Array.from({ length: numberOfPages }).forEach((_, index) => {

      const isFirstPage = index === 0
      const currentPage = index + 1

      if (isFirstPage) return

      createPage({
        path: `/page/${currentPage}`,
        component: templates.postList,
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
          numberOfPages: numberOfPages,
          currentPage: currentPage,
          
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