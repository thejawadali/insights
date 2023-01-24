import { request, gql } from 'graphql-request';

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
  `;

  const result = await request(apiEndpoint, query);

  return result;
};
