import { request, gql } from 'graphql-request'

const apiEndpoint: string = process.env.NEXT_PUBLIC_API_ENDPOINT || ""

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      posts {
        id
        createdAt
        slug
        title
        featuredImage {
          url
        }
        categories {
          name
        }
        author {
          name
          photo {
            mimeType
            url
          }
        }
      }
    }  
  `

  const result = await request(apiEndpoint, query)

  return result
}

export const getPostDetails = async (slug: any) => {
  const query = gql`
    query GetPostDetails($slug : String!) {
      post(where: {slug: $slug}) {
        title
        excerpt
        featuredImage {
          url
        }
        author{
          name
          photo {
            url
          }
        }
        createdAt
        slug
        content {
          raw
        }
        categories {
          name
        }
      }
    }
  `

  const { post } = await request(apiEndpoint, query, { slug })
  return post
}

